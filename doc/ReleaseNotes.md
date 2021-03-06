Release Notes for Version 12.0
=============================

Build 003
-------

New Features:

* Updated the number formatting to the CLDR 26.0.1 settings. This means that various formats for various locales have been changed and updated to better match the actual usage in those regions.

Build 002
-------

New Features:

* Implemented character set mapping in pure javascript. iLib now includes json files for the same charset mappings to/from Unicode that Linux supports. (These can be huge for Eastern charsets.) See the new tutorial page about [Character Set Mapping](charmaps) for more details on how it works and how to use it.
* Converted the minority locales English for Philippines, Korea, and Japan to be based on US English settings instead of the generic English settings which are more British style. This is due to the greater cultural influence of the US on those region over GB. 

Bug Fixes:

* Few legacy tests were not working correctly and have been updated

Build 001
-------

New Features:

* Updated date, date range, and duration formats from CLDR 22.1 to CLDR 26.0.1. This means many of the date formats have changed from before. This is especially true for the medium format, which for many locales has changed from being a character-delimited style, such as "10/7/15" (en-US) or "07.10.2015" (de-DE), to one that is like a short version of the long style, such as "Oct 7, 2015" (en-US) or "7. Okt 2015" (de-DE). This also adds date formats for many different new locales.

Release Notes for Version 11.0
=============================

Build 006
-------

New Features:

* Updated time zone support to IANA 2015f
* Changed the digital storage unit formatter to stay within the bit or the byte system. That is, a certain number of bytes will not auto-scale to bits and vice-versa. Previously, if you formatted "234 bytes", it would auto-scale that to 1.1 kilobits, which is not that useful to users. Bytes should scale to kilobytes, megabytes, gigabytes, etc., but not to bits. Bits should auto scale to kilobits and megabits, etc.

Bug Fixes:

* Fixed wrong locale pt-CQ -> pt-GQ (Portuguese for Equitorial Guinea)
* Fixed awkward translations for duration formats in Korean
* Fixed rhino loader to never look for locale data files in /usr/share/javascript, as that is outside of the context of web apps, so app servers throw exceptions when you try to access that dir
* Fixed a few unit tests that were broken in build 5 but which no-one noticed! (Mostly, it was the tests that were broken, not the code.)

Build 005
-------

Bug Fixes:

* Fixed missing dependency in Currency.js
* Fixed some closure compiler warnings
* <font color="red">Calendar.newDateInstance() is now deprecated, as it creates a circular dependency. This call will go away in release 13.0 or 14.0.</font> The alternate way of creating a date for a particular calendar is to call the date factory directly instead of having the calendar classes do it for you:

~~~~~
Before:
var d = cal.newDateInstance();

After:
var d = DateFactory({calendar: cal.getType()});
~~~~~

* Souped up the jsdocs a bit
* Fixed RhinoLoader to work better when running ilib under Rhino/RingoJS.
* Fixed bug where creating a new ResBundle would throw an exception if there were no arguments to the constructor AND the current locale was a pseudo locale.

Build 004
-------

New Features:

* Added support for asynchronous locale data loading in the browser. The file ilib-web-async.js  can be used in browsers to define the WebLoader class without all the CommonJS wrapper stuff around it. You simply include it in a script tag after the normal ilib script tag. See the modularization wiki for details.
* The build now produces the modularized code in a minified format using the uglify tool. These files are part of the tar ball for the build, and also appear as the files used in the nodejs package. This should improve load time somewhat and improve the disk and memory footprint.
* Added support for ilib running under Rhino using JDK 1.7 or later. All unit tests pass now using a tool called trireme which emulates a nodejs environment inside of rhino.
* Added the lib/ilib-rhino.js entry point which you can require to load in the base code and the rhino locale data loader:

~~~~~~
var ilib=require("your-path-to-ilib/lib/ilib-rhino.js");
~~~~~~

Bug Fixes:

* Fixed the date formats for a number of locales to match what is in CLDR. The old CLDR date conversion had some problems. (Languages affected: af, ar, bg, bs, cs, da, en, es, et, fa, fr, ha, ja, and or)
* Fixed various problems with the collation of voiced and unvoiced iteration marks on the kana in Japanese. First, they were not being iterated to the right voiced/unvoiced character, and second, the tests were not testing for the right thing.

Build 003
-------

New Features:

* Added the ilib-node-all.js module to support Meteor integration. This module pre-requires all of the ilib classes and then exports them so that Meteor code (which is not yet designed to require things that it uses) can use it as it did before.

Bug Fixes:

* Modified Collator so that when strings which start with numbers are sorted numerically instead of lexically, the strings that do not contain numbers are still sorted according to the rules of the collation.
* Fixed the "latin" collation to include ASCII punctuation, as previously punctuation was ignored. This changed the size of sort key elements. <font color="red">N.B. this change grew the size of sort keys for the latin collation and any other that inherits from latin. That means this change invalidates old sort keys, and you cannot compare sort keys from this version of ilib with those previously generated by ilib. Any database entries that use ilib-generated sort keys for locale-sensitive collation will need to have their sort keys re-generated and re-indexed.</font>

Build 002
---------

New Features:

* Adds the following languages to the collation support: cs (Czech), da (Danish), el (Greek), fi (Finnish), fo (Faroese), he (Hebrew), ja (Japanese), ko (Korean), no/nn/nb (Norwegian), ru (Russian), sv (Swedish), tr (Turkish), and zh-Hans/zh-Hant (Chinese)
* Updated to IANA time zone database 2015d.
* Modified Locale.getAvailableLocales() to return the list of available locales even in a dynamic data load situation. It also now supports asynchronous loading of the file list. The functionality of getAvailableLocales() is a superset of the old function, so this change should preserve backwards compatibility.


Bug Fixes:

* Support for various browsers had become stale, but it is now refreshed. The list of browsers tested includes Firefox, Opera, Chrome, and IE. IE was tested on Windows only of course.

Build 001
---------

New Features:

* Code has been completely refactored to be in a CommonJS-style of modularized classes. This allows you to load only those classes that you really need instead of all of ilib. A very detailed discussion on this refactoring can be found on a separate wiki page on the [New Modularization Support].
* Qt/QML 5.4 is now a supported platform. QML contains a built-in javascript engine that can run ilib directly. Although Qt does have support for internationalization already, it is rather limited. ILib can be used to fill in the gaps, especially for things like date formatting with calendars that Qt does not yet support.
* The names of some of the assembled files have changed and you may need to update your code to use the new files. Please see the page [New Modularization Support] for details.


Release Notes for Version 10.0
=============================

Changes from version 9.0
------------------------

New Features:

* Added support the Chinese Lunar (Han) calendar and Chinese Lunar calendar dates
    * Currently no support for formatting yet, as this code is intended to be used to do things like calculate Chinese new years or other holidays
* Added the ability to designate certain locales as pseudo-localization locales for testing
* Completed support for address parsing in all current countries in the world. (This adds support for CL, DO, ET, HU, IN, IS, KG, KW, LU, MO, NI, NO, PA, PE, PY, RS, RU, SA, SL, SN)
* Add support to ilib.LocaleInfo to return the start and end of the weekend for the locale. This returns days-of-the-week numbers (ie. Sunday=0, Monday=1, etc.)
* Updated to IANA tzdata 2015a
* Added unit test cases to verify support for the following languages: af (Afrikaans), am (Amharic), ha (Hausa), or (Oriya)
* Added support for the Ethiopic and Coptic calendars including the calendar date objects, date formatting, date range formatting, and duration formatting
* Added getStringJS() convenience method to ilib.ResBundle. This returns a Javascript string object instead of the ilib.String that getString() returns.
* Added the Ethiopic calendar to the "standard" size, as it is the official calendar for Ethiopia
* Added DateFmt.getMeridiemsRange() method which will return you an array of the meridiems (times of day like "AM" or "PM"), their names in the given locale, and when in the day those meridiems are used. This is intended to be used with time picker widgets.


Bug Fixes:

* Fixed some country name translations in Mongolian which are used in address parsing/formatting
* Fixed some incorrect address parsing regular expressions for the countries HU, IS, NO, and RU
* Added some missing dependencies to get the assembly tool to produce correct output
* Fixed a minor date calculation problem with the Persian calendar
* Fixed date formats for Kurdish so that they show up correctly in an RTL environment
* Fixed translation of the country name "Grenada" for various languages
* Fixed ilib.CaseMapper problems in Netscape
* Added a comment to the ilib.Collator that upperFirst does not work when using the native collator in Netscape because Netscape has not implemented it. If you want it to work the same across browsers, you have to use the Javascript (ilib) implementation of collation instead.
* Fixed a problem with name parsing (ilib.Name) where the CType functions were not initialized properly if you constructed a name using parts or via a copy constructor
* Support for IE had gotten stale and some unit tests did not pass. These were corrected:
    * Collation now works in IE for the supported locales
    * CaseMapper did not work correctly for a few locales
* Fixed build.xml to run unit tests under Windows correctly
* The number of fraction digits supported by the ilib.NumFmt class is now limited from 0 to 20 explicitly. Previously, it was quietly limited by the JS engine. Now, negative numbers go to 0, and numbers greater than 20 mean exactly 20.
* Fixed an exception in ilib.DateFmt when some formats could not be loaded from the locale data
* Fixed Korean name parsing to be able to handle spaces in the name
* Worked around a problem in Chrome 40 where the value of navigator.language no longer conforms to BCP-47. In the US for example, navigator.language now has "en-us" in it instead of "en-US" like it had in previous versions.
* Fixed day names in Vietnamese long format from the 3-letter abbreviations of the full names to "CN" (Sunday) followed by "Th 1" (Monday) through "Th 7" (Saturday).
* Bug fixes in the Ethiopic calendar:
    * The date changes at 6am Gregorian time = 12:00 morning Ethiopic time, instead of at 7am Gregorian = 1:00 morning Ethiopic time
    * Now uses the 5 meridiems for time of day (morning, noon, afternoon, evening, and night) when formatting dates in the Ethiopic calendar
* Now uses the 64-bit getTimeExtended() instead of old 32-bit getTime() where possible. The ilib.Date object uses the built-in Javascript Date object to calculate the offset of the "local" time zone, which is faster than the pure JS algorithm and is always in sync with the system time zone db. Using getTimeExtended() effectively widens the time period when the "local" time zone can use the built-in Date for these calculations.
* Updated the country name translations for af, am, ha, or, and pa. These are used in address parsing and formatting.
* Changed am and pm symbols in Gujarati to "AM" and "PM" to match CLDR.
* Fixed unit formatting in Chinese. Removed some bogus directories under js/data/locale/zh and moved the unitfmt.json files in the bogus dirs to the correct places instead so the code can pick them up.
* Behaviour is not improved when the platform returns an invalid BCP-47 tag for the locale. Most often, this is when the region part of the tag is given in lower-case instead of upper.
* Fixed date/time unit tests for Gujarati
* Fixed date/time unit tests that work in California but not in Korea. The problem was that the unit tests assumed the California time zone when they should be explicitly naming which zone they are using for the tests.
* Updated Gaelic date formats to be more consistent with each other and to follow CLDR
* Fixed Japanese short, medium, and long date formats to put the day of the week at the end of the format instead of the beginning, so that it follows CLDR more closely

Release Notes for Version 9.0
=============================

Changes from version 8.0
------------------------

New Features:

* Added support for Russian and Brazilian phone number parsing, formatting, and geolocation
* Added in unit and measurement formatting
    * See the [unit formatting tutorial](units) for details on how to use this
* The name parser and formatter now supports Japanese and Russian
* Now creates a package for publishing on npm
* The number formatter (ilib.NumFmt) can now format numbers locale-sensitive without doing grouping on the integer part of the number. To do this, you can pass style: "nogrouping" to the constructor.
* Added support for Japanese, Russian, and Brazilian address parsing and formatting
* Updated time zone to IANA 2014j
* Added "," as a pause character and ";" as a wait character in phone number parsing to match what Google uses in Google Contacts.
* Phone number formatter can now format the comma and semi-colon in Korean phone numbers
* Phone number normalization now fully supported for Korea, Japan, Brazil, Russia, and Taiwan

Bug Fixes:

* Fixed performance problems in the CType functions, which caused other things such as name parsing and formatting to be slow
* Fixed the Norwegian date formats to use HH instead of H for the hours
* Fixed missing country name translations in Kurdish
* Misc fixes to the Korean phone number support
* Improved parsing/formatting of Korean names with suffixes and honorifics
* Made some formatting fixes for the jsdocs
* Added missing dependency on util/jsutils.js for the core assembly
* Phone number parser was incorrectly parsing "00" prefix for Korean phone numbers
* Updated phone number formatting so that formatting elements such as dashes are not added until there is a digit after them. eg. In the Korean phone system, 010 is formatted as "010" instead of "010-" as it was before. Now the dash is only added when you add another digit: "010-3" for example.
* ilib.TimeZone.getAvailableIds() was throwing an exception if you tried to get the available ids and one of the locale directories did not have an ilibmanifest.json file in it
* Added a few missing area codes in Taiwan
* Fixed the nodeglue.js file to work inside of an npm module and also in a checkout of the ilib sources. That way it can be used for testing during development.
* More fixes to the Korean phone number formatting and Taiwanese phone number geolocation
* Fixed the order of the names of the days of the week for Kurdish (ku) and Mongolian (mn). The translations from the translators were correct, but they were assigned to the wrong day numbers!
* Added safety code to fix an exception in ilib.GlyphString


Release Notes for Version 8.0
=============================

Changes from version 7.0
------------------------

New Features:

* Added support for phone number parsing and formatting
    * See ilib.PhoneNumber and ilib.PhoneFmt for details
    * Supports the following countries:
        * NANP (North American Numbering Plan) countries - USA, Canada, Bermuda, and various Caribbean nations
        * UK (GB)
        * Republic of Ireland (IE)
        * Germany (DE)
        * France (FR)
        * Spain (ES)
        * Italy (IT)
        * Mexico (MX)
        * India (IN)
        * People's Republic of China (CN)
        * Netherlands (NL)
        * Belgium (BE)
        * Luxembourg (LU)
        * Australia (AU)
        * New Zealand (NZ)
        * Singapore (SG)
        * Republic of Korea (KR)
        * More countries to follow
    * Can parse and format SMS short code, emergency numbers, etc.
    * Can parse and format partial numbers as well, which can be used to format the number as the user is typing it in
* Also added support for phone number comparison and normalization
    * Supports Verizon's "Assisted Dialing", which allows you to dial any number in your contact list in any country, and the correct prefixes will be added/removed to dial that number
    * Supports normalization of SMS numbers and short codes as well
* Added ilib.Date.getTimeExtended method, which is similar to ilib.Date.getTime in that it returns the number of milliseconds since midnight Jan 1, 1970 UTC, but it is not limited to the range of time of the normal 32 bit time_t. Instead, it returns the full range of what the the Javascript Date can return, which is midnight Jan 1, 1970 UTC plus or minus 100 million days. (That's approximately -271821 BCE to 275760 CE in the proleptic Gregorian calendar.)
* Refactored the phone number parsing engine so that now we can support Japanese area codes
    * Rewrote the phone number parsing state generator in Javascript to output tries instead of state tables
    * Regenerated all phone number parsing files
* Added support for Japanese and Taiwanese phone number parsing, formatting, and geolocation

Bug Fixes:

* Fixed a bug where the address formatter would not work if you did not give any options in the constructor and were just trying to use the defaults.
* Fixed the name of the Korean "brackets" phone number formatting style to be a better translation


Release Notes for Version 7.0
=============================

Changes from version 6.0
------------------------

New Features:

* Added support for the Persian astronomical and Persian algorithmic calendars
    * The Persian algorithmic calendar is named "persian" and the algorithmic one is "persian-algo".
    * Switched Iran and Afghanistan to use the new persian astronomical calendar by default.
    * Fixed the date range formats for gregorian in Iran.
* Added "calendar" option to the date formatter factory method in addition to "type". The two mean the same thing.
* Updated to IANA time zone database version 2014f, which includes the major recent changes to the Russian time zones
* Added ilib.GlyphString which can iterate through whole glyphs as a user might see them on screen, or truncate/ellipsize a string at a given number of glyphs. Dealing with whole glyphs allows you to truncate and ellipsize a string properly to a certain length if care is taken to include non-spacing marks and combining characters, but to disclude spacing combining characters at the end of the truncation length and to count spacing characters individually. 
    * The regular CSS directives to ellipsize and truncate do not handle scripts properly that contain such combining and non-spacing marks. Instead, it just truncates between Unicode characters, which may cut between a base character and a combining character.
    * Dealing with whole glyphs allows you to correctly handle Indic languages and Thai, that are commonly written with combining characters, as well as Japanese, Vietnamese, Hebrew, Arabic, and even western European languages, which are sometimes written with decomposed combining accent characters.
* Added forEach() and forEachCodePoint() to ilib.String, which is an alternate, more Javascript-y way of iterating through the UTF-16 characters and code points. These are inherited by ilib.GlyphString, which iterates through glyphs, and ilib.NormString, which iterates normalized characters.
* Added corrected support for Korean in the name parsing/formatting
* Integrated changes that get the address parsing and formatting correct for many  countries: AE, AF, AL, AO, AR, AT, AU, AZ, BA, BE, BF, BG, BH, BJ, BR, BY, CA, CD, CF, CG, CH, CI, CM, CN, CO, CR, CV, CZ, DE, DJ, DK, DZ, EC, EE, EG, ES, FI, FR, GA, GB, GH, GM, GN, GQ, GR, GT, HK, HN, HR, HU, ID, IE, IL, IQ, IR, IT, JO, KE, KR, LB, LR, LT, LV, LY, MA, ME, MK, ML, MM, MR, MW, MX, MY, NG, NL, NO, NZ, OM, PH, PK, PL, PR, PT, QA, RO, RU, RW, SD, SE, SG, SI, SK, SV, SY, TG, TH, TN, TR, TW, TZ, UA, UG, UY, VE, VN, YE, ZA, ZM

Bug Fixes:

* Fixed completely broken Thai date formatting unit tests, and then fixed the code to pass those tests properly. Thai solar calendar works properly now.
* Fixed up date formats for Kurdish, Hebrew, Pashto, and Urdu to appear correct in right-to-left (RTL) contexts. This was done by adding the Unicode LTR character in front of strings that start with numbers so that the numbers would appear correctly in a LTR fashion when embedded in an HTML tag that is RTL.
* Changed the default meridiems for Chinese time formats to be AM/PM  just like the rest of the locales. (Or at least the translations thereof). The 7 Chinese-style meridiems are still available, but the caller must now send in the new meridiems property in the constructor options with the value "chinese" in order to see them.
* Fixed a rounding bug that made time/dates less than one millisecond from a day, hour, minute, or second boundary go to the wrong side. For example 0.99999995342 of a julian day would cause the time of many of the ilib.Date subclasses to be calculated as 24:00 of the previous day, rather than 0:00 of the desired day. These off-by-less-than-a-millisecond errors would be introduced by floating point calculations.
* Fixed a bug where timezone.inDaylightTime(date) was returning the wrong value for the "local" time zone
* Fixed a problem where the offset of standard time was miscalculated when the zone is "local"

Release Notes for Version 6.0
=============================

Changes from version 5.0
------------------------

New Features:

* Date objects clean-up
    * All date objects for all calendars are based on a rata die (RD) date that is in unambiguous UTC, and the time zone is used to offset that to the desired zone. Previously, only the Gregorian calendar dates were.
    * Code is simplified and a little smaller as a result
    * Calculations for the day-of-the-week still occur in local wall time instead of in UTC, as UTC may be on a different day than the local time
* Time zone clean-up
    * Split time zone info into separate files instead of one big one
    * Split the timeszones.json file into a whole bunch of separate zoneinfo files. This means less memory needed, as you don't have to load all the zones at the same time.
    * Changed the zone info compiler (zic) to write out the separate files
    * Changed the assembly tool to assemble all the zones used for each locale, plus all the generic zones
    * Modified ilib.TimeZone to load in individual zone info files, instead of one big one
    * Created an ilib.Loader interface to be able to get more information about the files available on disk for dynamic loading than is available with just a loader function. (Though the old style loader function is still supported.)
    * Modified the node glue file to implement the ilib.Loader interface for nodejs
* Added the missing node based build tools to the shipping src tar
* Updated time zone info to IANA 2014b
* Added the ability to specify time zone transition times using a julian day instead of transition rules
* Collation class upgraded. Now supports English, German, Spanish, Lithuanian, Latvian, and Estonian. The sortkey function works properly now in those languages as well.

Bug Fixes:

* Fixed a minor problem with time zone abbreviations in Danish, Norwegian, and Swedish
* The GregDate object was not calculating the offset when the time zone is "local" and the instance was created with something other than the time components (ie. it was created with a julian day or unix time for example). The methods that used the offset, such as getDayOfWeek(), were therefore only calculating things in UTC.
* Cleaned up date in Arabic to use full names for months and day names in the medium, long, and full formats, as Arabic doesn't really use abbreviations.
* Cleaned up duration formatting in Arabic to use full words for duration components, as Arabic doesn't really use abbreviations.
* Fixed date formats and date range formats in Arabic/Gregorian so that the date components appear in the right order.

Release Notes for Version 5.0
=============================

Changes from version 4.0
------------------------

New Features:

* Added ilib.CaseMapper to do locale-sensitive upper and lower-case mapping. String.toUpperCase() does a reasonable job, and String.toLocaleUpperCase() does a better job, but only for the current locale. This case mapper works for any locale you specify.
* Added name parsing and formatting support for many languages: ar bg bn bs cs da de el en es et fa fi fr ga gu he hi hr hu id it ja kk kn ko ku lt lv mk ml mn mr ms nb nl pa pl pt ro ru sk sl sq sr sv ta te th tr uk ur uz vi zh
    * Support in Russian is currently only for names written in western order (Given-name Family-name)
* Added translations for duration formats for Panjabi (pa)
* Added ilib.LocaleInfo.getDigitsStyle() to return whether the locale uses western digits or native digits. If the locale has native digits, but they are not commonly used currently, this method can return that information as well.
* Added useNative option to the duration formatter constructor to explicitly say whether or not to use native digits. If this option is left out, the formatter will default to the style of digits specified by the locale.
* Added ilib.DateFmt.getMonthsOfYear() to retrieve the names of the months of a year, and ilib.DateFmt.getDaysOfWeek() to retrieve the names of the days of the week that the formatter is using
* The ilib.DateFmt.format() method can now format any date type. You can pass in a regular intrinsic Javascript date object, an ilib.Date object, a unix time (number of milliseconds since 1970), or a string that the intrinsic Date can parse. For all types that are non-ilib dates, they will first be converted into an ilib.Date in the same calendar as the formatter before being formatted.
* Added country name translations for Punjabi, Assamese, and Kurdish, which are not available in CLDR, so they had to be translated manually
* Updated time zone info to IANA 2014a

Bug Fixes:

* Fixed the date formats for many locales that included the am/pm meridiem in the 12-hour formats that should not include them, such when using the "hm" or "hms" components. To see the meridiem, callers should use the "hma" or "ahms" components instead.
    * This also fixed duration formats which erroneously included the meridiem when formatting a duration involving hours and minutes
* Fixed the date formats for many locales that used "H" or "HH" in the 12-hour formats where they should really use "h" or "hh". The "H" and "HH" should be used in the 24-hour formats only.
* Minor fix for "days" in Estonian (et) for duration formatting
* Fixed completely broken date and duration formats for Marathi (mr) and Thai (th)
* If a locale uses native digits by default for formatting numbers, ilib.LocaleInfo.getNativeDigits() was not return the native digits.
* In the date formatter, if the option "useNative: false" was given, but the locale uses native digits by default, it would format the date with native digits anyways. Now, if the useNative option is given, it is honoured even if the locale normally uses native digits.
* In the number formatter, if the option "useNative: false" was given, but the locale uses native digits by default, it would format numbers with the native digits anyways. Now, the option is honoured properly.
* When formatting a date in UTC, the "z" format specifier would be replaced with "UTC+0000". Now, it is replaced with simply "UTC".
* The date formatter now calculates offsets properly between time zones that differ by fractions of an hour. For example, St. John's, Canada has an offset from UTC of -2:30, or Kathmandu, Nepal which has an offset of 5:45 from UTC.
* Fixed a bug where the wrong DST rules were applied to a number of different time zones, sometimes even applying DST to zones that no longer use DST. Fixed the time zone compiler to pick the correct time zone rules for the current year rather than the last time zone rule available.
* Fixed a bug where "linked" time zones were not being generated from the time zone compiler, which meant a number of time zones were missing from the timeszones.json file.
* Fixed a bug in the conversion function from other date types to an ilib date type. This makes sure that when a JS intrinsic Date instance is converted into an ilib date object using a unix time, the time zone is set to "Etc/UTC" so that the date formatter knows how to do the offsetting properly.
* The case mapper was throwing an exception for Lithuanian. Now it works properly.

Release Notes for Version 4.0
=============================

Changes from version 3.0
------------------------

New Features:

* Added support for the Thai solar calendar, which is the official calendar in Thailand
* Added IString and ResBundle classes in the Java library which work very similarly to the ilib classes and support the same message string syntax
* Added mappings from ISO 639 alpha1 -> alpha3, and ISO 3166 alpha-2 to alpha-3 in the ilib.Locale class
* Added support for date/time formatting and date range formatting in Mongolian (mn-Cyrl-MN)

Bug Fixes:

* date formatting fixes: 
    * year 0 did not format properly with yy or yyyy templates. It was printing 01 and 0001 instead of 00 and 0000.
    * negative years were not formatting properly. For example year -34 formatted as yyyy used to come out as 0-34 instead of -0034
* date formatters fixed
    * date formatters now use the global time zone from ilib.getTimeZone() for conversion of dates before formatting them. The default time zone is the "local" time zone.
    * Dates constructed with unix times are no longer considered to be in "Etc/UTC". Instead they are in the "local" time zone, which follows how the Javascript Date class works.
    * If a date or formatter is constructed with an explicit locale but no time zone, then the default time zone for that locale is still used.
* Added the Thai Solar code calendar to the "standard" distribution of ilib, seeing as Thai/Thailan is one of the few locales that does not officially use the Gregorian calendar
* The caching code in ilib.loadData was only using the locale spec as the key for loading data. If you requested a different file name or had different load parameters, the cache would return the same file you requested previously for that locale. Now the key includes the file name and a hash of the loadParams object as well to prevent these false hits.
* Added a copy constructor to the ilib.Locale class to avoid problems where the resbundle class was trying to load built-in strings without any strings available
* Fixed the Korean date format for components "wmdy", "wmd", and "wd"

Release Notes for Version 3.0
=============================

From now on, we are going to make more frequent and smaller releases.

Changes from version 2.0
------------------------

New Features:

* Memory footprint enhancements
    * Split ilib into 3 sizes: core, standard, and full
        * Core is the strings and resources and everything they depend on
        * Standard is a set of the classes most code will need
        * Full is everything
    * The dynamic load version of ilib also has 3 sizes
        * The locale-independent data was split out of the dynamic load versions, making them much smaller
        * Made more classes capable of dynamic loading
        * Added initializer functions for static functions that need to load locale-independent data
* Unit tests now test the pre-assembled and the dynamic load versions of ilib
  * tests of different versions of ilib are now separated and timed, which allows them to run more quickly
* Update version number to 3.0
* Dynamic load versions of ilib now include none of the root locale data. (That is none of the generic shared data.) This means the following:
    * in order to use static functions like ilib.CType.*, you need to initialize the data first by calling an init function. Example: if you want to use ilib.CType.isAlpha, you should call ilib.CType._init() first to load the locale data.
    * the code is much smaller now and start-up time is lower
* ilib is now divided into 3 distribution sizes: core, standard, and full
    * core contains only the resource bundle and string classes
    * standard is everything in core plus the formatting classes that most apps need like date or number formatting
    * full is all the classes in ilib
    * there are pre-assembled and dynamic load versions of each of these three sizes
* bug fixes
    * in ilib.String: format was only replacing the first occurrence of {variable} with its value. Now it replaces all of them.
    * The resource bundle object now injects the locale into any string it creates so that the string can format its plurals properly
    * in utils: ilib.isEmpty returned true if an object had properties but every property was falsy
* Added thousands of unit tests for date formatting, duration formatting, and date range formatting for a great many locales, and any problems found with them were corrected
* Collator now calls the native Javascript Intl object to do collation if it exists, otherwise it attempts to do collation by itself
* ilib.loadData now allows you to load localized files from the resources dir that are not json. Json files are merged together to make the final in-memory file, but any other type will simply return the most locale-specific version of the file found without any merging.


Release Notes for Version 2.0
=============================

Note that release 2.0 used be called 1.3, but it got so big, we decided to rename it to 2.0. Hopefully, in the future, we can make more frequent and smaller releases.

Changes from version 1.2
------------------------

New Features:

* Added static method ilib.ScriptInfo.getAllScripts() to return a list of all script identifiers that this copy of ilib knows about.
* Added methods to locale info class to get information about the scripts for the locale
    * getAllScripts() returns an array of script codes in which text in this locale can be written
    * getDefaultScript() returns the default script used for the locale in the absence of any other information
    * getScript() returns the script code that is explicitly given in the locale specifier, or the default script for the locale otherwise

* Added getScriptDirection() method to the script info class to document if the script is written left-to-right, right-to-left, or top-to-bottom
* Introduced a test runner that runs all unit tests under nodejs to verify that it works there as well
* ilib.getLocale() now attempts to read the environment to find out the default locale and time zone. It can find the locale from the browser (FF, Opera, Chrome, and IE), from nodejs or rhino, and from webOS. It can also find the time zone from nodejs, rhino, or webOS if the environment is set correctly.
* ilib.Locale and ilib.TimeZone classes now get their default locales correctly as well
* Added the ability to get locale data dynamically instead of having everything pre-assembled into one big file.
    * added ilib.setLoaderCallback() which allows the caller to register a function to call when ilib needs to load locale data. The caller can then determine how to load the json files in their own environment.
    * added the ability for various ilib classes to call this function to get any missing locale data
         * loaded data is cached, so it only needs to be loaded once
    * added an onLoad callback method to those same ilib classes so that the data can be loaded asynchronously and the caller will be notified when it is finished being loaded and the data has been processed
    * added a sync option to many classes. When sync==true, the missing locale data will be loaded synchronously and the object returned from the constructor. If sync==false, the missing data will be loaded asynchronously and the onLoad callback function must be specified to get the results.
    * distribution now includes a pre-assembled version of ilib called ilib-dyn.js without any locale data in it other than the base (default) locale
* ilib.Locale now recognizes locale specifiers that follow the BCP-47 conventions
    * can now recognize ISO 639 3-letter codes for languages as well
    * can now recognize ISO 15924 script codes
* Added ilib.Name and ilib.NameFmt class to parse and format personal names. 
    * Currently works in the following languages: de, en, es, fr, it, nl, and zh
    * Ability to format names by length or by an explicit set of name parts
* Added system resources for 413 locales
    * Contains translations for days of the week, month names, etc.
    * Data is extracted from the Unicode CLDR
* Added the ability to format choice strings properly for many locales in ilib.String
    * Defines new number classes based on rules in CLDR: "zero", "one", "two", "few", and "many"
        * Definitions of which numbers belong to which class are based on the locale
    * Allows translators to give grammatically correct translations based on the classes instead of using explicit numbers to define the classes
    * Supports languages with complicated rules such as Russian, Serbian, or Polish
        * Full list: af ak am ar asa ast be bem bez bg bh bn br brx bs ca cgg chr ckb cs cy da de dv ee el en eo es et eu ff fi fil fo fr fur fy ga gd gl gsw gu guw gv ha haw he hi hr is it iu jgo jmc kab kaj kcg kk kkj kl ks ksb ksh ku kw ky lag lb lg ln lt lv mas mg mgo mk ml mn mo mr mt nah naq nb nd ne nl nn nnh no nr nso ny nyn om or os pa pap pl ps pt rm ro rof ru rwk saq se seh sh shi sk sl sma smi smj smn sms sn so sq sr ss ssy st sv sw syr ta te teo ti tig tk tl tn ts tzm uk ur ve vo vun wa wae xh xog zu
* Added ilib.LocaleInfo.getLikelyLocale(). If the locale info was constructed with a partially specified locale, this fills in the missing parts (if possible!) using the most likely values that go with it. For example, "uz" maps to "uz-Cyrl-UZ". That is, the Uzbek language usually refers to the locale of the Uzbek language in Uzbekistan written in Cyrillic.
* Added a class to do mailing address parsing and formatting. All unit tests pass.
    * Added top-level locales for regions without a language. (addresses are language independent)
* Generated region and language names from CLDR which now appear in the locale info.
* Added files for the "unknown" locale zxx-XX. This is also used as locale for pseudo-translation.
    * Changed the pseudo locale from xx-XX to zxx-XX, as zxx is actually in the ISO 639 standard meaning "absense of linguistic information".
* The hierarchy of locales is now changed so that more specific parts override properties in less specific parts and that locales with scripts or with no language are also included. eg. zh-Hans-SG overrides properties in zh-Hans.

The hierarchy from least specific to most specific is as follows:

language
region
language/script
language/region
region/variant
language/script/region
language/region/variant
language/script/region/variant

* If a locale uses DST, the time zone info now can give the dates where DST starts and ends in a particular year
* The ilib variable is now assigned to the exports object if it exists so that ilib can be used a module under nodejs.
    * To load ilib:   var ilib = require("./iliball.js").ilib;
* Added ilib._getPlatform() to return what platform this ilib thinks it is running on
* Added the ability to load in psuedo maps to any other scripts. Currently supported are Latin (the default), Hebrew, Chinese (simplified), and Cyrillic.
    * to use these mappings specify the locale "zxx-XX" (default Latin), "zxx-Hebr-XX", "zxx-Hans-XX", or "zxx-Cyrl-XX" respectively when creating your resource bundle instance
* Added a "missing" option to ilib.ResBundle to tell it what to do when the source string is missing from the bundle. Possible values are:
    * source - return the source string unchanged. (Default)
    * pseudo - return a pseudo-translated version of the source. When this option is chosen, iLib will check what the default script is for the locale, and use any pseudo maps for that script. Otherwise, it will default to pseudo-translated Latin.
    * empty - return the empty string
* Added an ilib.Collator class which will be used to sort things locale-sensitively.
    * currently its methods are stubs that operate in ASCII only
    * the purpose is to get the API out there for people to start using
* Added implementation for ilib.ScriptInfo.getScriptDirection, 
* added new methods getNeedsIME() and getCasing() to ilib.ScriptInfo
    * getNeedsIME returns return whether or not the script requires an IME to input its characters
    * getCasing returns whether or not the script has the concept of letter case
* Time zone updates:
    * Updated time zone info to the IANA version 2013c
    * Added ilib.TimeZone.getCountry() which will give the ISO country code of this time zone, if known. (Some time zones are general and not specific to a particular country.)
    * Added "long" style of time zone, which formats with the full name of the zone in English.
    * Modified ilib.TimeZone.getAvailableIds() to take an optional country filter parameter. This filters the output list so that it only includes the available time zones for the country with the given ISO code.
* The CLDR to ilib conversion scripts are now done for number formats and date formats. Consequently, ilib now supports most locales for both number formatting and date formatting.
* Added support in number formatting for primary and secondary grouping digits, allowing ilib to support a number of new locales with complex number formatting such as hi-IN or en-IN
* Scripts
    * Filled in an implementation of ilib.ScriptInfo.getScriptDirection() to tell you which direction a script is written
    * Added needsIME() which tells you whether or not the script commonly needs an IME in order to type these characters
    * Added getCasing() which tells you whether or not the script has the concept of upper- and lower-case letters
* Moved things around in ilib.loadData() so that users can use it to load their own json files.
    * json files will be merged according to the locale hierarchy mentioned above
    * calls to load non-json files will return the most locale-specific version of the file
* added number formats, date formats, script names, day of week, number formats, percentage formats, currency formats for many locales
* number formatter now supports formatting with native digits, and the number parser now supports parsing with native digits
* when the calendar-based date objects are initialized with a unixtime or julianday parameter, the time zone is automatically set to Etc/UTC, as those measures of time are supposed to be in UTC. This will cause any date formatters to do a time zone conversion if the formatter has a time zone too.

Bugs fixed:

* Version updated to 2.0
* Dates on the last date of a month in the gregorian and julian calendars that had hours in them were being calculated as day 0 of the next month. Now, it is correctly calculated as the last day of the month.
* Fixed bug in demo site that prevented it from working in IE
* Fixed the default time zone to be Etc/UTC instead of Europe/London, as Europe/London observes daylight savings time and Etc/UTC doesn't
* Fixed various date formatting problems in the currently supported locales based on data from CLDR
    * Use lower-case or capitalized day names and month names in those locales that require them
    * Removed "oxford comma" from the final list separator for many languages
    * de: "Montag" was spelled incorrectly
    * fi: future relative dates were not formatted correctly
    * fr: missing accented character for translations of February, past relative dates had a spelling error. ("il ya" instead of "il y a")
    * ko: fixed some oddities in Korean duration formats where the word "and" was included
    * pt: updated day names in full format, updated past and future relative date formats
    * ru: updated past relative date format. Now use number classes feature of ilib.String' choice format method for duration formats.
    * vi: fixed incorrect translation of "seconds" in some of the duration formats
    * zh: shortened day names for the short format
* Fixed some incorrect json syntax in a few of the timezone.jf files
* Make sure the locale parts appear in the spec from ilib.Locale.getSpec() in a fixed order so that two specs can be compared against each other successfully.
* Moved the directories under locale root that are for countries without a language underneath of the "und" directory. ("und" is the ISO 639 code for "undefined"). Many of them had the same letters as language codes but with a different case. When getting these files under Windows, which has a case-insensitive file system, there were conflicts. Now these directory names shouldn't conflict any more.
* Changed the common symbol for Indian Rupees from the ISO code of INR to the new rupee symbol ₹
* Locale didn't parse M.49 numeric region codes properly (as used in CLDR and BCP-47)

Release Notes for Version 1.2
=============================

Changes from version 1.1
------------------------

New Features:

* Added "local" time zone id to support whatever the time zone is that the code is currently running on. This doesn't get a real time zone, only the offset from UTC.
* Added ability to create a time zone based on an offset. Previously, this was documented
but not implemented.
* Added getOffsetMillis and getRawOffsetMillis to the TimeZone object to return the offset in milliseconds
* Date formatting is now supported in these new languages and their sub-locales: ar, da, fi, no, sv
* Added escapeMode parameter to ResBundle.getString so that characters in the string that potentially conflict with the programming language syntax will be properly escaped for that file type
* Added setTimeZone() method to each of the calendar date objects
* Added containsKey() method to the ilib.ResBundle object to be able to tell if there is a translation for a given key/source string in the resource bundle. You could not previously tell whether or not there was a translation because getString() returns the default value (ie. the source string) when there is no translation available. The containsKey() method returns false (no translation available) when getString() returns the default.
* Added ilib.ScriptInfo object that gives information about scripts in the ISO 15924 standard. Info is generated automatically from the Unicode Character Database (UCD) files using a new extraction tool written in Javascript as well.
* Added the static method ilib.String.fromCodePoint() to replace String.fromCharCode() which does not handle Unicode surrogate characters. (ie. text encoded in UTF-16). The characters that this opens up are the UCS-4 Unicode code points in the supplementary planes. (ie. code points > U+FFFF)
* ilib.String now implements all regular methods of the Javascript String class, so that ilib.String can be used (mostly) as a String replacement. The only oddity is that you cannot compare an ilib.String instance to a string constant using the triple equals operator, as the triple equals requires the types of its operands be equivalent as well as the values. You can still use the double equals operator to test an ilib.String instance against a string constant though.
* Added these methods to ilib.String: codePointAt() and codePointLength() to handle getting proper UCS-4 code points from a Javascript string encoded in UTF-16. These two methods view the string as an array of code points rather than characters.
* Added iterator() to ilib.String to iterate through the string by code points instead of chars. Also added charIterator() to iterate the the string by characters properly. The difference is that the iterator returns code points (32-bit integers) and the charIterator returns a string with single UTF-16 characters in it, which may consistent of pairs of surrogates or single characters. JS currently uses UTF-16 to encode Unicode characters in strings, which treats pairs of surrogates as two separate characters instead of as a single character with a single code point. Use these methods to interpret the surrogate characters properly.
* Added normalize() method to ilib.String to implement the Unicode Normalization Algorithm. This passes the UNA conformance tests as published on the Unicode web site for Unicode version 6.2.0. Added nodejs-based tools to convert the normalization data and the conformance test data from Unicode txt files to json files so that they can be used directly in Javascript.

Bugs fixed:

* version updated to 1.2
* Fixed Japanese date long format to use Arabic numerals for the months instead of Japanese digits

Release Notes for Version 1.1
=============================

Changes from version 1.0
------------------------

New Features:

- Added support for the Hebrew calendar
- Added ability to format dates in other calendars using the names of months and days-of-the-week in the right language
- Added support for time components "ah" which formats the hour plus the am/pm. This gives times like "3pm" in English.
- Added ilib.Locale.getAvailableLocales() to manifest which locales this copy of ilib supports
- Added support for "macro" directive in the assembly tool so that the macros can be replaced with generated text. So far, the only macro supported is the list of current locales.
- date formatting is now supported in these new languages and their sub-locales: af, id, ja, ko, nl, pt, ru, tr, vi, zh
- number and percentage formatting is now supported in virtually all 386 locales
- added "raw" type to the ResBundle constructor. Raw bundles pseudo-translate everything without parsing. The new default type "text" now doesn't pseudo-translate replacement parameters so that the output can be used for formatting strings
- Added ilib.ResBundle.getType() method which returns the type option that was given to the constructor of this ResBundle instance.
- Added ilib.Currency.getAvailableCurrencies() method to document which ISO currencies this copy of ilib knows about.
- Added support for the 7 Chinese time-frames of the day used when formatting times with the 12-hour clock. This replaces the two am/pm time frames.

Bugs fixed:

- version updated to 1.1
- work around JDK wierdness where only old ISO codes for the country/language are supported, by adding an IlibLocale object in the assembly tool. This affected Hebrew which used to use the "iw" code instead of the current "he".
- The constructors for the date objects accept parameters as numbers or strings that contain numbers, which is more web page friendly
- Canadian full date formats were missing a comma between the month and year
- Italian duration format misspelled plural of the word "day" and mistranslated "and" to German instead of Italian
- Fixed missing French duration and date range formats
- ilib.Number parser could not parse negative numbers.
- the number parser and formatter would only accept number primitives, and not a string, ilib.Number, or the standard JS Number objects as arguments. Now, of course, they do.
- you can now call ilib.Number.format() without an argument and get an empty string instead of an exception.