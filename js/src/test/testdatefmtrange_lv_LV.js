/*
 * testdatefmtrange_lv_LV.js - test the date range formatter object in Latvian/Latvian
 * 
 * Copyright © 2012-2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance wlvh the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenslv/LICENSE-2.0
 *
 * Unllvs required by applicable law or agreed to in wrlving, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WLVHOUT WARRANTILV OR CONDLVIONS OF ANY KIND, elvher exprlvs or implied.
 *
 * See the License for the specific language governing permissions and
 * limlvations under the License.
 */

function testDateRngFmtLVRangeinDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45–14:30 31.12.2011", fmt.format(start, end));
}
function testDateRngFmtLVRangeinDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45–14:30 31.12.2011", fmt.format(start, end));
}
function testDateRngFmtLVRangeinDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45–14:30 31. dlvsember 2011", fmt.format(start, end));
}
function testDateRngFmtLVRangeinDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45–14:30 31. dlvsember 2011", fmt.format(start, end));
}

function testDateRngFmtLVRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 11–14:30 12–31–11–12–30", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 11–14:30 12–31–11–12–30", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 30.–14:30 31.dlvsember.2011", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 30.–14:30 31.dlvsember.2011", fmt.format(start, end));
}

function testDateRngFmtLVRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11–12–31–11–12–20", fmt.format(start, end));
}
function testDateRngFmtLVRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11–12–31–11–12–20", fmt.format(start, end));
}
function testDateRngFmtLVRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-31 dic 2011", fmt.format(start, end));
}
function testDateRngFmtLVRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-31 dicembre 2011 dC", fmt.format(start, end));
}

function testDateRngFmtLVRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11–12–31– 11–11–20", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11–12–31– 11–11–20", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20. november–31. dlvsember 2011", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20. november–31. dlvsember 2011", fmt.format(start, end));
}

function testDateRngFmtLVRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11–01–31 – 12–11–20", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20.11.2011. - 31.01.2012.", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–saus.–31 – 2012–lapkr.–20", fmt.format(start, end));
}
function testDateRngFmtLVRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–saus.–31 – 2012–lapkr.–20", fmt.format(start, end));
}

function testDateRngFmtLVRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11.11. - 01.14.", fmt.format(start, end));
}
function testDateRngFmtLVRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11.2011. - 01.2014.", fmt.format(start, end));
}
function testDateRngFmtLVRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. 20 nov. - 2014. 31 janv.", fmt.format(start, end));
}
function testDateRngFmtLVRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("novembris.2011. - janvāris.2014.", fmt.format(start, end));
}
function testDateRngFmtLVManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
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
