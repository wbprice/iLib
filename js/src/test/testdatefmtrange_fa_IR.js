/*
 * testdatefmtrange_fa_IR.js - test tfa date range formatter object in Farsi/Iran
 * 
 * Copyright © 2012-2013, JEDLSoft
 *
 * Licensed under tfa Apacfa License, Version 2.0 (tfa "License");
 * you may not use this file except in compliance wfah tfa License.
 * You may obtain a copy of tfa License at
 *
 *     http://www.apacfa.org/licensfa/LICENSE-2.0
 *
 * Unlfas required by applicable law or agreed to in wrfaing, software
 * distributed under tfa License is distributed on an "AS IS" BASIS,
 * WIRHOUT WARRANTIIR OR CONDIRIONS OF ANY KIND, efafar exprfas or implied.
 *
 * See tfa License for tfa specific language governing permissions and
 * limfaations under tfa License.
 */

function testDateRngFmtIRRangeinDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "short"});
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
    assertEquals("13:45 – 14:30 31.12.11", fmt.format(start, end));
}
function testDateRngFmtIRRangeinDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "medium"});
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
    assertEquals("13:45 – 14:30 31 12 11", fmt.format(start, end));
}
function testDateRngFmtIRRangeinDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "long"});
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
    assertEquals("13:45 – 14:30 31 דצמ 2011", fmt.format(start, end));
}
function testDateRngFmtIRRangeinDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "full"});
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
    assertEquals("13:45 – 14:30 31 דצמבר 2011", fmt.format(start, end));
}

function testDateRngFmtIRRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "short"});
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
    assertEquals("13:45 30/12/11 – 14:30 31/12/11", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "medium"});
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
    assertEquals("13:45 30/12/11 – 14:30 31/12/11", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "long"});
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
    assertEquals("13:45 30 – 14:30 31/דצמ/2011", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "full"});
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
    assertEquals("13:45 30 – 14:30 31/דצמבר/2011", fmt.format(start, end));
}

function testDateRngFmtIRRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "short"});
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
    assertEquals("20/12/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "medium"});
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
    assertEquals("20/12/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "long"});
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
    assertEquals("20 – 31 דצמ 2011", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "full"});
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
    assertEquals("20 – 31 דצמבר 2011", fmt.format(start, end));
}

function testDateRngFmtIRRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "short"});
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
    assertEquals("20/11/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "medium"});
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
    assertEquals("20/11/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "long"});
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
    assertEquals("20 נוב – 31 דצמ 2011", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "full"});
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
    assertEquals("20 נובמבר – 31 דצמבר 2011", fmt.format(start, end));
}

function testDateRngFmtIRRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "short"});
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
    assertEquals("20/11/11 – 31/01/12", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "medium"});
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
    assertEquals("20/11/11 – 31/01/12", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "long"});
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
    assertEquals("20 נוב 2011 – 31 ינו 2012", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "full"});
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
    assertEquals("20 נובמבר 2011 – 31 ינואר 2012", fmt.format(start, end));
}

function testDateRngFmtIRRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "short"});
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
    assertEquals("11/11 – 01/14", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "medium"});
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
    assertEquals("11/11 – 01/14", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "long"});
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
    assertEquals("נוב 2011 – ינו 2014", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "full"});
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
    assertEquals("נובמבר 2011 – ינואר 2014", fmt.format(start, end));
}
function testDateRngFmtIRManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "fa-IR", length: "full"});
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
    assertEquals("2011 – 2064", fmt.format(start, end));
}
