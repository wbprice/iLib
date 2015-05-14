/*
 * util/math.js - Misc math utility routines
 * 
 * Copyright © 2013, JEDLSoft
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

// !depends ilibglobal.js

/**
 * Return the sign of the given number. If the sign is negative, this function
 * returns -1. If the sign is positive or zero, this function returns 1.
 * @static
 * @param {number} num the number to test
 * @return {number} -1 if the number is negative, and 1 otherwise
 */
ilib.signum = function (num) {
	var n = num;
	if (typeof(num) === 'string') {
		n = parseInt(num, 10);
	} else if (typeof(num) !== 'number') {
		return 1;
	}
	return (n < 0) ? -1 : 1;
};


/**
 * @protected
 */
ilib._roundFnc = {
	/**
	 * @static
	 * @protected
	 * @param {number} num number to round
	 * @return {number} rounded number
	 */
	floor: function (num) {
		return Math.floor(num);
	},
	
	/**
	 * @static
	 * @protected
	 * @param {number} num number to round
	 * @return {number} rounded number
	 */
	ceiling: function (num) {
		return Math.ceil(num);
	},
	
	/**
	 * @static
	 * @protected
	 * @param {number} num number to round
	 * @return {number} rounded number
	 */
	down: function (num) {
		return (num < 0) ? Math.ceil(num) : Math.floor(num);
	},
	
	/**
	 * @static
	 * @protected
	 * @param {number} num number to round
	 * @return {number} rounded number
	 */
	up: function (num) {
		return (num < 0) ? Math.floor(num) : Math.ceil(num);
	},
	
	/**
	 * @static
	 * @protected
	 * @param {number} num number to round
	 * @return {number} rounded number
	 */
	halfup: function (num) {
		return (num < 0) ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
	},
	
	/**
	 * @static
	 * @protected
	 * @param {number} num number to round
	 * @return {number} rounded number
	 */
	halfdown: function (num) {
		return (num < 0) ? Math.floor(num + 0.5) : Math.ceil(num - 0.5);
	},
	
	/**
	 * @static
	 * @protected
	 * @param {number} num number to round
	 * @return {number} rounded number
	 */
	halfeven: function (num) {
		return (Math.floor(num) % 2 === 0) ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
	},
	
	/**
	 * @static
	 * @protected
	 * @param {number} num number to round
	 * @return {number} rounded number
	 */
	halfodd: function (num) {
		return (Math.floor(num) % 2 !== 0) ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
	}
};

/**
 * Do a proper modulo function. The Javascript % operator will give the truncated
 * division algorithm, but for calendrical calculations, we need the Euclidean
 * division algorithm where the remainder of any division, whether the dividend
 * is negative or not, is always a positive number in the range [0, modulus).<p>
 * 
 * Depends directive: !depends utils.js
 * 
 * @param {number} dividend the number being divided
 * @param {number} modulus the number dividing the dividend. This should always be a positive number.
 * @return the remainder of dividing the dividend by the modulus.  
 */
ilib.mod = function (dividend, modulus) {
	if (modulus == 0) {
		return 0;
	}
	var x = dividend % modulus;
	return (x < 0) ? x + modulus : x;
};

/**
 * Do a proper adjusted modulo function. The Javascript % operator will give the truncated
 * division algorithm, but for calendrical calculations, we need the Euclidean
 * division algorithm where the remainder of any division, whether the dividend
 * is negative or not, is always a positive number in the range (0, modulus]. The adjusted
 * modulo function differs from the regular modulo function in that when the remainder is
 * zero, the modulus should be returned instead.<p>
 * 
 * Depends directive: !depends utils.js
 * 
 * @param {number} dividend the number being divided
 * @param {number} modulus the number dividing the dividend. This should always be a positive number.
 * @return the remainder of dividing the dividend by the modulus.  
 */
ilib.amod = function (dividend, modulus) {
	if (modulus == 0) {
		return 0;
	}
	var x = dividend % modulus;
	return (x <= 0) ? x + modulus : x;
};