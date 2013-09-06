/*
 * testaddress_GQ.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial", {locale: 'es-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guinea Ecuatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial", {locale: 'es-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guinea Ecuatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial", {locale: 'es-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Guinea Ecuatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO", {locale: 'es-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema\nApartado 36\nMALABO\nGuinea Ecuatorial", {locale: 'es-GQ'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ignacio Nguema, Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guinea Ecuatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema , Apartado 36 , MALABO , Guinea Ecuatorial", {locale: 'es-GQ'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ignacio Nguema, Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guinea Ecuatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema\n\n\t\r\t\t\rApartado 36\r\r\n\nMALABO\t\r\n\t\rGuinea Ecuatorial", {locale: 'es-GQ'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ignacio Nguema, Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guinea Ecuatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36 MALABO Guinea Ecuatorial", {locale: 'es-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guinea Ecuatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial", {locale: 'es-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guinea Ecuatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Ignacio Nguema Apartado 36",
		locality: "MALABO",
		postalCode: "1010",
		country: "Guinea Ecuatorial",
		countryCode: "GQ"
	}, {locale: 'es-GQ'});
	
	var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial";
	var formatter = new ilib.AddressFmt({locale: 'es-GQ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Ignacio Nguema Apartado 36",
		locality: "MALABO",
		postalCode: "1010",
		country: "Guinea Ecuatorial",
		countryCode: "GQ"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testFRParseAddressNormal() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale", {locale: 'fr-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée équatoriale", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testFRParseAddressNormal() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale", {locale: 'fr-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée équatoriale", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testFRParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale", {locale: 'fr-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("guinée équatoriale", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testFRParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO", {locale: 'fr-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testFRParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema\nApartado 36\nMALABO\nguinée équatoriale", {locale: 'fr-GQ'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ignacio Nguema, Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée équatoriale", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testFRParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema , Apartado 36 , MALABO , guinée équatoriale", {locale: 'fr-GQ'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ignacio Nguema, Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée équatoriale", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testFRParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema\n\n\t\r\t\t\rApartado 36\r\r\n\nMALABO\t\r\n\t\rguinée équatoriale", {locale: 'fr-GQ'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ignacio Nguema, Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée équatoriale", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testFRParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36 MALABO guinée équatoriale", {locale: 'fr-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée équatoriale", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testFRParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale", {locale: 'fr-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée équatoriale", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testFormatFRAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Ignacio Nguema Apartado 36",
		locality: "MALABO",
		postalCode: "1010",
		country: "guinée équatoriale",
		countryCode: "GQ"
	}, {locale: 'fr-GQ'});
	
	var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale";
	var formatter = new ilib.AddressFmt({locale: 'fr-GQ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatFRAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Ignacio Nguema Apartado 36",
		locality: "MALABO",
		postalCode: "1010",
		country: "guinée équatoriale",
		countryCode: "GQ"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};



function testPTParseAddressNormal() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial", {locale: 'pt-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guiné Equatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testPTParseAddressNormal() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial", {locale: 'pt-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guiné Equatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testPTParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial", {locale: 'pt-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Guiné Equatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testPTParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO", {locale: 'pt-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testPTParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema\nApartado 36\nMALABO\nGuiné Equatorial", {locale: 'pt-GQ'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ignacio Nguema, Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guiné Equatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testPTParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema , Apartado 36 , MALABO , Guiné Equatorial", {locale: 'pt-GQ'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ignacio Nguema, Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guiné Equatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testPTParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema\n\n\t\r\t\t\rApartado 36\r\r\n\nMALABO\t\r\n\t\rGuiné Equatorial", {locale: 'pt-GQ'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ignacio Nguema, Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guiné Equatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testPTParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36 MALABO Guiné Equatorial", {locale: 'pt-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guiné Equatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testPTParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial", {locale: 'pt-GQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ignacio Nguema Apartado 36", parsedAddress.streetAddress);
	assertEquals("MALABO", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Guiné Equatorial", parsedAddress.country);
	assertEquals("GQ", parsedAddress.countryCode);
};

function testFormatPTAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Ignacio Nguema Apartado 36",
		locality: "MALABO",
		postalCode: "1010",
		country: "Guiné Equatorial",
		countryCode: "GQ"
	}, {locale: 'pt-GQ'});
	
	var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial";
	var formatter = new ilib.AddressFmt({locale: 'pt-GQ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatPTAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Ignacio Nguema Apartado 36",
		locality: "MALABO",
		postalCode: "1010",
		country: "Guiné Equatorial",
		countryCode: "GQ"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
