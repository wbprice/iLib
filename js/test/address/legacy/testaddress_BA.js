/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013-2015, JEDLSoft
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



function testParseAddressBANormal() {
	var parsedAddress = new ilib.Address("Nedim Marevac, ul. Skenderija 60, 71000 SARAJEVO, BOSNIA", {locale: 'bs-Latn-BA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Nedim Marevac, ul. Skenderija 60", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SARAJEVO", parsedAddress.locality);
	assertEquals("71000", parsedAddress.postalCode);
	assertEquals("BOSNIA", parsedAddress.country);
	assertEquals("BA", parsedAddress.countryCode);
};

function testParseAddressBANoZip() {
	var parsedAddress = new ilib.Address("Nedim Marevac, ul. Skenderija 60, SARAJEVO, BOSNIA", {locale: 'bs-Latn-BA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Nedim Marevac, ul. Skenderija 60", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SARAJEVO",parsedAddress.locality);
	assertEquals("BOSNIA", parsedAddress.country);
	assertEquals("BA", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressBAManyLines() {
	var parsedAddress = new ilib.Address("Nedim Marevac\nul. Skenderija 60\n71000 SARAJEVO\nBOSNIA", {locale: 'bs-Latn-BA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Nedim Marevac, ul. Skenderija 60", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SARAJEVO",parsedAddress.locality);
	assertEquals("71000", parsedAddress.postalCode);
	assertEquals("BOSNIA", parsedAddress.country);
	assertEquals("BA", parsedAddress.countryCode);
};

function testParseAddressBAOneLine() {
	var parsedAddress = new ilib.Address("Nedim Marevac, ul. Skenderija 60, 71000 SARAJEVO, BOSNIA", {locale: 'bs-Latn-BA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Nedim Marevac, ul. Skenderija 60", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SARAJEVO",parsedAddress.locality);
	assertEquals("71000", parsedAddress.postalCode);
	assertEquals("BOSNIA", parsedAddress.country);
	assertEquals("BA", parsedAddress.countryCode);
};

function testParseAddressBASuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Nedim Marevac, ul. Skenderija 60  \n\t\n 71000 SARAJEVO\t\n\n BOSNIA  \n  \t\t\t", {locale: 'bs-Latn-BA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Nedim Marevac, ul. Skenderija 60", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SARAJEVO",parsedAddress.locality);
	assertEquals("71000", parsedAddress.postalCode);
	assertEquals("BOSNIA", parsedAddress.country);
	assertEquals("BA", parsedAddress.countryCode);
};

function testParseAddressBANoDelimiters() {
	var parsedAddress = new ilib.Address("Nedim Marevac FEDERICO TERRAZAS ARIAS CALLE ADELA ZAMUDIO 1716 PO BAX 580 71000 SARAJEVO BOSNIA", {locale: 'bs-Latn-BA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Nedim Marevac FEDERICO TERRAZAS ARIAS CALLE ADELA ZAMUDIO 1716 PO BAX 580", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SARAJEVO",parsedAddress.locality);
	assertEquals("71000", parsedAddress.postalCode);
	assertEquals("BOSNIA", parsedAddress.country);
	assertEquals("BA", parsedAddress.countryCode);
};

function testParseAddressBASpeciAMChars() {
	var parsedAddress = new ilib.Address("Nedim Marevac, ul. Skenderija 60, 71000 SARAJEVO, BOSNIA", {locale: 'bs-Latn-BA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Nedim Marevac, ul. Skenderija 60", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SARAJEVO",parsedAddress.locality);
	assertEquals("71000", parsedAddress.postalCode);
	assertEquals("BOSNIA", parsedAddress.country);
	assertEquals("BA", parsedAddress.countryCode);
};

function testParseAddressBAFromUS() {
	var parsedAddress = new ilib.Address("Nedim Marevac, ul. Skenderija 60, 71000 SARAJEVO, BOSNIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Nedim Marevac, ul. Skenderija 60", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SARAJEVO",parsedAddress.locality);
	assertEquals("71000", parsedAddress.postalCode);
	assertEquals("BOSNIA", parsedAddress.country);
	assertEquals("BA", parsedAddress.countryCode);
};

function testFormatAddressBA() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Nedim Marevac, ul. Skenderija 60",
		locality: "71000 SARAJEVO",
		country: "BOSNIA",
		countryCode: "BA"
	}, {locale: 'bs-Latn-BA'});
	
	var expected = "Nedim Marevac, ul. Skenderija 60\n71000 SARAJEVO\nBOSNIA";
	var formatter = new ilib.AddressFmt({locale: 'bs-Latn-BA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressBAFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Nedim Marevac, ul. Skenderija 60",
		country: "BOSNIA",
		locality: "71000 SARAJEVO",
		countryCode: "BA"
	}, {locale: 'en-US'});
	
	var expected = "Nedim Marevac, ul. Skenderija 60\n71000 SARAJEVO\nBOSNIA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
