/*
 * astro.js - Static functions to support astronomical calculations
 * 
 * Copyright © 2014, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* !depends
ilibglobal.js
date.js
calendar/gregoriandate.js
calendar/gregratadie.js
*/

// !data astro

/*
 * These routines were derived from a public domain set of JavaScript 
 * functions for positional astronomy by John Walker of Fourmilab, 
 * September 1999.
 */

/**
 * Load in all the data needed for astrological calculations.
 * 
 * @param {boolean} sync
 * @param {*} loadParams
 * @param {function(*)|undefined} callback
 */
ilib.Date.initAstro = function(sync, loadParams, callback) {
	if (!ilib.data.astro) {
		ilib.loadData({
			name: "astro.json", // countries in their own language 
			locale: "-", // only need to load the root file 
			nonLocale: true,
			sync: sync, 
			loadParams: loadParams, 
			callback: ilib.bind(this, /** @type function() */ function(astroData) {
				/** 
				 * @type {{
				 *  	_EquinoxpTerms:Array.<number>, 
				 *  	_JDE0tab1000:Array.<number>, 
				 *  	_JDE0tab2000:Array.<number>, 
				 *  	_deltaTtab:Array.<number>,
				 *  	_oterms:Array.<number>,
				 *  	_nutArgMult:Array.<number>, 
				 *  	_nutArgCoeff:Array.<number>, 
				 *  	_nutCoeffA:Array.<number>,
				 *  	_nutCoeffB:Array.<number>,
				 *  	_coeff19th:Array.<number>,
				 *  	_coeff18th:Array.<number>,
				 *  	_solarLongCoeff:Array.<number>, 
				 *  	_solarLongMultipliers:Array.<number>, 
				 *  	_solarLongAddends:Array.<number>, 
				 *  	_meanMoonCoeff:Array.<number>,
				 *  	_elongationCoeff:Array.<number>,
				 *  	_solarAnomalyCoeff:Array.<number>,
				 *  	_lunarAnomalyCoeff:Array.<number>,
				 *  	_moonFromNodeCoeff:Array.<number>,
				 *  	_eCoeff:Array.<number>,
				 *  	_lunarElongationLongCoeff:Array.<number>,
				 *  	_solarAnomalyLongCoeff:Array.<number>,
				 *  	_lunarAnomalyLongCoeff:Array.<number>,
				 *  	_moonFromNodeLongCoeff:Array.<number>,
				 *  	_sineCoeff:Array.<number>,
				 *  	_nmApproxCoeff:Array.<number>,
				 *  	_nmCapECoeff:Array.<number>,
				 *  	_nmSolarAnomalyCoeff:Array.<number>,
				 *  	_nmLunarAnomalyCoeff:Array.<number>,
				 *  	_nmMoonArgumentCoeff:Array.<number>,
				 *  	_nmCapOmegaCoeff:Array.<number>,
				 *  	_nmEFactor:Array.<number>,
				 *  	_nmSolarCoeff:Array.<number>,
				 *  	_nmLunarCoeff:Array.<number>,
				 *  	_nmMoonCoeff:Array.<number>,
				 *  	_nmSineCoeff:Array.<number>,
				 *  	_nmAddConst:Array.<number>,
				 *  	_nmAddCoeff:Array.<number>,
				 *  	_nmAddFactor:Array.<number>,
				 *  	_nmExtra:Array.<number>
				 *  }}
				 */ 	
			 	ilib.data.astro = astroData;
				if (callback && typeof(callback) === 'function') {
					callback(astroData);
				}
			})
		});
	} else {
		if (callback && typeof(callback) === 'function') {
			callback(ilib.data.astro);
		}
	}
};

/**
 * Convert degrees to radians.
 * 
 * @static
 * @param {number} d angle in degrees
 * @return {number} angle in radians 
 */
ilib.Date._dtr = function(d) {
	return (d * Math.PI) / 180.0;
};

/**
 * Convert radians to degrees.
 * 
 * @static
 * @param {number} r angle in radians
 * @return {number} angle in degrees 
 */
ilib.Date._rtd = function(r) {
	return (r * 180.0) / Math.PI;
};

/**
 * Return the cosine of an angle given in degrees.
 * @static
 * @param {number} d angle in degrees
 * @return {number} cosine of the angle.
 */  
ilib.Date._dcos = function(d) {
	return Math.cos(ilib.Date._dtr(d));
};

/**
 * Return the sine of an angle given in degrees.
 * @static
 * @param {number} d angle in degrees
 * @return {number} sine of the angle.
 */  
ilib.Date._dsin = function(d) {
	return Math.sin(ilib.Date._dtr(d));
};

/**
 * Return the tan of an angle given in degrees.
 * @static
 * @param {number} d angle in degrees
 * @return {number} tan of the angle.
 */  
ilib.Date._dtan = function(d) {
	return Math.tan(ilib.Date._dtr(d));
};

/**
 * Range reduce angle in degrees.
 * 
 * @static
 * @param {number} a angle to reduce
 * @return {number} the reduced angle  
 */
ilib.Date._fixangle = function(a) {
	return a - 360.0 * (Math.floor(a / 360.0));
};

/**
 * Range reduce angle in radians.
 * 
 * @static
 * @param {number} a angle to reduce
 * @return {number} the reduced angle  
 */
ilib.Date._fixangr = function(a) {
	return a - (2 * Math.PI) * (Math.floor(a / (2 * Math.PI)));
};

/**
 * Determine the Julian Ephemeris Day of an equinox or solstice.  The "which" 
 * argument selects the item to be computed:
 * 
 * <ul>
 * <li>0   March equinox
 * <li>1   June solstice
 * <li>2   September equinox
 * <li>3   December solstice
 * </ul>
 * 
 * @static
 * @param {number} year Gregorian year to calculate for
 * @param {number} which Which equinox or solstice to calculate
 */
ilib.Date._equinox = function(year, which) {
	var deltaL, i, j, JDE0, JDE, JDE0tab, S, T, W, Y;

	/*  Initialize terms for mean equinox and solstices.  We
	    have two sets: one for years prior to 1000 and a second
	    for subsequent years.  */

	if (year < 1000) {
		JDE0tab = ilib.data.astro._JDE0tab1000;
		Y = year / 1000;
	} else {
		JDE0tab = ilib.data.astro._JDE0tab2000;
		Y = (year - 2000) / 1000;
	}

	JDE0 = JDE0tab[which][0] + (JDE0tab[which][1] * Y)
			+ (JDE0tab[which][2] * Y * Y) + (JDE0tab[which][3] * Y * Y * Y)
			+ (JDE0tab[which][4] * Y * Y * Y * Y);

	//document.debug.log.value += "JDE0 = " + JDE0 + "\n";

	T = (JDE0 - 2451545.0) / 36525;
	//document.debug.log.value += "T = " + T + "\n";
	W = (35999.373 * T) - 2.47;
	//document.debug.log.value += "W = " + W + "\n";
	deltaL = 1 + (0.0334 * ilib.Date._dcos(W)) + (0.0007 * ilib.Date._dcos(2 * W));
	//document.debug.log.value += "deltaL = " + deltaL + "\n";

	//  Sum the periodic terms for time T

	S = 0;
	j = 0;
	for (i = 0; i < 24; i++) {
		S += ilib.data.astro._EquinoxpTerms[j]
				* ilib.Date._dcos(ilib.data.astro._EquinoxpTerms[j + 1] + (ilib.data.astro._EquinoxpTerms[j + 2] * T));
		j += 3;
	}

	//document.debug.log.value += "S = " + S + "\n";
	//document.debug.log.value += "Corr = " + ((S * 0.00001) / deltaL) + "\n";

	JDE = JDE0 + ((S * 0.00001) / deltaL);

	return JDE;
};

/* 
 * The table of observed Delta T values at the beginning of
 * years from 1620 through 2014 as found in astro.json is taken from
 * http://www.staff.science.uu.nl/~gent0113/deltat/deltat.htm
 * and
 * ftp://maia.usno.navy.mil/ser7/deltat.data
 */

/**  
 * Determine the difference, in seconds, between dynamical time and universal time.
 * 
 * @static
 * @param {number} year to calculate the difference for
 * @return {number} difference in seconds between dynamical time and universal time  
 */
ilib.Date._deltat = function (year) {
	var dt, f, i, t;

	if ((year >= 1620) && (year <= 2014)) {
		i = Math.floor(year - 1620);
		f = (year - 1620) - i; /* Fractional part of year */
		dt = ilib.data.astro._deltaTtab[i] + ((ilib.data.astro._deltaTtab[i + 1] - ilib.data.astro._deltaTtab[i]) * f);
	} else {
		t = (year - 2000) / 100;
		if (year < 948) {
			dt = 2177 + (497 * t) + (44.1 * t * t);
		} else {
			dt = 102 + (102 * t) + (25.3 * t * t);
			if ((year > 2000) && (year < 2100)) {
				dt += 0.37 * (year - 2100);
			}
		}
	}
	return dt;
};

/**
 * Calculate the obliquity of the ecliptic for a given
 * Julian date.  This uses Laskar's tenth-degree
 * polynomial fit (J. Laskar, Astronomy and
 * Astrophysics, Vol. 157, page 68 [1986]) which is
 * accurate to within 0.01 arc second between AD 1000
 * and AD 3000, and within a few seconds of arc for
 * +/-10000 years around AD 2000.  If we're outside the
 * range in which this fit is valid (deep time) we
 * simply return the J2000 value of the obliquity, which
 * happens to be almost precisely the mean.
 * 
 * @static
 * @param {number} jd Julian Day to calculate the obliquity for
 * @return {number} the obliquity
 */
ilib.Date._obliqeq = function (jd) {
	var eps, u, v, i;

 	v = u = (jd - 2451545.0) / 3652500.0;

 	eps = 23 + (26 / 60.0) + (21.448 / 3600.0);

 	if (Math.abs(u) < 1.0) {
 		for (i = 0; i < 10; i++) {
 			eps += (ilib.data.astro._oterms[i] / 3600.0) * v;
 			v *= u;
 		}
 	}
 	return eps;
};

/**
 * Return the position of the sun.  We return
 * intermediate values because they are useful in a
 * variety of other contexts.
 * @static
 * @param {number} jd find the position of sun on this Julian Day
 * @return {Object} the position of the sun and many intermediate
 * values
 */
ilib.Date._sunpos = function(jd) {
	var ret = {}, 
		T, T2, T3, Omega, epsilon, epsilon0;

	T = (jd - 2451545.0) / 36525.0;
	//document.debug.log.value += "Sunpos.  T = " + T + "\n";
	T2 = T * T;
	T3 = T * T2;
	ret.meanLongitude = ilib.Date._fixangle(280.46646 + 36000.76983 * T + 0.0003032 * T2);
	//document.debug.log.value += "ret.meanLongitude = " + ret.meanLongitude + "\n";
	ret.meanAnomaly = ilib.Date._fixangle(357.52911 + (35999.05029 * T) - 0.0001537 * T2 - 0.00000048 * T3);
	//document.debug.log.value += "ret.meanAnomaly = " + ret.meanAnomaly + "\n";
	ret.eccentricity = 0.016708634 - 0.000042037 * T - 0.0000001267 * T2;
	//document.debug.log.value += "e = " + e + "\n";
	ret.equationOfCenter = ((1.914602 - 0.004817 * T - 0.000014 * T2) * ilib.Date._dsin(ret.meanAnomaly))
			+ ((0.019993 - 0.000101 * T) * ilib.Date._dsin(2 * ret.meanAnomaly))
			+ (0.000289 * ilib.Date._dsin(3 * ret.meanAnomaly));
	//document.debug.log.value += "ret.equationOfCenter = " + ret.equationOfCenter + "\n";
	ret.sunLongitude = ret.meanLongitude + ret.equationOfCenter;
	//document.debug.log.value += "ret.sunLongitude = " + ret.sunLongitude + "\n";
	//ret.sunAnomaly = ret.meanAnomaly + ret.equationOfCenter;
	//document.debug.log.value += "ret.sunAnomaly = " + ret.sunAnomaly + "\n";
	// ret.sunRadius = (1.000001018 * (1 - (ret.eccentricity * ret.eccentricity))) / (1 + (ret.eccentricity * ilib.Date._dcos(ret.sunAnomaly)));
	//document.debug.log.value += "ret.sunRadius = " + ret.sunRadius + "\n";
	Omega = 125.04 - (1934.136 * T);
	//document.debug.log.value += "Omega = " + Omega + "\n";
	ret.apparentLong = ret.sunLongitude + (-0.00569) + (-0.00478 * ilib.Date._dsin(Omega));
	//document.debug.log.value += "ret.apparentLong = " + ret.apparentLong + "\n";
	epsilon0 = ilib.Date._obliqeq(jd);
	//document.debug.log.value += "epsilon0 = " + epsilon0 + "\n";
	epsilon = epsilon0 + (0.00256 * ilib.Date._dcos(Omega));
	//document.debug.log.value += "epsilon = " + epsilon + "\n";
	//ret.rightAscension = ilib.Date._fixangle(ilib.Date._rtd(Math.atan2(ilib.Date._dcos(epsilon0) * ilib.Date._dsin(ret.sunLongitude), ilib.Date._dcos(ret.sunLongitude))));
	//document.debug.log.value += "ret.rightAscension = " + ret.rightAscension + "\n";
	// ret.declination = ilib.Date._rtd(Math.asin(ilib.Date._dsin(epsilon0) * ilib.Date._dsin(ret.sunLongitude)));
	////document.debug.log.value += "ret.declination = " + ret.declination + "\n";
	ret.inclination = ilib.Date._fixangle(23.4392911 - 0.013004167 * T - 0.00000016389 * T2 + 0.0000005036 * T3);
	ret.apparentRightAscension = ilib.Date._fixangle(ilib.Date._rtd(Math.atan2(ilib.Date._dcos(epsilon) * ilib.Date._dsin(ret.apparentLong), ilib.Date._dcos(ret.apparentLong))));
	//document.debug.log.value += "ret.apparentRightAscension = " + ret.apparentRightAscension + "\n";
	//ret.apparentDeclination = ilib.Date._rtd(Math.asin(ilib.Date._dsin(epsilon) * ilib.Date._dsin(ret.apparentLong)));
	//document.debug.log.value += "ret.apparentDecliation = " + ret.apparentDecliation + "\n";

	// Angular quantities are expressed in decimal degrees
	return ret;
};

/**
 * Calculate the nutation in longitude, deltaPsi, and obliquity, 
 * deltaEpsilon for a given Julian date jd. Results are returned as an object
 * giving deltaPsi and deltaEpsilon in degrees.
 * 
 * @static
 * @param {number} jd calculate the nutation of this Julian Day
 * @return {Object} the deltaPsi and deltaEpsilon of the nutation
 */
ilib.Date._nutation = function(jd) {
	var i, j, 
		t = (jd - 2451545.0) / 36525.0, 
		t2, t3, to10, 
		ta = [], 
		dp = 0, 
		de = 0, 
		ang,
		ret = {};

	t3 = t * (t2 = t * t);

	/*
	 * Calculate angles. The correspondence between the elements of our array
	 * and the terms cited in Meeus are:
	 * 
	 * ta[0] = D ta[0] = M ta[2] = M' ta[3] = F ta[4] = \Omega
	 * 
	 */

	ta[0] = ilib.Date._dtr(297.850363 + 445267.11148 * t - 0.0019142 * t2 + t3 / 189474.0);
	ta[1] = ilib.Date._dtr(357.52772 + 35999.05034 * t - 0.0001603 * t2 - t3 / 300000.0);
	ta[2] = ilib.Date._dtr(134.96298 + 477198.867398 * t + 0.0086972 * t2 + t3 / 56250.0);
	ta[3] = ilib.Date._dtr(93.27191 + 483202.017538 * t - 0.0036825 * t2 + t3 / 327270);
	ta[4] = ilib.Date._dtr(125.04452 - 1934.136261 * t + 0.0020708 * t2 + t3 / 450000.0);

	/*
	 * Range reduce the angles in case the sine and cosine functions don't do it
	 * as accurately or quickly.
	 */

	for (i = 0; i < 5; i++) {
		ta[i] = ilib.Date._fixangr(ta[i]);
	}

	to10 = t / 10.0;
	for (i = 0; i < 63; i++) {
		ang = 0;
		for (j = 0; j < 5; j++) {
			if (ilib.data.astro._nutArgMult[(i * 5) + j] != 0) {
				ang += ilib.data.astro._nutArgMult[(i * 5) + j] * ta[j];
			}
		}
		dp += (ilib.data.astro._nutArgCoeff[(i * 4) + 0] + ilib.data.astro._nutArgCoeff[(i * 4) + 1] * to10) * Math.sin(ang);
		de += (ilib.data.astro._nutArgCoeff[(i * 4) + 2] + ilib.data.astro._nutArgCoeff[(i * 4) + 3] * to10) * Math.cos(ang);
	}

	/*
	 * Return the result, converting from ten thousandths of arc seconds to
	 * radians in the process.
	 */

	ret.deltaPsi = dp / (3600.0 * 10000.0);
	ret.deltaEpsilon = de / (3600.0 * 10000.0);

	return ret;
};

/**
 * Returns the equation of time as a fraction of a day.
 * 
 * @static
 * @param {number} jd the Julian Day of the day to calculate for
 * @return {number} the equation of time for the given day  
 */
ilib.Date._equationOfTime = function(jd) {
	var alpha, deltaPsi, E, epsilon, L0, tau, pos;

	// 2451545.0 is the Julian day of J2000 epoch
	// 365250.0 is the number of days in a Julian millenium
	tau = (jd - 2451545.0) / 365250.0;
	//console.log("equationOfTime.  tau = " + tau);
	L0 = 280.4664567 + (360007.6982779 * tau) + (0.03032028 * tau * tau)
			+ ((tau * tau * tau) / 49931)
			+ (-((tau * tau * tau * tau) / 15300))
			+ (-((tau * tau * tau * tau * tau) / 2000000));
	//console.log("L0 = " + L0);
	L0 = ilib.Date._fixangle(L0);
	//console.log("L0 = " + L0);
	pos = ilib.Date._sunpos(jd);
	alpha = pos.apparentRightAscension;
	//console.log("alpha = " + alpha);
	var nut = ilib.Date._nutation(jd);
	deltaPsi = nut.deltaPsi;
	//console.log("deltaPsi = " + deltaPsi);
	epsilon = ilib.Date._obliqeq(jd) + nut.deltaEpsilon;
	//console.log("epsilon = " + epsilon);
	//console.log("L0 - 0.0057183 = " + (L0 - 0.0057183));
	//console.log("L0 - 0.0057183 - alpha = " + (L0 - 0.0057183 - alpha));
	//console.log("deltaPsi * cos(epsilon) = " + deltaPsi * ilib.Date._dcos(epsilon));
	
	E = L0 - 0.0057183 - alpha + deltaPsi * ilib.Date._dcos(epsilon);
	// if alpha and L0 are in different quadrants, then renormalize
	// so that the difference between them is in the right range
	if (E > 180) {
		E -= 360;
	}
	//console.log("E = " + E);
	// E = E - 20.0 * (Math.floor(E / 20.0));
	E = E * 4;
	//console.log("Efixed = " + E);
	E = E / (24 * 60);
	//console.log("Eday = " + E);

	return E;
};

/**
 * @private
 * @static
 */
ilib.Date._poly = function(x, coefficients) {
	var result = coefficients[0];
	var xpow = x;
	for (var i = 1; i < coefficients.length; i++) {
		result += coefficients[i] * xpow;
		xpow *= x;
	}
	return result;
};

/**
 * Calculate the UTC RD from the local RD given "zone" number of minutes
 * worth of offset.
 * 
 * @static
 * @param {number} local RD of the locale time, given in any calendar
 * @param {number} zone number of minutes of offset from UTC for the time zone 
 * @return {number} the UTC equivalent of the local RD
 */
ilib.Date._universalFromLocal = function(local, zone) {
	return local - zone / 1440;
};

/**
 * Calculate the local RD from the UTC RD given "zone" number of minutes
 * worth of offset.
 * 
 * @static
 * @param {number} local RD of the locale time, given in any calendar
 * @param {number} zone number of minutes of offset from UTC for the time zone 
 * @return {number} the UTC equivalent of the local RD
 */
ilib.Date._localFromUniversal = function(local, zone) {
	return local + zone / 1440;
};

/**
 * @private
 * @static
 * @param {number} c julian centuries of the date to calculate
 * @return {number} the aberration
 */
ilib.Date._aberration = function(c) {
	return 9.74e-05 * ilib.Date._dcos(177.63 + 35999.01847999999 * c) - 0.005575;
};

/**
 * @private
 *
ilib.data.astro._nutCoeffA = [124.90, -1934.134, 0.002063];
ilib.data.astro._nutCoeffB = [201.11, 72001.5377, 0.00057];
*/

/**
 * @private
 * @static
 * @param {number} c julian centuries of the date to calculate
 * @return {number} the nutation for the given julian century in radians
 */
ilib.Date._nutation2 = function(c) {
	var a = ilib.Date._poly(c, ilib.data.astro._nutCoeffA);
	var b = ilib.Date._poly(c, ilib.data.astro._nutCoeffB);
	// return -0.0000834 * ilib.Date._dsin(a) - 0.0000064 * ilib.Date._dsin(b);
	return -0.004778 * ilib.Date._dsin(a) - 0.0003667 * ilib.Date._dsin(b);
};


/**
 * @static
 * @private
 */
ilib.Date._ephemerisCorrection = function(jd) {
	var year = ilib.Date.GregDate._calcYear(jd - 1721424.5);
	
	if (1988 <= year && year <= 2019) {
		return (year - 1933) / 86400;
	}
	
	if (1800 <= year && year <= 1987) {
		var jul1 = new ilib.Date.GregRataDie({
			year: year,
			month: 7,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0
		});
		// 693596 is the rd of Jan 1, 1900
		var theta = (jul1.getRataDie() - 693596) / 36525;
		return ilib.Date._poly(theta, (1900 <= year) ? ilib.data.astro._coeff19th : ilib.data.astro._coeff18th);
	}
	
	if (1620 <= year && year <= 1799) {
		year -= 1600;
		return (196.58333 - 4.0675 * year + 0.0219167 * year * year) / 86400;
	}
	
	// 660724 is the rd of Jan 1, 1810
	var jan1 = new ilib.Date.GregRataDie({
		year: year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0
	});
	// var x = 0.5 + (jan1.getRataDie() - 660724);
	var x = 0.5 + (jan1.getRataDie() - 660724);
	
	return ((x * x / 41048480) - 15) / 86400;
};

/**
 * @static
 * @private
 */
ilib.Date._ephemerisFromUniversal = function(jd) {
	return jd + ilib.Date._ephemerisCorrection(jd);
};

/**
 * @static
 * @private
 */
ilib.Date._universalFromEphemeris = function(jd) {
	return jd - ilib.Date._ephemerisCorrection(jd);
};

/**
 * @static
 * @private
 */
ilib.Date._julianCenturies = function(jd) {
	// 2451545.0 is the Julian day of J2000 epoch
	// 730119.5 is the Gregorian RD of J2000 epoch
	// 36525.0 is the number of days in a Julian century
	return (ilib.Date._ephemerisFromUniversal(jd) - 2451545.0) / 36525.0;
};

/**
 * Calculate the solar longitude
 * 
 * @static
 * @param {number} jd julian day of the date to calculate the longitude for 
 * @return {number} the solar longitude in degrees
 */
ilib.Date._solarLongitude = function(jd) {
	var c = ilib.Date._julianCenturies(jd),
		longitude = 0,
		len = ilib.data.astro._solarLongCoeff.length,
		row;
	
	for (var i = 0; i < len; i++) {
		longitude += ilib.data.astro._solarLongCoeff[i] * 
			ilib.Date._dsin(ilib.data.astro._solarLongAddends[i] + ilib.data.astro._solarLongMultipliers[i] * c);
	}
	longitude *= 5.729577951308232e-06;
	longitude += 282.77718340000001 + 36000.769537439999 * c;
	longitude += ilib.Date._aberration(c) + ilib.Date._nutation2(c);
	return ilib.Date._fixangle(longitude);
};

/**
 * @static
 * @protected
 * @param {number} jd
 * @return {number}
 */
ilib.Date._lunarLongitude = function (jd) {
	var c = ilib.Date._julianCenturies(jd),
	    meanMoon = ilib.Date._fixangle(ilib.Date._poly(c, ilib.data.astro._meanMoonCoeff)),
	    elongation = ilib.Date._fixangle(ilib.Date._poly(c, ilib.data.astro._elongationCoeff)),
	    solarAnomaly = ilib.Date._fixangle(ilib.Date._poly(c, ilib.data.astro._solarAnomalyCoeff)),
	    lunarAnomaly = ilib.Date._fixangle(ilib.Date._poly(c, ilib.data.astro._lunarAnomalyCoeff)),
	    moonNode = ilib.Date._fixangle(ilib.Date._poly(c, ilib.data.astro._moonFromNodeCoeff)),
	    e = ilib.Date._poly(c, ilib.data.astro._eCoeff);
	
	var sum = 0;
	for (var i = 0; i < ilib.data.astro._lunarElongationLongCoeff.length; i++) {
		var x = ilib.data.astro._solarAnomalyLongCoeff[i];

		sum += ilib.data.astro._sineCoeff[i] * Math.pow(e, Math.abs(x)) * 
			ilib.Date._dsin(ilib.data.astro._lunarElongationLongCoeff[i] * elongation + x * solarAnomaly + 
				ilib.data.astro._lunarAnomalyLongCoeff[i] * lunarAnomaly + 
				ilib.data.astro._moonFromNodeLongCoeff[i] * moonNode);
	}
	var longitude = sum / 1000000;
	var venus = 3958.0 / 1000000 * ilib.Date._dsin(119.75 + c * 131.84899999999999);
	var jupiter = 318.0 / 1000000 * ilib.Date._dsin(53.090000000000003 + c * 479264.28999999998);
	var flatEarth = 1962.0 / 1000000 * ilib.Date._dsin(meanMoon - moonNode);
	
	return ilib.Date._fixangle(meanMoon + longitude + venus + jupiter + flatEarth + ilib.Date._nutation2(c));
};

/**
 * @static
 * @param {number} n
 * @return {number} julian day of the n'th new moon
 */
ilib.Date._newMoonTime = function(n) {
	var k = n - 24724;
	var c = k / 1236.8499999999999;
	var approx = ilib.Date._poly(c, ilib.data.astro._nmApproxCoeff);
	var capE = ilib.Date._poly(c, ilib.data.astro._nmCapECoeff);
	var solarAnomaly = ilib.Date._poly(c, ilib.data.astro._nmSolarAnomalyCoeff);
	var lunarAnomaly = ilib.Date._poly(c, ilib.data.astro._nmLunarAnomalyCoeff);
	var moonArgument = ilib.Date._poly(c, ilib.data.astro._nmMoonArgumentCoeff);
	var capOmega = ilib.Date._poly(c, ilib.data.astro._nmCapOmegaCoeff);
	var correction = -0.00017 * ilib.Date._dsin(capOmega);
	for (var i = 0; i < ilib.data.astro._nmSineCoeff.length; i++) {
		correction = correction + ilib.data.astro._nmSineCoeff[i] * Math.pow(capE, ilib.data.astro._nmEFactor[i]) * 
		ilib.Date._dsin(ilib.data.astro._nmSolarCoeff[i] * solarAnomaly + 
				ilib.data.astro._nmLunarCoeff[i] * lunarAnomaly + 
				ilib.data.astro._nmMoonCoeff[i] * moonArgument);
	}
	var additional = 0;
	for (var i = 0; i < ilib.data.astro._nmAddConst.length; i++) {
		additional = additional + ilib.data.astro._nmAddFactor[i] * 
		ilib.Date._dsin(ilib.data.astro._nmAddConst[i] + ilib.data.astro._nmAddCoeff[i] * k);
	}
	var extra = 0.000325 * ilib.Date._dsin(ilib.Date._poly(c, ilib.data.astro._nmExtra));
	return ilib.Date._universalFromEphemeris(approx + correction + extra + additional + ilib.Date.RataDie.gregorianEpoch);
};

/**
 * @static
 * @param {number} jd
 * @return {number}
 */
ilib.Date._lunarSolarAngle = function(jd) {
	var lunar = ilib.Date._lunarLongitude(jd);
	var solar = ilib.Date._solarLongitude(jd)
	return ilib.Date._fixangle(lunar - solar);
};

/**
 * @static
 * @param {number} jd
 * @return {number}
 */
ilib.Date._newMoonBefore = function (jd) {
	var phase = ilib.Date._lunarSolarAngle(jd);
	// 11.450086114414322 is the julian day of the 0th full moon
	// 29.530588853000001 is the average length of a month
	var guess = Math.round((jd - 11.450086114414322 - ilib.Date.RataDie.gregorianEpoch) / 29.530588853000001 - phase / 360) - 1;
	var current, last;
	current = last = ilib.Date._newMoonTime(guess);
	while (current < jd) {
		guess++;
		last = current;
		current = ilib.Date._newMoonTime(guess);
	}
	return last;
};

/**
 * @static
 * @param {number} jd
 * @return {number}
 */
ilib.Date._newMoonAtOrAfter = function (jd) {
	var phase = ilib.Date._lunarSolarAngle(jd);
	// 11.450086114414322 is the julian day of the 0th full moon
	// 29.530588853000001 is the average length of a month
	var guess = Math.round((jd - 11.450086114414322 - ilib.Date.RataDie.gregorianEpoch) / 29.530588853000001 - phase / 360);
	var current;
	while ((current = ilib.Date._newMoonTime(guess)) < jd) {
		guess++;
	}
	return current;
};

/**
 * @static
 * @param {number} jd JD to calculate from
 * @param {number} longitude longitude to seek 
 * @returns {number} the JD of the next time that the solar longitude 
 * is a multiple of the given longitude
 */
ilib.Date._nextSolarLongitude = function(jd, longitude) {
	var rate = 365.242189 / 360.0;
	var tau = jd + rate * ilib.Date._fixangle(longitude - ilib.Date._solarLongitude(jd));
	var start = Math.max(jd, tau - 5.0);
	var end = tau + 5.0;
	
	return ilib.bisectionSearch(0, start, end, 1e-6, function (l) {
		return 180 - ilib.Date._fixangle(ilib.Date._solarLongitude(l) - longitude);
	});
};

/**
 * Floor the julian day to midnight of the current julian day.
 * 
 * @static
 * @protected
 * @param {number} jd the julian to round
 * @return {number} the jd floored to the midnight of the julian day
 */
ilib.Date._floorToJD = function(jd) {
	return Math.floor(jd - 0.5) + 0.5;
};

/**
 * Floor the julian day to midnight of the current julian day.
 * 
 * @static
 * @protected
 * @param {number} jd the julian to round
 * @return {number} the jd floored to the midnight of the julian day
 */
ilib.Date._ceilToJD = function(jd) {
	return Math.ceil(jd + 0.5) - 0.5;
};