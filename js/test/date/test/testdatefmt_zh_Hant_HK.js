/*
 * testdatefmt_zh_HK.js - test the date formatter object in Chinese (traditional)
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
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtConstructorEmpty_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK"});
    
    assertNotNull(fmt);
}

function testDateFmtSimpleShort_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtSimpleMedium_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日", fmt.format(date));
}

function testDateFmtSimpleLong_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日", fmt.format(date));
}

function testDateFmtSimpleFull_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日", fmt.format(date));
}

function testDateFmtSimpleTimeShort_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("下午1:45", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("下午1:45", fmt.format(date));
}

function testDateFmtSimpleTimeLong_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("下午1:45", fmt.format(date));
}

function testDateFmtSimpleTimeFull_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("下午1:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11 下午1:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日 下午1:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日 下午1:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日 下午1:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29", fmt.format(date));
}

function testDateFmtTemplateCalendarIncompatibleDateType_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    // convert automatically to a Julian calendar date
    assertEquals("2011-09-16 13:45", fmt.format(date));
}

function testDateFmtTemplateClock12SwitchHH() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateClock12Switchkk_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateClock24Switchhh_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateClock24SwitchKK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}


function testDateFmtTypeDate_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtTypeTime_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("下午1:45", fmt.format(date));
}

function testDateFmtTypeDateTime_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11 下午1:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11年", fmt.format(date));
}

function testDateFmtShortDateComponentsM_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9月", fmt.format(date));
}

function testDateFmtShortDateComponentsN_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9", fmt.format(date));
}

function testDateFmtShortDateComponentsD_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29日", fmt.format(date));
}

function testDateFmtShortDateComponentsDM_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9四", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11四", fmt.format(date));
}


function testDateFmtFullDateComponentsY_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年", fmt.format(date));
}

function testDateFmtFullDateComponentsM_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9月", fmt.format(date));
}

function testDateFmtFullDateComponentsD_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29日", fmt.format(date));
}

function testDateFmtFullDateComponentsDM_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9月29日", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9月29日星期四", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日星期四", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtShortTimeComponentsM_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtShortTimeComponentsH_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午1:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        time: "hmz", 
        timezone: "Asia/Hong_Kong"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 [HKST]", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        time: "hmaz", 
        timezone: "Asia/Hong_Kong"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午1:45 [HKST]", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午1:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        time: "hmsz", 
        timezone: "Asia/Hong_Kong"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [HKST]", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Hong_Kong"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午1:45:37 [HKST]", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtFullTimeComponentsM_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtFullTimeComponentsH_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午1:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Asia/Hong_Kong"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 [HKST]", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Asia/Hong_Kong"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午1:45 [HKST]", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午1:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Hong_Kong"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [HKST]", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Hong_Kong"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午1:45:37 [HKST]", fmt.format(date));
}

function testDateFmtTimeFrameDefaultWeeHours_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 1,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("上午1:45", fmt.format(date));
}

function testDateFmtTimeFrameDefaultEarlyMorning_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 8,
		minute: 30,
		second: 37,
		millisecond: 0
	});
    assertEquals("上午8:30", fmt.format(date));
}

function testDateFmtTimeFrameDefaultLateMorning_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 11,
		minute: 30,
		second: 37,
		millisecond: 0
	});
    assertEquals("上午11:30", fmt.format(date));
}

function testDateFmtTimeFrameDefaultNoonHour_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 12,
		minute: 37,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午12:37", fmt.format(date));
}

function testDateFmtTimeFrameDefaultAfterNoon_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 15,
		minute: 37,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午3:37", fmt.format(date));
}

function testDateFmtTimeFrameDefaultEvening_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 19,
		minute: 47,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午7:47", fmt.format(date));
}

function testDateFmtTimeFrameDefaultNight_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 22,
		minute: 53,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午10:53", fmt.format(date));
}

function testDateFmtTimeFrameChineseWeeHours_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma",
        meridiems: "chinese"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 1,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("凌晨1:45", fmt.format(date));
}

function testDateFmtTimeFrameChineseEarlyMorning_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma",
        meridiems: "chinese"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 8,
		minute: 30,
		second: 37,
		millisecond: 0
	});
    assertEquals("早上8:30", fmt.format(date));
}

function testDateFmtTimeFrameChineseLateMorning_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma",
        meridiems: "chinese"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 11,
		minute: 30,
		second: 37,
		millisecond: 0
	});
    assertEquals("上午11:30", fmt.format(date));
}

function testDateFmtTimeFrameChineseNoonHour_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma",
        meridiems: "chinese"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 12,
		minute: 37,
		second: 37,
		millisecond: 0
	});
    assertEquals("正午12:37", fmt.format(date));
}

function testDateFmtTimeFrameChineseAfterNoon_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma",
        meridiems: "chinese"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 15,
		minute: 37,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午3:37", fmt.format(date));
}

function testDateFmtTimeFrameChineseEvening_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma",
        meridiems: "chinese"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 19,
		minute: 47,
		second: 37,
		millisecond: 0
	});
    assertEquals("傍晚7:47", fmt.format(date));
}

function testDateFmtTimeFrameChineseNight_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hma",
        meridiems: "chinese"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 22,
		minute: 53,
		second: 37,
		millisecond: 0
	});
    assertEquals("晚上10:53", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_zh_Hant_HK() {
    var fmt = new DateFmt({
        locale: "zh-Hant-HK", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Hong_Kong"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [HKST]", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 秒後", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 秒前", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 分鐘後", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 分鐘前", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 小時後", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 小時前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 日後", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 日前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9星期後", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9星期前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 個月後", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 個月前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 年後", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_zh_Hant_HK() {
    var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "zh-Hant-HK",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 年前", fmt.formatRelative(reference, date));
}

