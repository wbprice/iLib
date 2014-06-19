/*
 * numplan.js - Represent a phone numbering plan.
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

/*
!depends 
ilibglobal.js 
locale.js 
localeinfo.js
*/

// !data numplan

/**
 * Create a numbering plan information instance for a particular country's plan.<p>
 * 
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale for which the numbering plan is sought. This locale
 * will be mapped to the actual numbering plan, which may be shared amongst a
 * number of countries.
 *
 * <li>onLoad - a callback function to call when the date format object is fully 
 * loaded. When the onLoad option is given, the DateFmt object will attempt to
 * load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the 
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two.
 * 
 * <li>sync - tell whether to load any missing locale data synchronously or 
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while.
 *  
 * <li><i>loadParams</i> - an object containing parameters to pass to the 
 * loader callback function when locale data is missing. The parameters are not
 * interpretted or modified in any way. They are simply passed along. The object 
 * may contain any property/value pairs as long as the calling code is in
 * agreement with the loader callback function as to what those parameters mean.
 * </ul>
 * 
 * Depends directive: !depends phone/numplan.js
 * 
 * @class
 * @constructor
 * @param {Object} options options governing the way this plan is loaded
 */
ilib.NumPlan = function (options) {
	
};

/*
{
"region": "es",
"skipTrunk": true,
"trunkCode": "0",
"iddCode": "00",
"dialingPlan": "closed",
"commonFormatChars": " ()-",
"fieldLengths": {
	"areaCode": 0,
	"cic": 4,
	"mobilePrefix": 3,
	"serviceCode": 3,
	"emergency": 0,
	"minLocalLength": 9,
	"personal": 3
}
*/

ilib.NumPlan.prototype = {
	/**
	 * Return the name of this plan. This may be different than the 
	 * name of the region because sometimes multiple countries share 
	 * the same plan.
	 * @return {string} the name of the plan
	 */
	getName: function() {
		
	},

	/**
	 * Return the trunk code of the current plan as a string.
	 * @return {string|undefined} the trunk code of the plan or
	 * undefined if there is no trunk code in this plan
	 */
	getTrunkCode: function() {
		
	},
	
	/**
	 * Return the international direct dialing code of this plan.
	 * @return {string} the IDD code of this plan
	 */
	getIDDCode: function() {
		
	},
	
	/**
	 * Return the plan style for this plan. The plan style may be
	 * one of:
	 * 
	 * <ul>
	 * <li>"open" - area codes may be left off if the caller is 
	 * dialing to another number within the same area code
	 * <li>"closed" - the area code must always be specified, even
	 * if calling another number within the same area code
	 * </ul>
	 * 
	 * @return {string} the plan style, "open" or "closed"
	 */
	getPlanStyle: function() {
		
	},
	
	/**
	 * Return true if this plan uses extended area codes.
	 * @return {boolean} true if the plan uses extended area codes
	 */
	usesExtendedAreaCodes: function () {
		
	},
	
	/**
	 * Return a string containing all of the common format characters
	 * used to format numbers.
	 * @return {string} the common format characters fused in this locale
	 */
	getCommonFormatChars: function() {
		
	},
	
	/**
	 * Return the length of the field with the given name. If the length
	 * is returned as 0, this means it is variable length.
	 * 
	 * @param {string} field name of the field for which the length is 
	 * being sought
	 * @return {number} if positive, this gives the length of the given 
	 * field. If zero, the field is variable length. If negative, the
	 * field is not known.
	 */
	getFieldLength: function (field) {
		// put code here
	}
};
