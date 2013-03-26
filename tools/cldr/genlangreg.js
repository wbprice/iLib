/*
 * genlangreg.js - ilib tool to generate the langname and regionname json fragments from the CLDR
 * data files
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

/*
 * This code is intended to be run under node.js 
 */

var fs = require('fs');
var util = require('util');

function usage() {
	util.print("Usage: genlangreg [-h] CLDR_json_dir locale_data_dir\n" +
			"Generate the langname.jf and regionname.jf files for each locale.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"CLDR_json_dir\n" +
			"  the top level of the Unicode CLDR distribution in json format\n" +
			"locale_data_dir\n" +
			"  the top level of the ilib locale data directory\n");
	process.exit(1);
}

var cldrDirName;
var localeDirName;

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 4) {
	util.error('Error: not enough arguments');
	usage();
}

cldrDirName = process.argv[2];
localeDirName = process.argv[3];

util.print("genlangreg - generate language and region name data.\n" +
		"Copyright (c) 2013 JEDLSoft\n");

util.print("CLDR dir: " + cldrDirName + "\n");
util.print("locale dir: " + localeDirName + "\n");

fs.exists(cldrDirName, function (exists) {
	if (!exists) {
		util.error("Could not access CLDR dir " + cldrDirName);
		usage();
	}
});

fs.exists(localeDirName, function (exists) {
	if (!exists) {
		util.error("Could not access locale data directory " + localeDirName);
		usage();
	}
});

var english;

try {
	var enData = fs.readFileSync(cldrDirName + "/main/en.json", "utf-8");
	english = JSON.parse(enData);
} catch (e) {
	util.print("Error: Could not load file " + cldrDirName + "/main/en.json\n");
	process.exist(2);
}

var lang, region, languages = fs.readdirSync(localeDirName);
for (var i = 0; i < languages.length; i++) {
	lang = languages[i];
	var langdir = localeDirName + "/" + lang;
	if (lang.length >= 2 && lang.length <= 3 && fs.existsSync(langdir)) {
		var filename = langdir + "/langname.jf";
		if (typeof(english.localeDisplayNames.languages[lang]) !== 'undefined') {
			util.print(filename + ": " + english.localeDisplayNames.languages[lang] + "\n");
			fs.writeFileSync(filename, '\t"language.name": "' + english.localeDisplayNames.languages[lang] + '",\n', "utf-8");
			var regions = fs.readdirSync(langdir);
			for (var j = 0; j < regions.length; j++) {
				var region = regions[j];
				var regiondir = langdir + "/" + region;
				if (region.length === 2 && fs.existsSync(regiondir)) {
					filename = regiondir + "/regionname.jf";
					if (typeof(english.localeDisplayNames.territories[region]) !== 'undefined') {
						util.print("\t" + filename + ": " + english.localeDisplayNames.territories[region] + "\n");
						fs.writeFileSync(filename, '\t"region.name": "' + english.localeDisplayNames.territories[region] + '",\n', "utf-8");
					}
				}
			}
		}
	}
}
