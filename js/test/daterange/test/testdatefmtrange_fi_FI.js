/*
 * testdatefmtrange_fi_FI.js - test the date range formatter object in Finnish/Finland
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed unfir the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed unfir the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations unfir the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtFIRangeInDayShort() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "short"});
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
    assertEquals("31.12.2011 13.45 – 14.30", fmt.format(start, end));
}
function testDateRngFmtFIRangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "medium"});
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
    assertEquals("31.12.2011 13.45 – 14.30", fmt.format(start, end));
}
function testDateRngFmtFIRangeInDayLong() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "long"});
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
    assertEquals("31. joulukuuta 2011 13.45 – 14.30", fmt.format(start, end));
}
function testDateRngFmtFIRangeInDayFull() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "full"});
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
    assertEquals("31. joulukuuta 2011 13.45 – 14.30 ", fmt.format(start, end));
}

function testDateRngFmtFIRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "short"});
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
    assertEquals("30.12 13.45 – 31.12.2011 14.30", fmt.format(start, end));
}
function testDateRngFmtFIRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "medium"});
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
    assertEquals("30.12 13.45 – 31.12.2011 14.30", fmt.format(start, end));
}
function testDateRngFmtFIRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "long"});
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
    assertEquals("30. 13.45 – 31. 14.30 joulukuuta 2011", fmt.format(start, end));
}
function testDateRngFmtFIRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "full"});
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
    assertEquals("30. 13.45 – 31. 14.30 joulukuuta 2011", fmt.format(start, end));
}

function testDateRngFmtFIRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "short"});
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
    assertEquals("20–31.12.2011", fmt.format(start, end));
}
function testDateRngFmtFIRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "medium"});
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
    assertEquals("20–31.12.2011", fmt.format(start, end));
}
function testDateRngFmtFIRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "long"});
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
    assertEquals("20. – 31. joulukuuta 2011", fmt.format(start, end));
}
function testDateRngFmtFIRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "full"});
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
    assertEquals("20. – 31. joulukuuta 2011", fmt.format(start, end));
}

function testDateRngFmtFIRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "short"});
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
    assertEquals("20.11 – 31.12.2011", fmt.format(start, end));
}
function testDateRngFmtFIRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "medium"});
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
    assertEquals("20.11 – 31.12.2011", fmt.format(start, end));
}
function testDateRngFmtFIRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "long"});
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
    assertEquals("20. marraskuuta – 31. joulukuuta 2011", fmt.format(start, end));
}
function testDateRngFmtFIRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "full"});
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
    assertEquals("20. marraskuuta – 31. joulukuuta 2011", fmt.format(start, end));
}

function testDateRngFmtFIRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "short"});
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
    assertEquals("20.11.2011 – 31.1.2012", fmt.format(start, end));
}
function testDateRngFmtFIRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "medium"});
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
    assertEquals("20.11.2011 – 31.1.2012", fmt.format(start, end));
}
function testDateRngFmtFIRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "long"});
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
    assertEquals("20. marraskuuta 2011 – 31. tammikuuta 2012", fmt.format(start, end));
}
function testDateRngFmtFIRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "full"});
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
    assertEquals("20. marraskuuta 2011 – 31. tammikuuta 2012", fmt.format(start, end));
}

function testDateRngFmtFIRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "short"});
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
    assertEquals("11.2011 – 1.2014", fmt.format(start, end));
}
function testDateRngFmtFIRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "medium"});
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
    assertEquals("11.2011 – 1.2014", fmt.format(start, end));
}
function testDateRngFmtFIRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "long"});
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
    assertEquals("marraskuuta 2011 – tammikuuta 2014", fmt.format(start, end));
}
function testDateRngFmtFIRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "full"});
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
    assertEquals("marraskuuta 2011 – tammikuuta 2014", fmt.format(start, end));
}
function testDateRngFmtFIManyYearsFull() {
    var fmt = new DateRngFmt({locale: "fi-FI", length: "full"});
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
    assertEquals("2011 – 2064", fmt.format(start, end));
}
