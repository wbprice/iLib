/*
 * testaddress.js - test the address parsing and formatting routines
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

function testParseAddressKRNormal() {
	var parsedAddress = new ilib.Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 151-742\nSOUTH KOREA", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNormalNative() {
	var parsedAddress = new ilib.Address("대한민국\n151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRWithRegion() {
	var parsedAddress = new ilib.Address("Chuncheon National University of Education.\nGongji Ro 126, Chuncheon 200-703, Gangwon-Do, Republic of Korea", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Chuncheon National University of Education., Gongji Ro 126", parsedAddress.streetAddress);
	assertEquals("Chuncheon", parsedAddress.locality);
	assertEquals("Gangwon-Do", parsedAddress.region);
	assertEquals("200-703", parsedAddress.postalCode);
	assertEquals("Republic of Korea", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRWithRegionNative() {
	var parsedAddress = new ilib.Address("Chuncheon National University of Education.\nGongji Ro 126, Chuncheon 200-703, Gangwon-Do, Republic of Korea", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Chuncheon National University of Education., Gongji Ro 126", parsedAddress.streetAddress);
	assertEquals("Chuncheon", parsedAddress.locality);
	assertEquals("Gangwon-Do", parsedAddress.region);
	assertEquals("200-703", parsedAddress.postalCode);
	assertEquals("Republic of Korea", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};


function testParseAddressKRNoZip() {
	var parsedAddress = new ilib.Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul\nSOUTH KOREA", {locale: 'ko-KR'});

	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoZipNative() {
	var parsedAddress = new ilib.Address("대한민국\n서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});

	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoCountry() {
	var parsedAddress = new ilib.Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 151-742", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoCountryNative() {
	var parsedAddress = new ilib.Address("151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRManyLines() {
	var parsedAddress = new ilib.Address("Seoul National University\n1 Gwanak-ro\nGwanak-gu\nSeoul\n151-742\nKorea\n", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("Korea", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRManyLinesNative() {
	var parsedAddress = new ilib.Address("대한민국\n151-742\n서울시\n관악구 관악로\n1 서울대학교", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKROneLine() {
	var parsedAddress = new ilib.Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 151-742, SOUTH KOREA", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKROneLineNative() {
	var parsedAddress = new ilib.Address("대한민국, 151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoDelimiters() {
	var parsedAddress = new ilib.Address("Seoul National University 1 Gwanak-ro Gwanak-gu Seoul 151-742 SOUTH KOREA", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University 1 Gwanak-ro Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoDelimitersNative() {
	var parsedAddress = new ilib.Address("대한민국 151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRLatinFromUS() {
	var parsedAddress = new ilib.Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 151-742\nRepublic of Korea", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("Republic of Korea", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testFormatAddressKRLatin() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Seoul National University, 1 Gwanak-ro, Gwanak-gu",
		locality: "Seoul",
		postalCode: "151-742",
		country: "SOUTH KOREA",
		countryCode: "KR"
	}, {locale: 'ko-KR'});
	
	var expected = "Seoul National University, 1 Gwanak-ro, Gwanak-gu\nSeoul 151-742\nSOUTH KOREA";
	var formatter = new ilib.AddressFmt({locale: 'ko-KR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressKRLatinFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Seoul National University, 1 Gwanak-ro, Gwanak-gu",
		locality: "Seoul",
		postalCode: "151-742",
		country: "SOUTH KOREA",
		countryCode: "KR"
	}, {locale: 'en-US'});
	
	var expected = "Seoul National University, 1 Gwanak-ro, Gwanak-gu\nSeoul 151-742\nSOUTH KOREA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressKRNative() {
	var parsedAddress = new ilib.Address({
		streetAddress: "관악구 관악로 1 서울대학교",
		locality: "서울시",
		postalCode: "151-742",
		country: "대한민국",
		countryCode: "KR"
	}, {locale: 'ko-KR'});
	
	var expected = "대한민국\n151-742 서울시 관악구 관악로 1 서울대학교";
	var formatter = new ilib.AddressFmt({locale: 'ko-KR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressKRNativeFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "관악구 관악로 1 서울대학교",
		locality: "서울시",
		postalCode: "151-742",
		country: "대한민국",
		countryCode: "KR"
	}, {locale: 'en-US'});
	
	var expected = "151-742 서울시 관악구 관악로 1 서울대학교\nSOUTH KOREA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
