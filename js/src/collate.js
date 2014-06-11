/*
 * collate.js - Collation routines
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

// !depends locale.js ilibglobal.js numprs.js ctype.ispunct.js normstring.js

// !data col_default

/**
 * Represents a buffered source of code points. The input string is first
 * normalized so that combining characters come out in a standardized order.
 * If the "ignorePunctuation" flag is turned on, then punctuation 
 * characters are skipped.
 * 
 * @class
 * @constructor
 * @param {ilib.NormString|string} str a string to get code points from
 * @param {boolean} ignorePunctuation whether or not to ignore punctuation
 * characters
 */
ilib.CodePointSource = function(str, ignorePunctuation) {
	this.chars = [];
	// first convert the string to a normalized sequence of characters
	var s = (typeof(str) === "string") ? new ilib.NormString(str) : str;
	this.it = s.normalize("nfkc").charIterator();
	this.ignorePunctuation = typeof(ignorePunctuation) === "boolean" && ignorePunctuation;
};

/**
 * Return the first num code points in the source without advancing the
 * source pointer. If there are not enough code points left in the
 * string to satisfy the request, this method will return undefined. 
 * 
 * @param {number} num the number of characters to peek ahead
 * @return {string|undefined} a string formed out of up to num code points from
 * the start of the string, or undefined if there are not enough character left
 * in the source to complete the request
 */
ilib.CodePointSource.prototype.peek = function(num) {
	if (num < 1) {
		return undefined;
	}
	if (this.chars.length < num && this.it.hasNext()) {
		for (var i = 0; this.chars.length < 4 && this.it.hasNext(); i++) {
			var c = this.it.next();
			if (c && !this.ignorePunctuation || !ilib.CType.isPunct(c)) {
				this.chars.push(c);
			}
		}
	}
	if (this.chars.length < num) {
		return undefined;
	}
	return this.chars.slice(0, num).join("");
};
/**
 * Advance the source pointer by the given number of code points.
 * @param {number} num number of code points to advance
 */
ilib.CodePointSource.prototype.consume = function(num) {
	if (num > 0) {
		this.peek(num); // for the iterator to go forward if needed
		if (num < this.chars.length) {
			this.chars = this.chars.slice(num);
		} else {
			this.chars = [];
		}
	}
};


/**
 * An iterator through a sequence of collation elements. This
 * iterator takes a source of code points, converts them into
 * collation elements, and allows the caller to get single
 * elements at a time.
 * 
 * @class
 * @constructor
 * @param {ilib.CodePointSource} source source of code points to 
 * convert to collation elements
 * @param {Object} map mapping from sequences of code points to
 * collation elements
 * @param {number} keysize size in bits of the collation elements
 */
ilib.ElementIterator = function (source, map, keysize) {
	this.elements = [];
	this.source = source;
	this.map = map;
	this.keysize = keysize;
};

/**
 * @private
 */
ilib.ElementIterator.prototype._fillBuffer = function () {
	var str = undefined;
	
	// peek ahead by up to 4 characters, which may combine
	// into 1 or more collation elements
	for (var i = 4; i > 0; i--) {
		str = this.source.peek(i);
		if (str && this.map[str]) {
			this.elements = this.elements.concat(this.map[str]);
			this.source.consume(i);
			return;
		}
	}
	
	if (str) {
		// no mappings for the first code point, so just use its
		// Unicode code point as a proxy for its sort order. Shift
		// it by the key size so that everything unknown sorts
		// after things that have mappings
		this.elements.push(str.charCodeAt(0) << this.keysize);
		this.source.consume(1);
	} else {
		// end of the string
		return undefined;
	}
};

/**
 * Return true if there are more collation elements left to
 * iterate through.
 * @returns {boolean} true if there are more elements left to
 * iterate through, and false otherwise
 */
ilib.ElementIterator.prototype.hasNext = function () {
	if (this.elements.length < 1) {
		this._fillBuffer();
	}
	return !!this.elements.length;
};

/**
 * Return the next collation element. If more than one collation 
 * element is generated from a sequence of code points 
 * (ie. an "expansion"), then this class will buffer the
 * other elements and return them on subsequent calls to 
 * this method.
 * 
 * @returns {number|undefined} the next collation element or
 * undefined for no more collation elements
 */
ilib.ElementIterator.prototype.next = function () {
	if (this.elements.length < 1) {
		this._fillBuffer();
	}
	var ret = this.elements[0];
	this.elements = this.elements.slice(1);
	return ret;
};


/**
 * @class
 * @constructor
 * 
 * A class that implements a locale-sensitive comparator function 
 * for use with sorting function. The comparator function
 * assumes that the strings it is comparing contain Unicode characters
 * encoded in UTF-16.<p>
 * 
 * Collations usually depend only on the language, because most collation orders 
 * are shared between locales that speak the same language. There are, however, a
 * number of instances where a locale collates differently than other locales
 * that share the same language. There are also a number of instances where a
 * locale collates differently based on the script used. This object can handle
 * these cases automatically if a full locale is specified in the options rather
 * than just a language code.<p>
 * 
 * <h2>Options</h2>
 * 
 * The options parameter can contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - String|Locale. The locale which the comparator function 
 * will collate with. Default: the current iLib locale.
 * 
 * <li><i>sensitivity</i> - String. Sensitivity or strength of collator. This is one of 
 * "primary", "base", "secondary", "accent", "tertiary", "case", "quaternary", or 
 * "variant". Default: "primary"
 *   <ol>
 *   <li>base or primary - Only the primary distinctions between characters are significant.
 *   Another way of saying that is that the collator will be case-, accent-, and 
 *   variation-insensitive, and only distinguish between the base characters
 *   <li>case or secondary - Both the primary and secondary distinctions between characters
 *   are significant. That is, the collator will be accent- and variation-insensitive
 *   and will distinguish between base characters and character case.
 *   <li>accent or tertiary - The primary, secondary, and tertiary distinctions between
 *   characters are all significant. That is, the collator will be 
 *   variation-insensitive, but accent-, case-, and base-character-sensitive. 
 *   <li>variant or quaternary - All distinctions between characters are significant. That is,
 *   the algorithm is base character-, case-, accent-, and variation-sensitive.
 *   </ol>
 *   
 * <li><i>upperFirst</i> - boolean. When collating case-sensitively in a script that
 * has the concept of case, put upper-case
 * characters first, otherwise lower-case will come first. Default: true
 * 
 * <li><i>reverse</i> - boolean. Return the list sorted in reverse order. When the
 * upperFirst option is also set to true, upper-case characters would then come at 
 * the end of the list. Default: false.
 * 
 * <li><i>scriptOrder</i> - string. When collating strings in multiple scripts,
 * this property specifies what order those scripts should be sorted. The default
 * Unicode Collation Algorithm (UCA) already has a default order for scripts, but
 * this can be tailored via this property. The value of this option is a 
 * space-separated list of ISO 15924 scripts codes. If a code is specified in this
 * property, its default data must be included using the JS assembly tool. If the
 * data is not included, the ordering for the script will be ignored. Default:
 * the default order defined by the UCA. 
 * 
 * <li><i>style</i> - The value of the style parameter is dependent on the locale.
 * For some locales, there are different styles of collating strings depending
 * on what kind of strings are being collated or what the preference of the user 
 * is. For example, in German, there is a phonebook order and a dictionary ordering
 * that sort the same array of strings slightly differently.
 * The static method ilib.Collator.getStyles will return a list of styles that ilib
 * currently knows about for any given locale. If the value of the style option is 
 * not recognized for a locale, it will be ignored. Default style is "standard".<p>
 * 
 * <li><i>usage</i> - Whether this collator will be used for searching or sorting.
 * Valid values are simply the strings "sort" or "search". When used for sorting,
 * it is good idea if a collator produces a stable sort. That is, the order of the 
 * sorted array of strings should not depend on the order of the strings in the
 * input array. As such, when a collator is supposed to act case insensitively, 
 * it nonetheless still distinguishes between case after all other criteria
 * are satisfied so that strings that are distinguished only by case do not sort
 * randomly. For searching, we would like to match two strings that different only 
 * by case, so the collator must return equals in that situation instead of 
 * further distinguishing by case. Default is "sort".
 * 
 * <li><i>numeric</i> - Treat the left and right strings as if they started with
 * numbers and sort them numerically rather than lexically.
 * 
 * <li><i>ignorePunctuation</i> - Skip punctuation characters when comparing the
 * strings.
 *  
 * <li>onLoad - a callback function to call when the collator object is fully 
 * loaded. When the onLoad option is given, the collator object will attempt to
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
 * 
 * <li><i>useNative</i> - when this option is true, use the native Intl object
 * provided by the Javascript engine, if it exists, to implement this class. If
 * it doesn't exist, or if this parameter is false, then this class uses a pure 
 * Javascript implementation, which is slower and uses a lot more memory, but 
 * works everywhere that ilib works. Default is "true".
 * </ul>
 * 
 * <h2>Operation</h2>
 * 
 * The Collator constructor returns a collator object tailored with the above 
 * options. The object contains an internal compare() method which compares two 
 * strings according to those options. This can be used directly to compare
 * two strings, but is not useful for passing to the javascript sort function
 * because then it will not have its collation data available. Instead, use the 
 * getComparator() method to retrieve a function that is bound to the collator
 * object. (You could also bind it yourself using ilib.bind()). The bound function 
 * can be used with the standard Javascript array sorting algorithm, or as a 
 * comparator with your own sorting algorithm.<p>
 * 
 * Example using the standard Javascript array sorting call with the bound
 * function:<p>
 * 
 * <code>
 * <pre>
 * var arr = ["ö", "oe", "ü", "o", "a", "ae", "u", "ß", "ä"];
 * var collator = ilib.Collator({locale: 'de-DE', style: "dictionary"});
 * arr.sort(collator.getComparator());
 * console.log(JSON.stringify(arr));
 * </pre>
 * </code>
 * <p>
 * 
 * Would give the output:<p>
 * 
 * <code>
 * <pre>
 * ["a", "ae", "ä", "o", "oe", "ö", "ß", "u", "ü"]
 * </pre>
 * </code>
 * 
 * When sorting an array of Javascript objects according to one of the 
 * string properties of the objects, wrap the collator's compare function 
 * in your own comparator function that knows the structure of the objects
 * being sorted:<p>
 * 
 * <code>
 * <pre>
 * var collator = ilib.Collator({locale: 'de-DE'});
 * var myComparator = function (collator) {
 *   var comparator = collator.getComparator();
 *   // left and right are your own objects
 *   return function (left, right) {
 *   	return comparator(left.x.y.textProperty, right.x.y.textProperty);
 *   };
 * };
 * arr.sort(myComparator(collator));
 * </pre>
 * </code>
 * <p>
 * 
 * <h2>Sort Keys</h2>
 * 
 * The collator class also has a method to retrieve the sort key for a
 * string. The sort key is an array of values that represent how each  
 * character in the string should be collated according to the characteristics
 * of the collation algorithm and the given options. Thus, sort keys can be 
 * compared directly value-for-value with other sort keys that were generated 
 * by the same collator, and the resulting ordering is guaranteed to be the 
 * same as if the original strings were compared by the collator.
 * Sort keys generated by different collators are not guaranteed to give
 * any reasonable results when compared together unless the two collators 
 * were constructed with 
 * exactly the same options and therefore end up representing the exact same 
 * collation sequence.<p>
 * 
 * A good rule of thumb is that you would use a sort key if you had 10 or more
 * items to sort or if your array might be resorted arbitrarily. For example, if your 
 * user interface was displaying a table with 100 rows in it, and each row had
 * 4 sortable text columns which could be sorted in acending or descending order,
 * the recommended practice would be to generate a sort key for each of the 4
 * sortable fields in each row and store that in the Javascript representation of the
 * table data. Then, when the user clicks on a column header to resort the
 * table according to that column, the resorting would be relatively quick 
 * because it would only be comparing arrays of values, and not recalculating 
 * the collation values for each character in each string for every comparison.<p>
 * 
 * For tables that are large, it is usually a better idea to do the sorting
 * on the server side, especially if the table is the result of a database
 * query. In this case, the table is usually a view of the cursor of a large
 * results set, and only a few entries are sent to the front end at a time.
 * In order to sort the set efficiently, it should be done on the database
 * level instead.
 * 
 * <h2>Data</h2>
 * 
 * Doing correct collation entails a huge amount of mapping data, much of which is
 * not necessary when collating in one language with one script, which is the most
 * common case. Thus, ilib implements a number of ways to include the data you
 * need or leave out the data you don't need using the JS assembly tool:
 * 
 * <ol>
 * <li>Full multilingual data - if you are sorting multilingual data and need to collate 
 * text written in multiple scripts, you can use the directive "!data collation/ducet" to 
 * load in the full collation data.  This allows the collator to perform the entire 
 * Unicode Collation Algorithm (UCA) based on the Default Unicode Collation Element 
 * Table (DUCET). The data is very large, on the order of multiple megabytes, but 
 * sometimes it is necessary.
 * <li>A few scripts - if you are sorting text written in only a few scripts, you may 
 * want to include only the data for those scripts. Each ISO 15924 script code has its
 * own data available in a separate file, so you can use the data directive to include
 * only the data for the scripts you need. For example, use  
 * "!data collation/Latn" to retrieve the collation information for the Latin script.
 * Because the "ducet" table mentioned in the previous point is a superset of the 
 * tables for all other scripts, you do not need to include explicitly the data for 
 * any particular script when using "ducet". That is, you either include "ducet" or 
 * you include a specific list of scripts.
 * <li>Only one script - if you are sorting text written only in one script, you can
 * either include the data directly as in the previous point, or you can rely on the 
 * locale to include the correct data for you. In this case, you can use the directive
 * "!data collate" to load in the locale's collation data for its most common script.
 * </ol>
 *   
 * With any of the above ways of including the data, the collator will only perform the
 * correct language-sensitive sorting for the given locale. All other scripts will be
 * sorted in the default manner according to the UCA. For example, if you include the
 * "ducet" data and pass in "de-DE" (German for Germany) as the locale spec, then
 * only the Latin script (the default script for German) will be sorted according to
 * German rules. All other scripts in the DUCET, such as Japanese or Arabic, will use 
 * the default UCA collation rules.<p>
 * 
 * If this collator encounters a character for which it has no collation data, it will
 * sort those characters by pure Unicode value after all characters for which it does have
 * collation data. For example, if you only loaded in the German collation data (ie. the
 * data for the Latin script tailored to German) to sort a list of person names, but that
 * list happens to include the names of a few Japanese people written in Japanese 
 * characters, the Japanese names will sort at the end of the list after all German names,
 * and will sort according to the Unicode values of the characters.
 * 
 * @param {Object} options options governing how the resulting comparator 
 * function will operate
 */
ilib.Collator = function(options) {
	var sync = true,
		loadParams = undefined,
		useNative = true;

	// defaults
	/** @type ilib.Locale */
	this.locale = new ilib.Locale(ilib.getLocale());
	this.caseFirst = "upper";
	this.sensitivity = "variant";
	this.level = 4;
	this.usage = "sort";
	this.reverse = false;
	this.numeric = false;
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		if (options.sensitivity) {
			switch (options.sensitivity) {
				case 'primary':
				case 'base':
					this.sensitivity = "base";
					this.level = 0;
					break;
				case 'secondary':
				case 'case':
					this.sensitivity = "case";
					this.level = 1;
					break;
				case 'tertiary':
				case 'accent':
					this.sensitivity = "accent";
					this.level = 2;
					break;
				case 'quaternary':
				case 'variant':
					this.sensitivity = "variant";
					this.level = 3;
					break;
			}
		}
		if (typeof(options.upperFirst) !== 'undefined') {
			/** @type string */
			this.caseFirst = options.upperFirst ? "upper" : "lower"; 
		}
		
		if (typeof(options.ignorePunctuation) !== 'undefined') {
			/** @type boolean */
			this.ignorePunctuation = options.ignorePunctuation;
		}
		if (typeof(options.sync) !== 'undefined') {
			sync = (options.sync == true);
		}
		
		loadParams = options.loadParams;
		if (typeof(options.useNative) !== 'undefined') {
			useNative = options.useNative;
		}
		
		if (options.usage === "sort" || options.usage === "search") {
			this.usage = options.usage;
		}
		
		if (typeof(options.reverse) === 'boolean') {
			this.reverse = options.reverse;
		}

		if (typeof(options.numeric) === 'boolean') {
			this.numeric = options.numeric;
		}
	}

	if (this.usage === "sort") {
		// produces a stable sort
		this.level = 4;
	}

	if (useNative && typeof(Intl) !== 'undefined' && Intl) {
		// this engine is modern and supports the new Intl object!
		//console.log("implemented natively");
		/** @type {{compare:function(string,string)}} */
		this.collator = new Intl.Collator(this.locale.getSpec(), this);
		
		if (options && typeof(options.onLoad) === 'function') {
			options.onLoad(this);
		}
	} else {
		//console.log("implemented in pure JS");
		if (!ilib.Collator.cache) {
			ilib.Collator.cache = {};
		}

		// else implement in pure Javascript
		ilib.loadData({
			object: ilib.Collator, 
			locale: this.locale, 
			name: "col_default.json", 
			sync: sync, 
			loadParams: loadParams, 
			callback: ilib.bind(this, function (collation) {
				if (!collation) {
					collation = ilib.data.col_default;
					var spec = this.locale.getSpec().replace(/-/g, '_');
					ilib.Collator.cache[spec] = collation;
				}
				this._init(collation);
				new ilib.LocaleInfo(this.locale, {
					sync: sync,
					loadParams: loadParams,
					onLoad: ilib.bind(this, function(li) {
						this.li = li;
				    	ilib.NormString.init({
				    		form: "nfkc",
				    		script: li.getScript(),
				    		sync: sync,
				    		loadParams: loadParams,
				    		onLoad: ilib.bind(this, function() {
				    			if (this.ignorePunctuation) {
					    			ilib.CType.isPunct._init(sync, loadParams, ilib.bind(this, function() {
										if (options && typeof(options.onLoad) === 'function') {
											options.onLoad(this);
										}
					    			}));
				    			} else {
									if (options && typeof(options.onLoad) === 'function') {
										options.onLoad(this);
									}
				    			}
				    		})
				    	});
		    		})
				});
			})
		});
	}
};

ilib.Collator.prototype = {
	/**
	 * @private
	 * Bit pack an array of values into a single number
	 * @param {Array.<number>} arr array of values to bit pack
	 */
	_pack: function (arr) {
		var value = 0;
		for (var i = 0; i < this.level; i++) {
			if (i > 0) {
				value <<= this.collation.bits[i];	
			}
			if (i === 1 && this.caseFirst === "upper") {
				// sort the upper case first instead of lower
				value = value | (1 - arr[i]);
			} else {
				value = value | arr[i];
			}
		}
		return value;
	},
	
	/**
	 * @private
	 * Return the rule packed into an array of collation elements.
	 * @param {Array.<number|Array.<number>>} rule
	 * @returns
	 */
	_packRule: function(rule) {
		if (typeof(rule[0]) === 'array') {
			var ret = [];
			for (var i = 0; i < rule.length; i++) {
				ret.push(this._pack(rule[i]));
			}
			return ret;
		} else {
			return [ this._pack(rule) ];
		}
	},
    	
	/**
     * @private
     */
    _init: function(rules) {
    	/** @type {{scripts:Array.<string>,bits:Array.<number>,maxes:Array.<number>,bases:Array.<number>,map:Object.<string,Array.<number>>}} */
    	this.collation = rules;
    	this.map = {};
    	this.keysize = 0;
    	for (var i = 0; i < this.level; i++) {
    		this.keysize += rules.bits[i];
    	}
    	this.keysize += (4 - ilib.mod(this.keysize, 4)); // round to the nearest 4 to find how many bits to use in hex
    	
    	for (var r in rules.map) {
    		if (r) {
    			this.map[r] = this._packRule(rules.map[r]);
    		}
    	}
    },
    
    /**
     * @private
     */
    _basicCompare: function(left, right) {
		if (this.numeric) {
			var lvalue = new ilib.Number(left, {locale: this.locale});
			var rvalue = new ilib.Number(right, {locale: this.locale});
			if (isNaN(lvalue.valueOf())) {
				if (isNaN(rvalue.valueOf())) {
					return 0;
				}
				return 1;
			} else if (isNaN(rvalue.valueOf())) {
				return -1;
			}
			return lvalue.valueOf() - rvalue.valueOf();
		} else {
			var l = (left instanceof ilib.NormString) ? left : new ilib.NormString(left),
				r = (right instanceof ilib.NormString) ? right : new ilib.NormString(right),
				lelements,
				relements;
				
			// if the reverse sort is on, switch the char sources so that the result comes out swapped
			lelements = new ilib.ElementIterator(new ilib.CodePointSource(l, this.ignorePunctuation), this.map, this.keysize);
			relements = new ilib.ElementIterator(new ilib.CodePointSource(r, this.ignorePunctuation), this.map, this.keysize);
			
			while (lelements.hasNext() && relements.hasNext()) {
				var diff = lelements.next() - relements.next();
				if (diff) {
					return diff;
				}
			}
			if (!lelements.hasNext() && !relements.hasNext()) {
				return 0;
			} else if (lelements.hasNext()) {
				return 1;
			} else {
				return -1;
			}
		}
    },
    
	/**
	 * Compare two strings together according to the rules of this 
	 * collator instance. Do not use this function directly with 
	 * Array.sort, as it will not have its collation data available
	 * and therefore will not function properly. Use the function
	 * returned by getComparator() instead.
	 * 
	 * @param {string} left the left string to compare
	 * @param {string} right the right string to compare
	 * @return {number} a negative number if left comes before right, a
	 * positive number if right comes before left, and zero if left and 
	 * right are equivalent according to this collator
	 */
	compare: function (left, right) {
		// last resort: use the "C" locale
		if (this.collator) {
			// implemented by the core engine
			return this.collator.compare(left, right);
		}

		var ret = this._basicCompare(left, right);
		return this.reverse ? -ret : ret;
	},
	
	/**
	 * Return a comparator function that can compare two strings together
	 * according to the rules of this collator instance. The function 
	 * returns a negative number if the left 
	 * string comes before right, a positive number if the right string comes 
	 * before the left, and zero if left and right are equivalent. If the
	 * reverse property was given as true to the collator constructor, this 
	 * function will
	 * switch the sign of those values to cause sorting to happen in the
	 * reverse order.
	 * 
	 * @return {function(...)|undefined} a comparator function that 
	 * can compare two strings together according to the rules of this 
	 * collator instance
	 */
	getComparator: function() {
		// bind the function to this instance so that we have the collation
		// rules available to do the work
		if (this.collator) {
			// implemented by the core engine
			return this.collator.compare;
		}
		
		return /** @type function(string,string):number */ ilib.bind(this, this.compare);
	},
	
	/**
	 * Return a sort key string for the given string. The sort key
	 * string is a list of values that represent each character 
	 * in the original string. The sort key
	 * values for any particular character consists of 3 numbers that
	 * encode the primary, secondary, and tertiary characteristics
	 * of that character. The values of each characteristic are 
	 * modified according to the strength of this collator instance 
	 * to give the correct collation order. The idea is that this
	 * sort key string is directly comparable byte-for-byte to 
	 * other sort key strings generated by this collator without
	 * any further knowledge of the collation rules for the locale.
	 * More formally, if a < b according to the rules of this collation, 
	 * then it is guaranteed that sortkey(a) < sortkey(b) when compared
	 * byte-for-byte. The sort key string can therefore be used
	 * without the collator to sort an array of strings efficiently
	 * because the work of determining the applicability of various
	 * collation rules is done once up-front when generating 
	 * the sort key.<p>
	 * 
	 * The sort key string can be treated as a regular, albeit somewhat
	 * odd-looking, string. That is, it can be pass to regular 
	 * Javascript functions without problems.  
	 * 
	 * @param {string} str the original string to generate the sort key for
	 * @return {string} a sort key string for the given string
	 */
	sortKey: function (str) {
		if (!str) {
			return "";
		}
		
		if (this.collator) {
			// native, no sort keys available
			return str;
		}
		
		function pad(str, limit) {
			return "0000000000000000".substring(0, limit - str.length) + str;
		}
		
		if (this.numeric) {
			var v = new ilib.Number(str, {locale: this.locale});
			var s = isNaN(v.valueOf()) ? "" : v.valueOf().toString(16);
			return pad(s, 16);	
		} else {
			var n = (typeof(str) === "string") ? new ilib.NormString(str) : str,
				ret = "",
				lelements = new ilib.ElementIterator(new ilib.CodePointSource(n, this.ignorePunctuation), this.map, this.keysize);
			
			while (lelements.hasNext()) {
				ret += pad(lelements.next().toString(16), this.keysize/4);	
			}
		}
		return ret;
	}
};

/**
 * Retrieve the list of collation style names that are available for the 
 * given locale. This list varies depending on the locale, and depending
 * on whether or not the data for that locale was assembled into this copy
 * of ilib.
 * 
 * @param {ilib.Locale|string=} locale The locale for which the available
 * styles are being sought
 * @return Array.<string> an array of style names that are available for
 * the given locale
 */
ilib.Collator.getAvailableStyles = function (locale) {
	return [ "standard" ];
};

/**
 * Retrieve the list of ISO 15924 script codes that are available in this
 * copy of ilib. This list varies depending on whether or not the data for 
 * various scripts was assembled into this copy of ilib. If the "ducet"
 * data is assembled into this copy of ilib, this method will report the
 * entire list of scripts as being available. If a collator instance is
 * instantiated with a script code that is not on the list returned by this
 * function, it will be ignored and text in that script will be sorted by
 * numeric Unicode values of the characters.
 * 
 * @return Array.<string> an array of ISO 15924 script codes that are 
 * available
 */
ilib.Collator.getAvailableScripts = function () {
	return [ "Latn" ];
};
