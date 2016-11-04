/*
 * testdatefmtrange_as_IN.js - test the date range formatter object in Assamese/india
 * 
 * 
 * Copyright © 2012-2016, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY Kind, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtasINRangeinDayShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("৩১-১২-২০১১ ১.৪৫. অপৰাহ্ণ – ২.৩০. অপৰাহ্ণ", fmt.format(start, end));
}
function testDateRngFmtasINRangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("৩১-১২-২০১১ ১.৪৫. অপৰাহ্ণ – ২.৩০. অপৰাহ্ণ", fmt.format(start, end));
}
function testDateRngFmtasINRangeinDayLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("৩১ ডিচেম্বৰ, ২০১১ ১.৪৫. অপৰাহ্ণ – ২.৩০. অপৰাহ্ণ", fmt.format(start, end));
}
function testDateRngFmtasINRangeinDayFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("৩১ ডিচেম্বৰ, ২০১১ ১.৪৫. অপৰাহ্ণ – ২.৩০. অপৰাহ্ণ", fmt.format(start, end));
}

function testDateRngFmtasINRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("৩০-১২-২০১১ ১.৪৫. অপৰাহ্ণ – ৩১-১২-২০১১ ২.৩০. অপৰাহ্ণ", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("৩০-১২-২০১১ ১.৪৫. অপৰাহ্ণ – ৩১-১২-২০১১ ২.৩০. অপৰাহ্ণ", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("৩০ ডিচেম্বৰ, ২০১১ ১.৪৫. অপৰাহ্ণ – ৩১ ডিচেম্বৰ, ২০১১ ২.৩০. অপৰাহ্ণ", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("৩০ ডিচেম্বৰ, ২০১১ ১.৪৫. অপৰাহ্ণ – ৩১ ডিচেম্বৰ, ২০১১ ২.৩০. অপৰাহ্ণ", fmt.format(start, end));
}

function testDateRngFmtasINRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("২০১১-১২-২০ – ৩১", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("২০১১ ডিসে ২০ – ৩১", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("২০১১ ডিচেম্বৰ ২০ – ৩১", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("২০১১ ডিচেম্বৰ ২০ – ৩১", fmt.format(start, end));
}

function testDateRngFmtasINRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("২০১১-১১-২০ – ২০১১-১২-৩১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("২০১১ নভে ২০ – ২০১১ ডিসে ৩১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("২০১১ নৱেম্বৰ ২০ – ডিচেম্বৰ ৩১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("২০১১ নৱেম্বৰ ২০ – ডিচেম্বৰ ৩১", fmt.format(start, end));
}

function testDateRngFmtasINRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("২০১১-১১-২০ – ২০১২-০১-৩১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("২০১১ নভে ২০ – ২০১২ জানু ৩১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("২০১১ নৱেম্বৰ ২০ – ২০১২ জানুৱাৰী ৩১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("২০১১ নৱেম্বৰ ২০ – ২০১২ জানুৱাৰী ৩১", fmt.format(start, end));
}

function testDateRngFmtasINRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("২০১১-১১ – ২০১৪-০১", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("২০১১ নভে – ২০১৪ জানু", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("২০১১ নৱেম্বৰ – ২০১৪ জানুৱাৰী", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("২০১১ নৱেম্বৰ – ২০১৪ জানুৱাৰী", fmt.format(start, end));
}
function testDateRngFmtasINManyYearsFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("২০১১ – ২০৬৪", fmt.format(start, end));
}
