/*
 * testaddress_LV.js - test the address parsing and formatting routines
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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressLVNormal() {
	var parsedAddress = new Address("Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS, LV-5417\nLATVIA", {locale: 'lv-LV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Igors Biedriņš Aglonas iela 43, Apt 1", parsedAddress.streetAddress);
	assertEquals("DAUGAVPILS", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("LV-5417", parsedAddress.postalCode);
	assertEquals("LATVIA", parsedAddress.country);
	assertEquals("LV", parsedAddress.countryCode);
};

function testParseAddressLVNoZip() {
	var parsedAddress = new Address("Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS\nLATVIA", {locale: 'lv-LV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Igors Biedriņš Aglonas iela 43, Apt 1", parsedAddress.streetAddress);
	assertEquals("DAUGAVPILS", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("LATVIA", parsedAddress.country);
	assertEquals("LV", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressLVNoCountry() {
	var parsedAddress = new Address("Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS, LV-5417", {locale: 'lv-LV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Igors Biedriņš Aglonas iela 43, Apt 1", parsedAddress.streetAddress);
	assertEquals("DAUGAVPILS", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("LV-5417", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("LV", parsedAddress.countryCode);
};

function testParseAddressLVManyLines() {
	var parsedAddress = new Address("Igors Biedriņš Aglonas\niela 43\nApt 1\n\nDAUGAVPILS\n\nLV-5417\nLATVIA\n\n\n", {locale: 'lv-LV'});
	assertNotUndefined(parsedAddress);
	assertEquals("Igors Biedriņš Aglonas, iela 43, Apt 1", parsedAddress.streetAddress);
	assertEquals("DAUGAVPILS", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("LV-5417", parsedAddress.postalCode);
	assertEquals("LATVIA", parsedAddress.country);
	assertEquals("LV", parsedAddress.countryCode);
};

function testParseAddressLVOneLine() {
	var parsedAddress = new Address("Igors Biedriņš Aglonas , iela 43 , Apt 1 , DAUGAVPILS , LV-5417 , LATVIA", {locale: 'lv-LV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Igors Biedriņš Aglonas, iela 43, Apt 1", parsedAddress.streetAddress);
	assertEquals("DAUGAVPILS", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("LV-5417", parsedAddress.postalCode);
	assertEquals("LATVIA", parsedAddress.country);
	assertEquals("LV", parsedAddress.countryCode);
};

function testParseAddressLVSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tIgors Biedriņš Aglonas\t\t\riela 43\t\t\rApt 1\n\tDAUGAVPILS\n\tLV-5417\n\tLATVIA\n\n\n", {locale: 'lv-LV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Igors Biedriņš Aglonas iela 43 Apt 1", parsedAddress.streetAddress);
	assertEquals("DAUGAVPILS", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("LV-5417", parsedAddress.postalCode);
	assertEquals("LATVIA", parsedAddress.country);
	assertEquals("LV", parsedAddress.countryCode);
};

function testParseAddressLVNoDelimiters() {
	var parsedAddress = new Address("Igors Biedriņš Aglonas iela 43, Apt 1 DAUGAVPILS, LV-5417 LATVIA", {locale: 'lv-LV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Igors Biedriņš Aglonas iela 43, Apt 1", parsedAddress.streetAddress);
	assertEquals("DAUGAVPILS", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("LV-5417", parsedAddress.postalCode);
	assertEquals("LATVIA", parsedAddress.country);
	assertEquals("LV", parsedAddress.countryCode);
};

function testParseAddressLVFromUS() {
	var parsedAddress = new Address("Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS, LV-5417\nLATVIA", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Igors Biedriņš Aglonas iela 43, Apt 1", parsedAddress.streetAddress);
	assertEquals("DAUGAVPILS", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("LV-5417", parsedAddress.postalCode);
	assertEquals("LATVIA", parsedAddress.country);
	assertEquals("LV", parsedAddress.countryCode);
};

function testFormatAddressLV() {
	var parsedAddress = new Address({
		streetAddress: "Igors Biedriņš Aglonas iela 43, Apt 1",
		locality: "DAUGAVPILS",
		postalCode: "LV-5417",
		country: "LATVIA",
		countryCode: "LV"
	}, {locale: 'lv-LV'});
	
	var expected = "Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS, LV-5417\nLATVIA";
	var formatter = new AddressFmt({locale: 'lv-LV'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressLVFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Igors Biedriņš Aglonas iela 43, Apt 1",
		locality: "DAUGAVPILS",
		postalCode: "LV-5417",
		country: "LATVIA",
		countryCode: "LV"
	}, {locale: 'en-US'});
	
	var expected = "Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS, LV-5417\nLATVIA";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
