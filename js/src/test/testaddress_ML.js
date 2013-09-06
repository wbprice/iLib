/*
 * testaddress_ML.js - test the address parsing and formatting routines
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

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO\nMALI", {locale: 'fr-ML'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou", parsedAddress.streetAddress);
	assertEquals("BAMAKO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALI", parsedAddress.country);
	assertEquals("ML", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO\nMALI", {locale: 'fr-ML'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou", parsedAddress.streetAddress);
	assertEquals("BAMAKO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("MALI", parsedAddress.country);
	assertEquals("ML", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO", {locale: 'fr-ML'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou", parsedAddress.streetAddress);
	assertEquals("BAMAKO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("ML", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("M. Kalilou Sissoko Rue\n406 - Porte 39\nMagnabougou\n\n\nBAMAKO\n\n\nMALI\n\n\n", {locale: 'fr-ML'});
	assertNotUndefined(parsedAddress);
	assertEquals("M. Kalilou Sissoko Rue, 406 - Porte 39, Magnabougou", parsedAddress.streetAddress);
	assertEquals("BAMAKO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALI", parsedAddress.country);
	assertEquals("ML", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("M. Kalilou Sissoko Rue , 406 - Porte 39 , Magnabougou , BAMAKO , MALI", {locale: 'fr-ML'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Kalilou Sissoko Rue, 406 - Porte 39, Magnabougou", parsedAddress.streetAddress);
	assertEquals("BAMAKO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALI", parsedAddress.country);
	assertEquals("ML", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tM. Kalilou Sissoko Rue\t\t\r406 - Porte 39\t\t\rMagnabougou\n\n\n\nBAMAKO\n\t MALI\n\n\n", {locale: 'fr-ML'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou", parsedAddress.streetAddress);
	assertEquals("BAMAKO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALI", parsedAddress.country);
	assertEquals("ML", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou BAMAKO MALI", {locale: 'fr-ML'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou", parsedAddress.streetAddress);
	assertEquals("BAMAKO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALI", parsedAddress.country);
	assertEquals("ML", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO\nMALI", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou", parsedAddress.streetAddress);
	assertEquals("BAMAKO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALI", parsedAddress.country);
	assertEquals("ML", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou",
		locality: "BAMAKO",
		country: "MALI",
		countryCode: "ML"
	}, {locale: 'fr-ML'});
	
	var expected = "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO\nMALI";
	var formatter = new ilib.AddressFmt({locale: 'fr-ML'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou",
		locality: "BAMAKO",
		country: "MALI",
		countryCode: "ML"
	}, {locale: 'en-US'});
	
	var expected = "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO\nMALI";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
