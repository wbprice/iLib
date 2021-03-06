/*
 * testdatefmt_cop_EG.js - test the date formatter object in Coptic
 * 
 * Copyright © 2015, JEDLSoft
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
var DateFmt = require("./../lib/DateFmt.js");
var CopticDate = require("./../lib/CopticDate.js");
function testDateFmtConstructorEmpty_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "short"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/09/2011", fmt.format(date));
}

function testDateFmtSimpleMedium_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "medium"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 بشنس 2011", fmt.format(date));
}

function testDateFmtSimpleLong_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "long"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 بشنس، 2011", fmt.format(date));
}

function testDateFmtSimpleFull_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 بشنس، 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 م", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 م", fmt.format(date));
}

function testDateFmtSimpleTimeLong_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 م", fmt.format(date));
}

function testDateFmtSimpleTimeFull_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 م", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 م ‏29/09/2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 م ‏29 بشنس 2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 م ‏29 بشنس، 2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 م ‏29 بشنس، 2011", fmt.format(date));
}

function testDateFmtTemplateCalendar_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "cop-EG",
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


function testDateFmtTemplateCalendarIncompatibleDateType_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 1731,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    // convert automatically to a Julian calendar date
    assertEquals("2015-05-24 13:45", fmt.format(date));
}

function testDateFmtTemplateClock12SwitchHH_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtTemplateClock12Switchkk_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtTemplateClock24Switchhh_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtTemplateClock24SwitchKK_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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


function testDateFmtTypeDate_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "date"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/09/2011", fmt.format(date));
}

function testDateFmtTypeTime_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 م", fmt.format(date));
}

function testDateFmtTypeDateTime_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 م ‏29/09/2011", fmt.format(date));
}


function testDateFmtShortDateComponentsY_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", date: "y"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtShortDateComponentsM_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", date: "m"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09", fmt.format(date));
}

function testDateFmtShortDateComponentsN_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", date: "n"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtShortDateComponentsD_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", date: "d"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29", fmt.format(date));
}

function testDateFmtShortDateComponentsDM_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", date: "dm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", date: "my"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏09/2011", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/09/2011", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("س، 29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("س، 29/09/2011", fmt.format(date));
}


function testDateFmtFullDateComponentsY_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtFullDateComponentsM_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("بشنس", fmt.format(date));
}

function testDateFmtFullDateComponentsD_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29", fmt.format(date));
}

function testDateFmtFullDateComponentsDM_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 بشنس", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("بشنس، 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 بشنس، 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("السبت، 29 بشنس", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("السبت، 29 بشنس، 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtShortTimeComponentsM_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtShortTimeComponentsH_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtShortTimeComponentsMS_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtShortTimeComponentsHM_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtShortTimeComponentsHMS_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtShortTimeComponentsHMA_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 م", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_cop_EG() {
    var fmt = new DateFmt({
        locale: "cop-EG", 
        type: "time", 
        time: "hmz", 
        timezone: "Africa/Cairo"
    });
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_cop_EG() {
    var fmt = new DateFmt({
        locale: "cop-EG", 
        type: "time", 
        time: "hmaz", 
        timezone: "Africa/Cairo"
    });
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 م EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 م", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_cop_EG() {
    var fmt = new DateFmt({
        locale: "cop-EG", 
        type: "time", 
        time: "hmsz", 
        timezone: "Africa/Cairo"
    });
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_cop_EG() {
    var fmt = new DateFmt({
        locale: "cop-EG", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Africa/Cairo"
    });
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 م EEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtFullTimeComponentsM_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtFullTimeComponentsH_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtFullTimeComponentsMS_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtFullTimeComponentsHM_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtFullTimeComponentsHMS_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
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

function testDateFmtFullTimeComponentsHMA_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 م", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_cop_EG() {
    var fmt = new DateFmt({
        locale: "cop-EG", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Africa/Cairo"
    });
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_cop_EG() {
    var fmt = new DateFmt({
        locale: "cop-EG", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Africa/Cairo"
    });
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 م EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_cop_EG() {
    var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 م", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_cop_EG() {
    var fmt = new DateFmt({
        locale: "cop-EG", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Africa/Cairo"
    });
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_cop_EG() {
    var fmt = new DateFmt({
        locale: "cop-EG", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Africa/Cairo"
    });
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 م EEST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_cop_EG() {
    var fmt = new DateFmt({
        locale: "cop-EG", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Africa/Cairo"
    });
    assertNotNull(fmt);
    
    var date = new CopticDate({
		locale: "cop-EG",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    // does not observe DST, so no difference in the TZ spec
    assertEquals("1:45:37 EEST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("خلال 30 ثانية من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinMinuteBefore_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("قبل 30 ثانية من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinHourAfter_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 10 دقائق من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinHourBefore_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 10 دقائق من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinDayAfter_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 4 ساعات من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinDayBefore_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 4 ساعات من الأيام", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeWithinFortnightAfter_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 4 أيام من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinFortnightBefore_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 4 أيام من الأيام", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeWithinQuarterAfter_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 9 أسابيع من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinQuarterBefore_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 9 أسابيع من الأيام", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeWithinTwoYearsAfter_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 16 شهر من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinTwoYearsBefore_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 14 شهر من الأيام", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeYearsAfter_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 14 سنة من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeYearsBefore_cop_EG() {
    var fmt = new DateFmt({
    	locale: "cop-EG",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new CopticDate({
    	locale: "cop-EG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new CopticDate({
    	locale: "cop-EG",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 21 سنة من الأيام", fmt.formatRelative(reference, date));
};
