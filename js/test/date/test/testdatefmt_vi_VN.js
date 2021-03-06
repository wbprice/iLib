/*
 * testdatefmt_de_DE.js - test the date formatter object in German
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
function testDateFmtConstructorEmpty_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtSimpleMedium_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-09-2011", fmt.format(date));
}

function testDateFmtSimpleLong_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Ngày 29 tháng 09 năm 2011", fmt.format(date));
}

function testDateFmtSimpleFull_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 tháng 9 năm 2011", fmt.format(date));
}

function testDateFmtAllComponentsShort_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "short", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T5, ngày 29/09/2011", fmt.format(date));
}

function testDateFmtAllComponentsMedium_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "medium", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T5, ngày 29-09-2011", fmt.format(date));
}

function testDateFmtAllComponentsLong_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "long", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Th 5, ngày Ngày 29 tháng 09 năm 2011", fmt.format(date));
}

function testDateFmtAllComponentsFull_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thứ Năm, ngày 29 tháng 9 năm 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtSimpleTimeMedium_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtSimpleTimeLong_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtSimpleTimeFull_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtDateTimeSimpleShort_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29/09/2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29-09-2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 Ngày 29 tháng 09 năm 2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29 tháng 9 năm 2011", fmt.format(date));
}


function testDateFmtTemplateCalendar_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "vi-VN",
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

function testDateFmtTemplateClock12SwitchHH_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtTemplateClock12Switchkk_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtTemplateClock24Switchhh_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtTemplateClock24SwitchKK_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12hh_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12KK_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24HH_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24kk_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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


function testDateFmtTypeDate_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtTypeTime_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtTypeDateTime_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29/09/2011", fmt.format(date));
}


function testDateFmtShortDateComponentsY_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011", fmt.format(date));
}

function testDateFmtShortDateComponentsM_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Th", fmt.format(date));
}

function testDateFmtShortDateComponentsN_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtShortDateComponentsD_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtShortDateComponentsDM_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/2011", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T5, ngày 29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T5, ngày 29/09/2011", fmt.format(date));
}


function testDateFmtFullDateComponentsY_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011", fmt.format(date));
}

function testDateFmtFullDateComponentsM_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Tháng 9", fmt.format(date));
}

function testDateFmtFullDateComponentsD_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtFullDateComponentsDM_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 tháng 9", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Tháng 9 năm 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 tháng 9 năm 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thứ Năm, ngày 29 tháng 9", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thứ Năm, ngày 29 tháng 9 năm 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtShortTimeComponentsM_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtShortTimeComponentsH_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtShortTimeComponentsHM_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_vi_VN() {
    var fmt = new DateFmt({
        locale: "vi-VN", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 +07", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_vi_VN() {
    var fmt = new DateFmt({
        locale: "vi-VN", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 +07", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_vi_VN() {
    var fmt = new DateFmt({
        locale: "vi-VN", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 +07", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_vi_VN() {
    var fmt = new DateFmt({
        locale: "vi-VN", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 +07", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtFullTimeComponentsM_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtFullTimeComponentsH_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
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

function testDateFmtFullTimeComponentsHM_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_vi_VN() {
    var fmt = new DateFmt({
        locale: "vi-VN", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 +07", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_vi_VN() {
    var fmt = new DateFmt({
        locale: "vi-VN", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 +07", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_vi_VN() {
    var fmt = new DateFmt({
        locale: "vi-VN", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 +07", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_vi_VN() {
    var fmt = new DateFmt({
        locale: "vi-VN", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 +07", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_vi_VN() {
    var fmt = new DateFmt({
        locale: "vi-VN", 
        type: "time", 
        length: "full", 
        time: "hmsz",
        timezone: "Asia/Ho_Chi_Minh"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 +07", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("trong 30 giây nữa", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinHourAfter_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("trong 10 phút nữa", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinDayAfter_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("trong 4 giờ nữa", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("trong 4 ngày nữa", fmt.formatRelative(reference, date));
}


function testDateFmtFormatRelativeWithinQuarterAfter_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("trong 9 tuần nữa", fmt.formatRelative(reference, date));
}


function testDateFmtFormatRelativeWithinTwoYearsAfter_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("trong 16 tháng nữa", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_vi_VN() {
    var fmt = new DateFmt({locale: "vi-VN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "vi-VN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "vi-VN",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("trong 14 năm nữa", fmt.formatRelative(reference, date));
}


