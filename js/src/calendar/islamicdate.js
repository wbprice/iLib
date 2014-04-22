/*
 * islamicdate.js - Represent a date in the Islamic calendar
 * 
 * Copyright © 2012, JEDLSoft
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
date.js 
calendar/islamic.js 
util/utils.js 
util/search.js
util/math.js
localeinfo.js
julianday.js
*/

/**
 * @class
 * 
 * Construct a new Islamic RD date number object. The constructor parameters can 
 * contain any of the following properties:
 * 
 * <ul>
 * <li><i>unixtime<i> - sets the time of this instance according to the given 
 * unix time. Unix time is the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * <li><i>julianday</i> - sets the time of this instance according to the given
 * Julian Day instance or the Julian Day given as a float
 * 
 * <li><i>year</i> - any integer, including 0
 * 
 * <li><i>month</i> - 1 to 12, where 1 means January, 2 means February, etc.
 * 
 * <li><i>day</i> - 1 to 31
 * 
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * 
 * <li><i>minute</i> - 0 to 59
 * 
 * <li><i>second</i> - 0 to 59
 * 
 * <li><i>millisecond</i> - 0 to 999
 * 
 * <li><i>date</i> - use the given intrinsic Javascript date to initialize this one.
 * </ul>
 *
 * If the constructor is called with another Islamic date instance instead of
 * a parameter block, the other instance acts as a parameter block and its
 * settings are copied into the current instance.<p>
 * 
 * If the constructor is called with no arguments at all or if none of the 
 * properties listed above are present, then the RD is calculate based on 
 * the current date at the time of instantiation. <p>
 * 
 * If any of the properties from <i>year</i> through <i>millisecond</i> are not
 * specified in the params, it is assumed that they have the smallest possible
 * value in the range for the property (zero or one).<p>
 * 
 * Depends directive: !depends islamicdate.js
 * 
 * @constructor
 * @param {Object=} params parameters that govern the settings and behaviour of this Islamic RD date
 */
ilib.Date.IslamicRataDie = function(params) {
	this.cal = new ilib.Cal.Islamic();

	if (params) {
		if (typeof(params.date) !== 'undefined') {
			// accept JS Date classes or strings
			var date = params.date;
			if (!(date instanceof Date)) {
				date = new Date(date);
			}
			this._setTime(date.getTime());
		} else if (typeof(params.unixtime) != 'undefined') {
			this._setTime(parseInt(params.unixtime, 10));
		} else if (typeof(params.julianday) != 'undefined') {
			this._setJulianDay(parseFloat(params.julianday));
		} else if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond || params.parts ) {
			this._setDateComponents(params);
		} else if (typeof(params.rd) != 'undefined') {
			this.rd = (typeof(params.rd) === 'object' && params.rd instanceof ilib.DateFmt.IslamicRataDie) ? params.rd.rd : params.rd;
		}
	}
	
	if (typeof(this.rd) === 'undefined') {
		var now = new Date();
		this._setTime(now.getTime());
	}
};

/**
 * @private
 * @const
 * @type number
 * The difference between a zero Julian day and the first Islamic date
 * of Friday, July 16, 622 CE Julian. 
 */
ilib.Date.IslamicRataDie.epoch = 1948439.5;

ilib.Date.IslamicRataDie.prototype = {
	/**
	 * @private
	 * Set the RD of this instance according to the given unix time. Unix time is
	 * the number of milliseconds since midnight on Jan 1, 1970.
	 * 
	 * @param {number} millis the unix time to set this date to in milliseconds 
	 */
	_setTime: function(millis) {
		this.rd = 492148 + millis / 86400000;
	},
	
	/**
	 * @private
	 * Set the date of this instance using a Julian Day.
	 * @param {number} date the Julian Day to use to set this date
	 */
	_setJulianDay: function (date) {
		var jd = (typeof(date) === 'number') ? new ilib.JulianDay(date) : date;
		this.rd = ilib._roundFnc.halfdown((jd.getDate() - ilib.Date.IslamicRataDie.epoch) * 100000000) / 100000000;
	},
	
	/**
	 * @private
	 * Calculate the Rata Die (fixed day) number of the given date from the
	 * date components.
	 * 
	 * @param {Object} date the date components to calculate the RD from
	 */
	_setDateComponents: function(date) {
		var days = (date.year - 1) * 354 +
			Math.ceil(29.5 * (date.month - 1)) +
			date.day +
			Math.floor((3 + 11 * date.year) / 30) - 1;
		var time = (date.hour * 3600000 +
			date.minute * 60000 +
			date.second * 1000 +
			date.millisecond) / 
			86400000; 
		
		//console.log("getRataDie: converting " +  JSON.stringify(date));
		//console.log("getRataDie: days is " +  days);
		//console.log("getRataDie: time is " +  time);
		//console.log("getRataDie: rd is " +  (days + time));

		this.rd = days + time;
	},
	
	/**
	 * Return the day of the week of this date. The day of the week is encoded
	 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
	 * 
	 * @return {number} the day of the week
	 */
	getDayOfWeek: function() {
		var rd = Math.floor(this.rd);
		return ilib.mod(rd-2, 7);
	},
	
	/**
	 * @private
	 * Return the rd number of the particular day of the week on or before the 
	 * given rd. eg. The Sunday on or before the given rd.
	 * @param {number} rd the rata die date of the reference date
	 * @param {number} dayOfWeek the day of the week that is being sought relative 
	 * to the current date
	 * @return {number} the rd of the day of the week
	 */
	_onOrBeforeRd: function(rd, dayOfWeek) {
		return rd - ilib.mod(Math.floor(rd) - dayOfWeek - 2, 7);
	},
	
	/**
	 * Return the rd number of the particular day of the week on or before the current rd.
	 * eg. The Sunday on or before the current rd.
	 * @param {number} dayOfWeek the day of the week that is being sought relative 
	 * to the current date
	 * @return {number} the rd of the day of the week
	 */
	onOrBefore: function(dayOfWeek) {
		return this._onOrBeforeRd(this.rd, dayOfWeek);
	},
	
	/**
	 * @private
	 * Return the rd of the particular day of the week on or before the given rd.
	 * eg. The Sunday on or before the given rd.
	 * @param {number} dayOfWeek the day of the week that is being sought relative 
	 * to the reference date
	 */
	onOrAfter: function(dayOfWeek) {
		return this._onOrBeforeRd(this.rd+6, dayOfWeek);
	},

	/**
	 * @private
	 * Return the rd of the particular day of the week before the given rd.
	 * eg. The Sunday before the given rd.
	 * @param {number} dayOfWeek the day of the week that is being sought relative 
	 * to the reference date
	 */
	before: function(dayOfWeek) {
		return this._onOrBeforeRd(this.rd-1, dayOfWeek);
	},

	/**
	 * @private
	 * Return the rd of the particular day of the week after the given rd.
	 * eg. The Sunday after the given rd.
	 * @param {number} dayOfWeek the day of the week that is being sought relative 
	 * to the reference date
	 */
	after: function(dayOfWeek) {
		return this._onOrBeforeRd(this.rd+7, dayOfWeek);
	},
	
	/**
	 * Return the unix time equivalent to this Islamic date instance. Unix time is
	 * the number of milliseconds since midnight on Jan 1, 1970. This method only
	 * returns a valid number for dates between midnight, Jan 1, 1970 and  
	 * Jan 19, 2038 at 3:14:07am when the unix time runs out. If this instance 
	 * encodes a date outside of that range, this method will return -1. This method
	 * returns the time in the local time zone, not in UTC.
	 * 
	 * @return {number} a number giving the unix time, or -1 if the date is outside the
	 * valid unix time range
	 */
	getTime: function() {
		// earlier than Jan 1, 1970
		// or later than Jan 19, 2038 at 3:14:07am
		if (this.rd < 492148 || this.rd > 517003.134803241) { 
			return -1;
		}
	
		// avoid the rounding errors in the floating point math by only using
		// the whole days from the rd, and then calculating the milliseconds directly
		return Math.round((this.rd - 492148) * 86400000);
	
	},
	
	/**
	 * Return the Julian Day equivalent to this calendar date as a number.
	 * This returns the julian day in the local time zone.
	 * 
	 * @return {number} the julian date equivalent of this date
	 */
	getJulianDay: function() {
		return this.rd + ilib.Date.IslamicRataDie.epoch;
	},
	
	/**
	 * Return the Rata Die (fixed day) number of this RD date.
	 * 
	 * @return {number} the rd date as a number
	 */
	getRataDie: function() {
		return this.rd;
	}
};

/**
 * @class
 * 
 * Construct a new civil Islamic date object. The constructor can be called
 * with a params object that can contain the following properties:<p>
 * 
 * <ul>
 * <li><i>julianday</i> - the Julian Day to set into this date
 * <li><i>year</i> - any integer except 0. Years go from -1 (BCE) to 1 (CE), skipping the zero year
 * <li><i>month</i> - 1 to 12, where 1 means Muharram, 2 means Saffar, etc.
 * <li><i>day</i> - 1 to 30
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * <li><i>minute</i> - 0 to 59
 * <li><i>second</i> - 0 to 59
 * <li><i>millisecond</i> - 0 to 999
 * <li><i>locale</i> - the ilib.TimeZone instance or time zone name as a string 
 * of this julian date. The date/time is kept in the local time. The time zone
 * is used later if this date is formatted according to a different time zone and
 * the difference has to be calculated, or when the date format has a time zone
 * component in it.
 * <li><i>timezone</i> - the time zone of this instance. If the time zone is not 
 * given, it can be inferred from this locale. For locales that span multiple
 * time zones, the one with the largest population is chosen as the one that 
 * represents the locale. 
 * 
 * <li><i>date</i> - use the given intrinsic Javascript date to initialize this one.
 * </ul>
 * 
 * If called with another Islamic date argument, the date components of the given
 * date are copied into the current one.<p>
 * 
 * If the constructor is called with no arguments at all or if none of the 
 * properties listed above 
 * from <i>julianday</i> through <i>millisecond</i> are present, then the date 
 * components are 
 * filled in with the current date at the time of instantiation. Note that if
 * you do not give the time zone when defaulting to the current time and the 
 * time zone for all of ilib was not set with <i>ilib.setTimeZone()</i>, then the
 * time zone will default to UTC ("Universal Time, Coordinated" or "Greenwich 
 * Mean Time").<p>
 * 
 * Depends directive: !depends islamicdate.js
 * 
 * @constructor
 * @extends ilib.Date
 * @param {Object=} params parameters that govern the settings and behaviour of this Islamic date
 */
ilib.Date.IslamicDate = function(params) {
	this.cal = new ilib.Cal.Islamic();
	
	if (params) {
		if (params.locale) {
			this.locale = (typeof(params.locale) === 'string') ? new ilib.Locale(params.locale) : params.locale;
			var li = new ilib.LocaleInfo(this.locale);
			this.timezone = li.getTimeZone(); 
		}
		if (params.timezone) {
			this.timezone = params.timezone;
		}
		
		if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond ) {
			/**
			 * Year in the Islamic calendar.
			 * @type number
			 */
			this.year = parseInt(params.year, 10) || 0;

			/**
			 * The month number, ranging from 1 to 12 (December).
			 * @type number
			 */
			this.month = parseInt(params.month, 10) || 1;

			/**
			 * The day of the month. This ranges from 1 to 30.
			 * @type number
			 */
			this.day = parseInt(params.day, 10) || 1;
			
			/**
			 * The hour of the day. This can be a number from 0 to 23, as times are
			 * stored unambiguously in the 24-hour clock.
			 * @type number
			 */
			this.hour = parseInt(params.hour, 10) || 0;

			/**
			 * The minute of the hours. Ranges from 0 to 59.
			 * @type number
			 */
			this.minute = parseInt(params.minute, 10) || 0;

			/**
			 * The second of the minute. Ranges from 0 to 59.
			 * @type number
			 */
			this.second = parseInt(params.second, 10) || 0;

			/**
			 * The millisecond of the second. Ranges from 0 to 999.
			 * @type number
			 */
			this.millisecond = parseInt(params.millisecond, 10) || 0;
			
			/**
			 * The day of the year. Ranges from 1 to 355.
			 * @type number
			 */
			this.dayOfYear = parseInt(params.dayOfYear, 10);

			if (typeof(params.dst) === 'boolean') {
				this.dst = params.dst;
			}
			
			this.rd = new ilib.Date.IslamicRataDie(this);
			
			/*
			// add the time zone offset to the rd to convert to UTC
			if (!this.tz) {
				this.tz = new ilib.TimeZone({id: this.timezone});
			}
			// getOffsetMillis requires that this.year, this.rd, and this.dst 
			// are set in order to figure out which time zone rules apply and 
			// what the offset is at that point in the year
			var offset = -this.tz._getOffsetMillisWallTime(this) / 86400000;
			if (offset !== 0) {
				this.rd = new ilib.Date.GregRataDie({
					rd: this.rd.getRataDie() + offset
				});
			}
			*/
		}
	}

	if (!this.rd) {
		this.rd = new ilib.Date.IslamicRataDie(params);
		this.calcDateComponents();
	}
};

ilib.Date.IslamicDate.prototype = new ilib.Date();
ilib.Date.IslamicDate.prototype.parent = ilib.Date;
ilib.Date.IslamicDate.prototype.constructor = ilib.Date.IslamicDate;

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a non-leap year 
 */
ilib.Date.IslamicDate.cumMonthLengths = [
	0,  /* Muharram */
	30,  /* Saffar */
	59,  /* Rabi'I */
	89,  /* Rabi'II */
	118,  /* Jumada I */
	148,  /* Jumada II */
	177,  /* Rajab */
	207,  /* Sha'ban */
	236,  /* Ramadan */
	266,  /* Shawwal */
	295,  /* Dhu al-Qa'da */
	325,  /* Dhu al-Hijja */
	354
];

/**
 * @private
 * @const
 * @type number
 * Number of days difference between RD 0 of the Gregorian calendar and
 * RD 0 of the Islamic calendar. 
 */
ilib.Date.IslamicDate.GregorianDiff = 227015;

/**
 * @private
 * @const
 * @type number
 * The difference between a zero Julian day and the first Islamic date
 * of Friday, July 16, 622 CE Julian. 
 */
ilib.Date.IslamicDate.epoch = 1948439.5;

/**
 * @private
 * Return the Rata Die (fixed day) number of this date.
 * 
 * @return {number} the rd date as a number
 */
ilib.Date.IslamicDate.prototype.getRataDie = function() {
	return this.rd.getRataDie();
};

/**
 * @private
 * Calculate date components for the given RD date.
 */
ilib.Date.IslamicDate.prototype.calcDateComponents = function () {
	var remainder,
		rd = this.rd.getRataDie();
	
	this.year = Math.floor((30 * rd + 10646) / 10631);
	
	//console.log("IslamicDate.calcComponent: calculating for rd " + rd);
	//console.log("IslamicDate.calcComponent: year is " + ret.year);
	var yearStart = new ilib.Date.IslamicRataDie({
		year: this.year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	remainder = rd - yearStart.getRataDie() + 1;
	
	this.dayOfYear = remainder;
	
	//console.log("IslamicDate.calcComponent: remainder is " + remainder);
	
	this.month = ilib.bsearch(remainder, ilib.Date.IslamicDate.cumMonthLengths);
	remainder -= ilib.Date.IslamicDate.cumMonthLengths[this.month-1];

	//console.log("IslamicDate.calcComponent: month is " + this.month + " and remainder is " + remainder);
	
	this.day = Math.floor(remainder);
	remainder -= this.day;

	//console.log("IslamicDate.calcComponent: day is " + this.day + " and remainder is " + remainder);

	// now convert to milliseconds for the rest of the calculation
	remainder = Math.round(remainder * 86400000);
	
	this.hour = Math.floor(remainder/3600000);
	remainder -= this.hour * 3600000;
	
	this.minute = Math.floor(remainder/60000);
	remainder -= this.minute * 60000;
	
	this.second = Math.floor(remainder/1000);
	remainder -= this.second * 1000;
	
	this.millisecond = remainder;
};

/**
 * @private
 * Set the date components of this instance based on the given rd.
 * @param {number} rd the rata die date to set
 */
ilib.Date.IslamicDate.prototype.setRd = function (rd) {
	this.rd = new ilib.Date.IslamicRataDie({rd: rd});
	this.calcDateComponents();
};

/**
 * Set the date of this instance using a Julian Day.
 * @param {number} date the Julian Day to use to set this date
 */
ilib.Date.IslamicDate.prototype.setJulianDay = function (date) {
	this.rd = new ilib.Date.IslamicRataDie({julianday: date});
	this.calcDateComponents();
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.IslamicDate.prototype.getDayOfWeek = function() {
	return this.rd.getDayOfWeek();
};

/**
 * @private
 * Return the rd of the first Sunday of the given ISO year.
 * @return the rd of the first Sunday of the ISO year
 */
ilib.Date.IslamicDate.prototype.firstSunday = function (year) {
	var firstDay = new ilib.Date.IslamicRataDie({
		year: year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var firstThu = new ilib.Date.IslamicRataDie({rd: firstDay.onOrAfter(4)});
	return firstThu.before(0);
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week before the current date that is being sought
 * @returns {ilib.Date.IslamicDate} the date being sought
 */
ilib.Date.IslamicDate.prototype.before = function (dow) {
	return new ilib.Date.IslamicDate({rd: this.rd.before(dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week after the current date that is being sought
 * @returns {ilib.Date.IslamicDate} the date being sought
 */
ilib.Date.IslamicDate.prototype.after = function (dow) {
	return new ilib.Date.IslamicDate({rd: this.rd.after(dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or before the current date that is being sought
 * @returns {ilib.Date.IslamicDate} the date being sought
 */
ilib.Date.IslamicDate.prototype.onOrBefore = function (dow) {
	return new ilib.Date.IslamicDate({rd: this.rd.onOrBefore(dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or after the current date that is being sought
 * @returns {ilib.Date.IslamicDate} the date being sought
 */
ilib.Date.IslamicDate.prototype.onOrAfter = function (dow) {
	return new ilib.Date.IslamicDate({rd: this.rd.onOrAfter(dow)});
};

/**
 * Return the week number in the current year for the current date. This is calculated
 * similar to the ISO 8601 for a Gregorian calendar, but is not an ISO week number. 
 * The week number ranges from 1 to 51.
 * 
 * @return {number} the week number for the current date
 */
ilib.Date.IslamicDate.prototype.getWeekOfYear = function() {
	var rd = Math.floor(this.rd.getRataDie()),
		yearStart = this.firstSunday(this.year),
		nextYear;
	
	// if we have a Muh date, it may be in this year or the previous year
	if (rd < yearStart) {
		yearStart = this.firstSunday(this.year-1);
	} else if (this.month == 12 && this.day > 25) {
		// if we have a late Dhu al'Hijja date, it may be in this year, or the next year
		nextYear = this.firstSunday(this.year+1);
		if (rd >= nextYear) {
			yearStart = nextYear;
		}
	}
	
	return Math.floor((rd-yearStart)/7) + 1;
};

/**
 * Return the ordinal day of the year. Days are counted from 1 and proceed linearly up to 
 * 354 or 355, regardless of months or weeks, etc. That is, Muharran 1st is day 1, and 
 * Dhu al-Hijja 29 is 354.
 * @return {number} the ordinal day of the year
 */
ilib.Date.IslamicDate.prototype.getDayOfYear = function() {
	return ilib.Date.IslamicDate.cumMonthLengths[this.month-1] + this.day;
};

/**
 * Return the ordinal number of the week within the month. The first week of a month is
 * the first one that contains 4 or more days in that month. If any days precede this
 * first week, they are marked as being in week 0. This function returns values from 0
 * through 6.<p>
 * 
 * The locale is a required parameter because different locales that use the same 
 * Islamic calendar consider different days of the week to be the beginning of
 * the week. This can affect the week of the month in which some days are located.
 * 
 * @param {ilib.Locale|string} locale the locale or locale spec to use when figuring out 
 * the first day of the week
 * @return {number} the ordinal number of the week within the current month
 */
ilib.Date.IslamicDate.prototype.getWeekOfMonth = function(locale) {
	var li = new ilib.LocaleInfo(locale),
		first = new ilib.Date.IslamicRataDie({
			year: this.year,
			month: this.month,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0
		}),
		rd = this.rd.getRataDie(),
		weekStart = first.onOrAfter(li.getFirstDayOfWeek());
	if (weekStart - first.getRataDie() > 3) {
		// if the first week has 4 or more days in it of the current month, then consider
		// that week 1. Otherwise, it is week 0. To make it week 1, move the week start
		// one week earlier.
		weekStart -= 7;
	}
	return Math.floor((rd - weekStart) / 7) + 1;
};

/**
 * Return the era for this date as a number. The value for the era for Islamic 
 * calendars is -1 for "before the Islamic era" and 1 for "the Islamic era". 
 * Islamic era dates are any date after Muharran 1, 1, which is the same as
 * July 16, 622 CE in the Gregorian calendar. 
 * 
 * @return {number} 1 if this date is in the common era, -1 if it is before the 
 * common era 
 */
ilib.Date.IslamicDate.prototype.getEra = function() {
	return (this.year < 1) ? -1 : 1;
};

/**
 * Return the unix time equivalent to this Islamic date instance. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970 Gregorian. This method only
 * returns a valid number for dates between midnight, Jan 1, 1970 and  
 * Jan 19, 2038 at 3:14:07am when the unix time runs out. If this instance 
 * encodes a date outside of that range, this method will return -1.
 * 
 * @return {number} a number giving the unix time, or -1 if the date is outside the
 * valid unix time range
 */
ilib.Date.IslamicDate.prototype.getTime = function() {
	return this.rd.getTime();
};

/**
 * Set the time of this instance according to the given unix time. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * @param {number} millis the unix time to set this date to in milliseconds 
 */
ilib.Date.IslamicDate.prototype.setTime = function(millis) {
	this.rd = new ilib.Date.IslamicRataDie({unixtime: millis});
	this.calcDateComponents();
};

/**
 * Return a Javascript Date object that is equivalent to this Islamic date
 * object.
 * 
 * @return {Date|undefined} a javascript Date object
 */
ilib.Date.IslamicDate.prototype.getJSDate = function() {
	var unix = this.rd.getTime();
	return (unix === -1) ? undefined : new Date(unix); 
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.IslamicDate.prototype.getJulianDay = function() {
	return this.rd.getJulianDay();
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.IslamicDate.prototype.getCalendar = function() {
	return "islamic";
};

/**
 * Return the time zone associated with this Islamic date, or 
 * undefined if none was specified in the constructor.
 * 
 * @return {string|undefined} the name of the time zone for this date instance
 */
ilib.Date.IslamicDate.prototype.getTimeZone = function() {
	return this.timezone || "local";
};


/**
 * Set the time zone associated with this Islamic date.
 * @param {string} tzName the name of the time zone to set into this date instance,
 * or "undefined" to unset the time zone 
 */
ilib.Date.IslamicDate.prototype.setTimeZone = function (tzName) {
	if (!tzName || tzName === "") {
		// same as undefining it
		this.timezone = undefined;
		this.tz = undefined;
	} else if (typeof(tzName) === 'string') {
		this.timezone = tzName;
		this.tz = undefined;
		// assuming the same UTC time, but a new time zone, now we have to 
		// recalculate what the date components are
		this.calcDateComponents();
	}
};

//register with the factory method
ilib.Date._constructors["islamic"] = ilib.Date.IslamicDate;