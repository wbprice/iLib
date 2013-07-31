/*
 * testislamicdate.js - test the islamic date object
 * 
 * Copyright © 2012, JEDLSoft
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

function testIslamicDateConstructor() {
    var id = new ilib.Date.IslamicDate();
    
    assertNotNull(id);
}

/* julian date id rd 355 + epoch */
function testIslamicDateConstructorFromJD() {
    var id = new ilib.Date.IslamicDate({julianday: 1948793.5});
    
    assertEquals('object', typeof(id));
    assertEquals(354, id.getRataDie());
    assertEquals(2, id.getYears());
    assertEquals(1, id.getMonths());
    assertEquals(1, id.getDays());
    assertEquals(0, id.getHours());
    assertEquals(0, id.getMinutes());
    assertEquals(0, id.getSeconds());
    assertEquals(0, id.getMilliseconds());
}

function testIslamicDateAfterLeapYear() {
    var id = new ilib.Date.IslamicDate({julianday: 1949148.9});  // Muh 1, 0003 AH, 9:36am
    
    assertEquals('object', typeof(id));
    assertEquals(709.4, id.getRataDie());
    assertEquals(3, id.getYears());
    assertEquals(1, id.getMonths());
    assertEquals(1, id.getDays());
    assertEquals(9, id.getHours());
    assertEquals(36, id.getMinutes());
    assertEquals(0, id.getSeconds());
    assertEquals(0, id.getMilliseconds());
}

var testDates = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -1245, 12,    9,   0,    0,      0,      0,           0],
    [1660037.5, -813,  2,     23,  0,    0,      0,      0,           3],
    [1746893.5, -568,  4,     1,   0,    0,      0,      0,           3],
    [1770641.5, -501,  4,     6,   0,    0,      0,      0,           0],
    [1892731.5, -157,  10,    17,  0,    0,      0,      0,           3],
    [1931579.5, -47,   6,     3,   0,    0,      0,      0,           1],
    [1974851.5, 75,    7,     13,  0,    0,      0,      0,           6],
    [2091164.5, 403,   10,    5,   0,    0,      0,      0,           0],
    [2121509.5, 489,   5,     22,  0,    0,      0,      0,           0],
    [2155779.5, 586,   2,     7,   0,    0,      0,      0,           5],
    [2174029.5, 637,   8,     7,   0,    0,      0,      0,           6],
    [2191584.5, 687,   2,     20,  0,    0,      0,      0,           5],
    [2195261.5, 697,   7,     7,   0,    0,      0,      0,           0],
    [2229274.5, 793,   7,     1,   0,    0,      0,      0,           0],
    [2245580.5, 839,   7,     6,   0,    0,      0,      0,           3],
    [2266100.5, 897,   6,     1,   0,    0,      0,      0,           6],
    [2288542.5, 960,   9,     30,  0,    0,      0,      0,           6],
    [2290901.5, 967,   5,     27,  0,    0,      0,      0,           6],
    [2323140.5, 1058,  5,     18,  0,    0,      0,      0,           3],
    [2334848.5, 1091,  6,     2,   0,    0,      0,      0,           0],
    [2348020.5, 1128,  8,     4,   0,    0,      0,      0,           5],
    [2366978.5, 1182,  2,     3,   0,    0,      0,      0,           0],
    [2385648.5, 1234,  10,    10,  0,    0,      0,      0,           1],
    [2392825.5, 1255,  1,     11,  0,    0,      0,      0,           3],
    [2416223.5, 1321,  1,     21,  0,    0,      0,      0,           0],
    [2425848.5, 1348,  3,     19,  0,    0,      0,      0,           0],
    [2430266.5, 1360,  9,     8,   0,    0,      0,      0,           1],
    [2430833.5, 1362,  4,     13,  0,    0,      0,      0,           1],
    [2431004.5, 1362,  10,    7,   0,    0,      0,      0,           4],
    [2448698.5, 1412,  9,     13,  0,    0,      0,      0,           2],
    [2450138.5, 1416,  10,    5,   0,    0,      0,      0,           0],
    [2465737.5, 1460,  10,    12,  0,    0,      0,      0,           3],
    [2486076.5, 1518,  3,     5,   0,    0,      0,      0,           0]
];

function testIslamicDateConvert() {
    var gd;
    
    for (i = 0; i < testDates.length; i++) {
        id = new ilib.Date.IslamicDate({julianday: testDates[i][0]});
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(id));
        assertEquals("testing rd for " + testDates[i][0], (testDates[i][0] - 1948439.5), id.getRataDie());
        assertEquals("testing year for " + testDates[i][0], testDates[i][1], id.getYears());
        assertEquals("testing month for " + testDates[i][0], testDates[i][2], id.getMonths());
        assertEquals("testing day for " + testDates[i][0], testDates[i][3], id.getDays());
        assertEquals("testing hour for " + testDates[i][0], testDates[i][4], id.getHours());
        assertEquals("testing minute for " + testDates[i][0], testDates[i][5], id.getMinutes());
        assertEquals("testing second for " + testDates[i][0], testDates[i][6], id.getSeconds());
        assertEquals("testing millisecond for " + testDates[i][0], testDates[i][7], id.getMilliseconds());
        assertEquals("testing day of week for " + testDates[i][0], testDates[i][8], id.getDayOfWeek());
    }
}

function testIslamicDateConstructorFull() {
    var id = new ilib.Date.IslamicDate({
		year: 2011,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
    
    assertNotNull(id);
    
    assertEquals(2011, id.getYears());
    assertEquals(9, id.getMonths());
    assertEquals(23, id.getDays());
    assertEquals(16, id.getHours());
    assertEquals(7, id.getMinutes());
    assertEquals(12, id.getSeconds());
    assertEquals(123, id.getMilliseconds());
}

function testIslamicDateConstructorFullWithStrings() {
    var id = new ilib.Date.IslamicDate({
		year: "2011", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
    
    assertNotNull(id);
    
    assertEquals(2011, id.getYears());
    assertEquals(9, id.getMonths());
    assertEquals(23, id.getDays());
    assertEquals(16, id.getHours());
    assertEquals(7, id.getMinutes());
    assertEquals(12, id.getSeconds());
    assertEquals(123, id.getMilliseconds());
}

function testIslamicDateConstructorCopy() {
    var id = new ilib.Date.IslamicDate({
        year: 2011, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    
    assertNotNull(id);
    
    assertEquals(2011, id.getYears());
    assertEquals(9, id.getMonths());
    assertEquals(23, id.getDays());
    assertEquals(16, id.getHours());
    assertEquals(7, id.getMinutes());
    assertEquals(12, id.getSeconds());
    assertEquals(123, id.getMilliseconds());
}

function testIslamicDateGetJulianDay() {
    var gd;
    
    for (i = 0; i < testDates.length; i++) {
        id = new ilib.Date.IslamicDate({
            year: testDates[i][1], 
            month: testDates[i][2], 
            day: testDates[i][3],
            hour: testDates[i][4],
            minute: testDates[i][5],
            second: testDates[i][6],
            millsecond: testDates[i][7]
    	});
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(id));
        assertEquals(testDates[i][0], id.getJulianDay());
        assertEquals(testDates[i][8], id.getDayOfWeek());
    }
}

function testIslamicDateSetYears() {
    var id = new ilib.Date.IslamicDate();
    
    assertNotNull(id);
    
    id.setYears(123);
    
    assertEquals(123, id.getYears());
}

function testIslamicDateSetMonths() {
    var id = new ilib.Date.IslamicDate();
    
    assertNotNull(id);
    
    id.setMonths(7);
    
    assertEquals(7, id.getMonths());
}

function testIslamicDateSetDays() {
    var id = new ilib.Date.IslamicDate();
    
    assertNotNull(id);
    
    id.setDays(12);
    
    assertEquals(12, id.getDays());
}

function testIslamicDateSetHours() {
    var id = new ilib.Date.IslamicDate();
    
    assertNotNull(id);
    
    id.setHours(12);
    
    assertEquals(12, id.getHours());
}

function testIslamicDateSetMinutes() {
    var id = new ilib.Date.IslamicDate();
    
    assertNotNull(id);
    
    id.setMinutes(13);
    
    assertEquals(13, id.getMinutes());
}

function testIslamicDateSetSeconds() {
    var id = new ilib.Date.IslamicDate();
    
    assertNotNull(id);
    
    id.setSeconds(23);
    
    assertEquals(23, id.getSeconds());
}

function testIslamicDateSetMilliseconds() {
    var id = new ilib.Date.IslamicDate();
    
    assertNotNull(id);
    
    id.setMilliseconds(123);
    
    assertEquals(123, id.getMilliseconds());
}

function testGetDayOfWeek1() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 11,
		day: 2
	});
    
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 11,
		day: 2,
		hour: 8,
		minute: 39,
		second: 34
	});
    
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek());
}

function testIslamicDateTestGetTimeZero() {
    var id = new ilib.Date.IslamicDate({
		year: 1389,
		month: 10,
		day: 22
	});
    assertNotNull(id);
    
    assertEquals(0, id.getTime());
}

function testIslamicDateTestGetTimeZeroJD() {
    var id = new ilib.Date.IslamicDate({julianday: 2440587.5});
    assertNotNull(id);
    
    assertEquals(0, id.getTime());
}

function testIslamicDateTestGetTime() {
    var id = new ilib.Date.IslamicDate({
		year: 1389,
		month: 10,
		day: 24,
		hour: 8,
		minute: 30
	});
    assertNotNull(id);
    
    assertEquals(203400000, id.getTime());
}

function testIslamicDateTestGetTimeTooEarly() {
    var id = new ilib.Date.IslamicDate({
		year: 1389,
		month: 10,
		day: 21
	});
    assertNotNull(id);
    
    assertEquals(-1, id.getTime());
}

function testIslamicDateTestGetTimeTooLate() {
    var id = new ilib.Date.IslamicDate({
		year: 1459,
		month: 12,
		day: 13
	});
    assertNotNull(id);
    
    assertEquals(-1, id.getTime());
}

// test some of the helper functions to make sure they are producing the right thing
function testIslamicDateOnOrBeforeSun() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    // Sunday on or before id 5 days before 
    assertEquals(rd-5, id.onOrBeforeRd(rd, 0));
}

function testIslamicDateOnOrBeforeMon() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-4, id.onOrBeforeRd(rd, 1));
}

function testIslamicDateOnOrBeforeTue() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-3, id.onOrBeforeRd(rd, 2));
}

function testIslamicDateOnOrBeforeWed() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-2, id.onOrBeforeRd(rd, 3));
}

function testIslamicDateOnOrBeforeThu() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-1, id.onOrBeforeRd(rd, 4));
}

function testIslamicDateOnOrBeforeFri() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd, id.onOrBeforeRd(rd, 5));
}

function testIslamicDateOnOrBeforeSat() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-6, id.onOrBeforeRd(rd, 6));
}

function testIslamicDateOnOrAfterSun() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    // Sunday on or before id 5 days before 
    assertEquals(rd+2, id.onOrAfterRd(rd, 0));
}

function testIslamicDateOnOrAfterMon() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+3, id.onOrAfterRd(rd, 1));
}

function testIslamicDateOnOrAfterTue() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+4, id.onOrAfterRd(rd, 2));
}

function testIslamicDateOnOrAfterWed() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+5, id.onOrAfterRd(rd, 3));
}

function testIslamicDateOnOrAfterThu() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+6, id.onOrAfterRd(rd, 4));
}

function testIslamicDateOnOrAfterFri() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd, id.onOrAfterRd(rd, 5));
}

function testIslamicDateOnOrAfterSat() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+1, id.onOrAfterRd(rd, 6));
}

function testIslamicDateBeforeSun() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    // Sunday before id 5 days before 
    assertEquals(rd-5, id.beforeRd(rd, 0));
}

function testIslamicDateBeforeMon() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-4, id.beforeRd(rd, 1));
}

function testIslamicDateBeforeTue() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-3, id.beforeRd(rd, 2));
}

function testIslamicDateBeforeWed() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-2, id.beforeRd(rd, 3));
}

function testIslamicDateBeforeThu() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-1, id.beforeRd(rd, 4));
}

function testIslamicDateBeforeFri() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-7, id.beforeRd(rd, 5));
}

function testIslamicDateBeforeSat() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-6, id.beforeRd(rd, 6));
}

function testIslamicDateAfterSun() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    // Sunday on or before id 5 days before 
    assertEquals(rd+2, id.afterRd(rd, 0));
}

function testIslamicDateAfterMon() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+3, id.afterRd(rd, 1));
}

function testIslamicDateAfterTue() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+4, id.afterRd(rd, 2));
}

function testIslamicDateAfterWed() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+5, id.afterRd(rd, 3));
}

function testIslamicDateAfterThu() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+6, id.afterRd(rd, 4));
}

function testIslamicDateAfterFri() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+7, id.afterRd(rd, 5));
}

function testIslamicDateAfterSat() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+1, id.afterRd(rd, 6));
}

function testIslamicDateTestGetWeekOfYearThisYear() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 2,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearThisYear2() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 3,
		day: 19
	});
    assertNotNull(id);
    
    assertEquals(11, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearThisYear3() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearThisYearWithTime() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 12,
		day: 29,
		hour: 16,
		minute: 13,
		second: 12,
		millisecond: 232
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearPreviousYear() {
    var id = new ilib.Date.IslamicDate({
		year: 1428,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(51, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearLastWeekLeap() {
    var id = new ilib.Date.IslamicDate({
		year: 1429,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearLastWeekRegular1() {
    var id = new ilib.Date.IslamicDate({
		year: 1428,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearLastWeekRegular2() {
    var id = new ilib.Date.IslamicDate({
		year: 1427,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(51, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearLastWeekRegular3() {
    var id = new ilib.Date.IslamicDate({
		year: 1426,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearLastWeekRegular4() {
    var id = new ilib.Date.IslamicDate({
		year: 1425,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearLastWeekRegular5() {
    var id = new ilib.Date.IslamicDate({
		year: 1424,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(51, id.getWeekOfYear());
}

function testIslamicDateTestGetWeekOfYearLastWeekRegular6() {
    var id = new ilib.Date.IslamicDate({
		year: 1423,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testIslamicDateGetDayOfYearFirstDay() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getDayOfYear());
}

function testIslamicDateGetDayOfYearMidYear() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 3,
		day: 17
	});
    assertNotNull(id);
    
    assertEquals(76, id.getDayOfYear());
}

function testIslamicDateGetDayOfYearLastDay() {
    var id = new ilib.Date.IslamicDate({
		year: 1430,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(354, id.getDayOfYear());
}

function testIslamicDateGetDayOfYearLastDayLeapYear() {
    var id = new ilib.Date.IslamicDate({
		year: 1431,
		month: 12,
		day: 30
	});
    assertNotNull(id);
    
    assertEquals(355, id.getDayOfYear());
}

function testIslamicDateGetWeekOfMonth0() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 3,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(0, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonth1() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 3,
		day: 2
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonth2() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 3,
		day: 11
	});
    assertNotNull(id);
    
    assertEquals(2, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonth3() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 3,
		day: 20
	});
    assertNotNull(id);
    
    assertEquals(3, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonth4() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 3,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(4, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonth5() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 3,
		day: 30
	});
    assertNotNull(id);
    
    assertEquals(5, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonth6() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 4,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonth7() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 5,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonth8() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 6,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(0, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonth9() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 7,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(0, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonthUS() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 8,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfMonth("en-US"));
}

function testIslamicDateGetWeekOfMonthDE() {
    var id = new ilib.Date.IslamicDate({
		year: 1432,
		month: 8,
		day: 1
	});
    assertNotNull(id);
    
    // weeks in Germany start on Monday, and 8/1 is a Sunday, so it is at the 
    // end of the preceding week.
    assertEquals(0, id.getWeekOfMonth("de-DE"));
}

function testIslamicDateGetEraAH() {
    var id = new ilib.Date.IslamicDate({
		year: 2011,
		month: 5,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getEra());
}

function testIslamicDateGetEraBAH() {
    var id = new ilib.Date.IslamicDate({
		year: -46,
		month: 5,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0
		
	});
    assertNotNull(id);
    
    assertEquals(-1, id.getEra());
}

function testIslamicDateGetEraAHYear1() {
    var id = new ilib.Date.IslamicDate({
		year: 1,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getEra());
}

function testIslamicDateGetEraBAHYear0() {
    var id = new ilib.Date.IslamicDate({
		year: 0,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(-1, id.getEra());
}

function testIslamicDateSetTimeZone() {
    var gd = new ilib.Date.IslamicDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    gd.setTimeZone("Asia/Tokyo");
    
    assertEquals("Asia/Tokyo", gd.getTimeZone());
}

function testIslamicDateSetTimeZoneNotString() {
    var gd = new ilib.Date.IslamicDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    gd.setTimeZone(345);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
}

function testIslamicDateSetTimeZoneUndefined() {
    var gd = new ilib.Date.IslamicDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());

    // clears it out
    gd.setTimeZone(undefined);
    
    assertUndefined(gd.getTimeZone());
}

function testIslamicDateSetTimeZoneEmpty() {
    var gd = new ilib.Date.IslamicDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    // clears it out
    gd.setTimeZone("");
    
    assertUndefined(gd.getTimeZone());
}

function testIslamicDateInitWithUnixTimeRightTimeZone() {
    var gd = new ilib.Date.IslamicDate({
    	unixtime: 0
    });
    assertNotNull(gd);
    
    assertEquals("Etc/UTC", gd.getTimeZone());
}

function testIslamicDateInitWithJDRightTimeZone() {
    var gd = new ilib.Date.IslamicDate({
    	julianday: 0
    });
    assertNotNull(gd);
    
    assertEquals("Etc/UTC", gd.getTimeZone());
}

function testIslamicDateInitWithRDRightTimeZone() {
    var gd = new ilib.Date.IslamicDate({
    	rd: 0
    });
    assertNotNull(gd);
    
    assertEquals("Etc/UTC", gd.getTimeZone());
}
