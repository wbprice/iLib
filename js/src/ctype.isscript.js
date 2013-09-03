/*
 * ctype.isscript.js - Character type is script
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

// !depends ctype.js

// !data scriptToRange

/**
 * Return whether or not the first character in the given string is 
 * in the given script. The script is given as the 4-letter ISO
 * 15924 script code.<p>
 * 
 * Depends directive: !depends ctype.isscript.js
 * 
 * @param {string} ch character to examine
 * @param {string} script the 4-letter ISO 15924 to query against
 * @return {boolean} true if the first character is in the given script, and
 * false otherwise
 */
ilib.CType.isScript = function (ch, script) {
	return ilib.CType._inRange(ch, script, ilib.data.scriptToRange);
};

/**
 * @protected
 * @param {boolean} sync
 * @param {Object} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isScript._init = function (sync, loadParams, onLoad) {
	ilib.CType._load("scriptToRange", sync, loadParams, onLoad);
};

