/*
 * testdatefmtrange_es_UY.js - test the date range formatter object in French/France
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTY OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtUYRangeinDayShort() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31/12/11 1:45 p. m. - 2:30 p. m.", fmt.format(start, end));
}
function testDateRngFmtUYRangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 de dic. de 2011 1:45 p. m. - 2:30 p. m.", fmt.format(start, end));
}
function testDateRngFmtUYRangeinDayLong() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 de diciembre de 2011, 1:45 p. m. - 2:30 p. m.", fmt.format(start, end));
}
function testDateRngFmtUYRangeinDayFull() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 de diciembre de 2011, 1:45 p. m. - 2:30 p. m.", fmt.format(start, end));
}

function testDateRngFmtUYRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30/12/11 1:45 p. m. - 31/12/11 2:30 p. m.", fmt.format(start, end));
}
function testDateRngFmtUYRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 de dic. 1:45 p. m. - 31 de dic. de 2011 2:30 p. m.", fmt.format(start, end));
}
function testDateRngFmtUYRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 de diciembre, 1:45 p. m. - 31 de diciembre de 2011, 2:30 p. m.", fmt.format(start, end));
}
function testDateRngFmtUYRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 de diciembre, 1:45 p. m. - 31 de diciembre de 2011, 2:30 p. m.", fmt.format(start, end));
}

function testDateRngFmtUYRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 - 31/12/11", fmt.format(start, end));
}
function testDateRngFmtUYRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 - 31 de dic. de 2011", fmt.format(start, end));
}
function testDateRngFmtUYRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 - 31 de diciembre de 2011", fmt.format(start, end));
}
function testDateRngFmtUYRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 - 31 de diciembre de 2011", fmt.format(start, end));
}

function testDateRngFmtUYRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11 - 31/12/11", fmt.format(start, end));
}
function testDateRngFmtUYRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 de nov. - 31 de dic. de 2011", fmt.format(start, end));
}
function testDateRngFmtUYRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 de noviembre - 31 de diciembre de 2011", fmt.format(start, end));
}
function testDateRngFmtUYRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 de noviembre - 31 de diciembre de 2011", fmt.format(start, end));
}

function testDateRngFmtUYRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 - 31/1/12", fmt.format(start, end));
}
function testDateRngFmtUYRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 de nov. de 2011 - 31 de ene. de 2012", fmt.format(start, end));
}
function testDateRngFmtUYRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 de noviembre de 2011 - 31 de enero de 2012", fmt.format(start, end));
}
function testDateRngFmtUYRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 de noviembre de 2011 - 31 de enero de 2012", fmt.format(start, end));
}

function testDateRngFmtUYRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11 - 1/14", fmt.format(start, end));
}
function testDateRngFmtUYRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("nov. de 2011 - ene. de 2014", fmt.format(start, end));
}
function testDateRngFmtUYRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("noviembre de 2011 - enero de 2014", fmt.format(start, end));
}
function testDateRngFmtUYRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("noviembre de 2011 - enero de 2014", fmt.format(start, end));
}
function testDateRngFmtUYManyYearsFull() {
    var fmt = new DateRngFmt({locale: "es-UY", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 - 2064", fmt.format(start, end));
}
