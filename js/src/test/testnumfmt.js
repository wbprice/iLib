/*
 * testnumfmt.js - test the number formatter object
 * 
 * Copyright © 2012-2013, JEDLSoft
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

function testNumFmtConstructorEmpty() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
}

function testNumFmtDefaults() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    assertEquals("number", fmt.getType());
    assertEquals(-1, fmt.getMaxFractionDigits());
    assertEquals(-1, fmt.getMinFractionDigits());
    assertTrue(fmt.isGroupingUsed());
    assertEquals("halfdown", fmt.getRoundingMode());
    assertUndefined(fmt.getCurrency());
}

function testNumFmtNumberFormatSimple() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    assertEquals("1.745", fmt.format(1.745));
}

function testNumFmtNumberFormatUndefined() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    assertEquals("", fmt.format());
}

function testNumFmtNumberFormatSimpleNeg() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    assertEquals("-1.745", fmt.format(-1.745));
}

function testNumFmtNumberFormatNoFractionalLimit() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    // no limit imposed by the function -- JavaScript has a limit for itself though
    // of about 16 significant digits, which stems from the implementation of
    // floating point arithmetic that it uses
    assertEquals("1.012345678901234", fmt.format(1.012345678901234));
}

function testNumFmtNumberFormatNoIntegralLimit() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    // no limit imposed by the function -- JavaScript has a limit for itself though
    // of about 16 significant digits, which stems from the implementation of
    // floating point arithmetic that it uses
    assertEquals("12,345,678,901,234", fmt.format(12345678901234.0));
}

function testNumFmtNumberFormatWithMaxFracDigits() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.7453));
}

function testNumFmtNumberFormatWithMinFracDigits() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 4
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.7500", fmt.format(1.75));
}

function testNumFmtNumberGetMaxFracDigits() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals(2, fmt.getMaxFractionDigits());
}

function testNumFmtGetMinFracDigits() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 4
    });
    
    assertNotNull(fmt);
    
    assertEquals(4, fmt.getMinFractionDigits());
}

function testNumFmtNumberStyleStandard() {
    var fmt = new ilib.NumFmt({
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("2,345,678,901,234,567", fmt.format(2345678901234567.0));
}

function testNumFmtNumberFormatStandardWithMultiGroups() {
    var fmt = new ilib.NumFmt({
    	style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123,456,789.4", fmt.format(123456789.4));
}

function testNumFmtNumberFormatWithMultiGroupsNegative() {
    var fmt = new ilib.NumFmt({
    	style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456,789.4", fmt.format(-123456789.4));
}

function testNumFmtNumberStyleScientific() {
    var fmt = new ilib.NumFmt({
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.2345678901234568e+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificSmall() {
    var fmt = new ilib.NumFmt({
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234567890123456e-6", fmt.format(0.000001234567890123456));
}

function testNumFmtNumberStyleScientificWithMaxFractionDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457e+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificSmallWithMaxFractionDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457e-6", fmt.format(0.0000012345678901234567890123456789));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundUp() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5,
        roundingMode: "up"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457e+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundDown() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5,
        roundingMode: "down"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23456e+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundHalfDown() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 3,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234e+28", fmt.format(12345000000000000000000000000.0));
}

function testNumFmtNumberStyleScientificSmallWithMaxAndRoundHalfDown() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 3,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234e-6", fmt.format(0.0000012345));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundHalfUp() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 3,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.235e+28", fmt.format(12345000000000000000000000000.0));
}

function testNumFmtNumberFormatRoundingCeiling() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "ceiling"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.74475));
}

function testNumFmtNumberFormatRoundingCeilingNeg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "ceiling"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.74", fmt.format(-1.74475));
}

function testNumFmtNumberFormatRoundingDown() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "down"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.74475));
}

function testNumFmtNumberFormatRoundingDownNeg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "down"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.74", fmt.format(-1.74475));
}

function testNumFmtNumberFormatRoundingFloor() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "floor"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.74475));
}

function testNumFmtNumberFormatRoundingFloorNeg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "floor"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.75", fmt.format(-1.74475));
}

function testNumFmtNumberFormatRoundingUp() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "up"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.74475));
}

function testNumFmtNumberFormatRoundingUpNeg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "up"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.75", fmt.format(-1.74475));
}

function testNumFmtNumberFormatRoundingHalfdownReg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.746));
}

function testNumFmtNumberFormatRoundingHalfdownAtHalf() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.745));
}

function testNumFmtNumberFormatRoundingHalfdownNegReg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.75", fmt.format(-1.746));
}

function testNumFmtNumberFormatRoundingHalfdownNegAtHalf() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.74", fmt.format(-1.745));
}

function testNumFmtNumberFormatRoundingHalfevenLessThan5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.743));
}

function testNumFmtNumberFormatRoundingHalfeven5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.745));
}

function testNumFmtNumberFormatRoundingHalfevenMoreThan5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    // still round to the even neighbour
    assertEquals("1.75", fmt.format(1.747));
}

function testNumFmtNumberFormatRoundingHalfevenExactly5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    // no rounding
    assertEquals("1.75", fmt.format(1.75));
}

function testNumFmtNumberFormatRoundingHalfevenLessThan5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.753));
}

function testNumFmtNumberFormatRoundingHalfeven5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.76", fmt.format(1.755));
}

function testNumFmtNumberFormatRoundingHalfevenMoreThan5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    // still round to the even neighbour
    assertEquals("1.76", fmt.format(1.757));
}

function testNumFmtNumberFormatRoundingHalfoddLessThan5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.743));
}

function testNumFmtNumberFormatRoundingHalfodd5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.745));
}

function testNumFmtNumberFormatRoundingHalfoddMoreThan5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    // still round to the odd neighbour
    assertEquals("1.75", fmt.format(1.747));
}

function testNumFmtNumberFormatRoundingHalfoddExactly5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    // no rounding
    assertEquals("1.75", fmt.format(1.75));
}

function testNumFmtNumberFormatRoundingHalfoddLessThan5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.753));
}

function testNumFmtNumberFormatRoundingHalfodd5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.755));
}

function testNumFmtNumberFormatRoundingHalfoddMoreThan5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    // still round to the odd neighbour
    assertEquals("1.76", fmt.format(1.757));
}

function testNumFmtNumberFormatRoundingHalfupReg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.746));
}

function testNumFmtNumberFormatRoundingHalfupAtHalf() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.745));
}

function testNumFmtNumberFormatRoundingHalfupNegReg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.75", fmt.format(-1.746));
}

function testNumFmtNumberFormatRoundingHalfupNegAtHalf() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.75", fmt.format(-1.745));
}

function testNumFmtNumberStyleStringArgument() {
    var fmt = new ilib.NumFmt({
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    // should work with string arguments
    assertEquals("2,345,678,901,234,567", fmt.format("2345678901234567.0"));
}

function testNumFmtNumberStyleNumberObjectArgument() {
    var fmt = new ilib.NumFmt({
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    // should work with a number object
    assertEquals("2,345,678,901,234,567", fmt.format(new Number(2345678901234567.0)));
}

function testNumFmtNumberStyleIlibNumberObjectArgument() {
    var fmt = new ilib.NumFmt({
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    // should work with a number object
    assertEquals("2,345,678,901,234,567", fmt.format(new ilib.Number(2345678901234567.0)));
}

function testNumFmtNumberFormatDESimple() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,745", fmt.format(1.745));
}

function testNumFmtDEIsGroupingUsed() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.isGroupingUsed());
}

function testNumFmtNumberFormatDEWithThousands() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234.567,745", fmt.format(1234567.745));
}

function testNumFmtNumberFormatDEWithThousandsWithMultiGroups() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123.456.789,4", fmt.format(123456789.4));
}

function testNumFmtNumberFormatDEWithThousandsWithMultiGroupsNegative() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456.789,4", fmt.format(-123456789.4));
}

function testNumFmtNumberFormatFRSimple() {
    var fmt = new ilib.NumFmt({
        locale: "fr-FR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,745", fmt.format(1.745));
}

function testNumFmtNumberFormatFRWithThousands() {
    var fmt = new ilib.NumFmt({
        locale: "fr-FR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1 234 567,745", fmt.format(1234567.745));
}

function testNumFmtNumberFormatDESimple() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,745", fmt.format(1.745));
}

function testNumFmtPercentageFormatRegular() {
    var fmt = new ilib.NumFmt({
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

function testNumFmtPercentageGetType() {
    var fmt = new ilib.NumFmt({
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("percentage", fmt.getType());
}

function testNumFmtPercentageFormatWithDecimal() {
    var fmt = new ilib.NumFmt({
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtPercentageFormatWithDecimalAndRounding() {
    var fmt = new ilib.NumFmt({
        type: "percentage",
        maxFractionDigits: 1
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.789));
}

function testNumFmtPercentageFormatDERegular() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}

function testNumFmtPercentageFormatDEWithDecimal() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.8));
}

function testNumFmtPercentageFormatDEWithDecimalAndRounding() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        type: "percentage",
        maxFractionDigits: 1
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.789));
}

function testNumFmtCurrencyFormatDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.05", fmt.format(57.05));
}

function testNumFmtCurrencyFormatZeroCents() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.00", fmt.format(57));
}

function testNumFmtCurrencyGetType() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("currency", fmt.getType());
}

function testNumFmtCurrencyGetStyleDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("common", fmt.getStyle());
}

function testNumFmtCurrencyFormatDefaultRounding() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.35", fmt.format(57.3467));
}

function testNumFmtCurrencyFormatOverrideMinFraction() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        minFractionDigits: 5,
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.34600", fmt.format(57.346));
}

function testNumFmtCurrencyFormatOverrideMaxFraction() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        maxFractionDigits: 0,
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57", fmt.format(57.3467));
}

function testNumFmtCurrencyFormatOverrideMinAndMaxFraction() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        minFractionDigits: 3,
        maxFractionDigits: 3,
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.347", fmt.format(57.3467));
}

function testNumFmtCurrencyFormatOverrideMinAndMaxFractionWonky() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        minFractionDigits: 4,
        maxFractionDigits: 3,
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.347", fmt.format(57.3467));
}

function testNumFmtCurrencyFormatAlternateStyle() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        style: "iso",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("USD 57.35", fmt.format(57.35));
}

function testNumFmtCurrencyFormatOtherCurrency() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("€57.35", fmt.format(57.35));
}

function testNumFmtCurrencyFormatOtherCurrencyIsoStyle() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "EUR",
        style: "iso"
    });
    
    assertNotNull(fmt);
    
    assertEquals("EUR 57.35", fmt.format(57.35));
}

function testNumFmtCurrencyGetDefaultFractionDigits() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals(2, fmt.getMaxFractionDigits());
    assertEquals(2, fmt.getMinFractionDigits());
}

function testNumFmtCurrencyGetFractionDigitsOtherCurrency() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "JPY"  // Japanese yen
    });
    
    assertNotNull(fmt);
    
    assertEquals(0, fmt.getMaxFractionDigits());
    assertEquals(0, fmt.getMinFractionDigits());
}

function testNumFmtCurrencyFormatOtherCurrencyUseDefaultDigits() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "JPY"  // japanese yen use 0 fraction digits
    });
    
    assertNotNull(fmt);
    
    assertEquals("¥345", fmt.format(345.3));
}

function testNumFmtCurrencyNoCurrencyDefaultForLocale() {
    var fmt;
    
    try {
    	fmt = new ilib.NumFmt({
	        type: "currency",
	        locale: "ja-JP"
	    });

    	fail();
    } catch (e) {
    	assertUndefined(fmt);
    	assertEquals("A currency property is required in the options to the number formatter constructor when the type property is set to currency.", e);
    }
}

function testNumFmtCurrencyUseCorrectFractionDigitsForLocale() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ja-JP",
        currency: "JPY"
    });
    
    assertNotNull(fmt);
    
    assertEquals(0, fmt.getMaxFractionDigits());
    assertEquals(0, fmt.getMinFractionDigits());
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ja-JP",
        currency: "JPY"
    });
    
    assertNotNull(fmt);
    
    assertEquals("¥345", fmt.format(345.3));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocalefr_CA() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "fr-CA",
        currency: "CAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 000,00 $", fmt.format(100000.00));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocalefr_CA1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "fr-CA",
        currency: "CAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 $", fmt.format(100110.57));
}

function testNumFmtCurrencyUseCorrectRoundingModeForLocale() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "zxx-XX",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("halfeven", fmt.getRoundingMode());
}

function testNumFmtJAIsGroupingUsed() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP"
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.isGroupingUsed());
}

function testNumFmtNumberFormatJAWithThousandsWithMultiGroups() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123,456,789.4", fmt.format(123456789.4));
}

function testNumFmtNumberFormatJAWithThousandsWithMultiGroupsNegative() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456,789.4", fmt.format(-123456789.4));
}

function testNumFmtNumberFormatJAWithThousandsWithMultiGroupsja() {
    var fmt = new ilib.NumFmt({
        locale: "ja"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123456789.4", fmt.format(123456789.4));
}

function testNumFmtNumberFormatJAWithThousandsWithMultiGroupsNegativeja() {
    var fmt = new ilib.NumFmt({
        locale: "ja"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123456789.4", fmt.format(-123456789.4));
}

function testNumFmtNumberFormatJALessThanOne() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("0.7", fmt.format(0.7));
}

function testNumFmtNumberFormatJALessThanOneNegative() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-0.7", fmt.format(-0.7));
}

// test all of tier 1 locales and a number of the tier 2 and lower locales
function testNumFmtzhCN() {
    var fmt = new ilib.NumFmt({
        locale: "zh-CN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtenIN() {
    var fmt = new ilib.NumFmt({
        locale: "en-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1,23,456.78", fmt.format(-123456.785));
}

function testNumFmthiIN() {
    var fmt = new ilib.NumFmt({
        locale: "hi-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1,23,456.78", fmt.format(-123456.785));
}

function testNumFmtasIN() {
    var fmt = new ilib.NumFmt({
        locale: "as-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1,23,456.78", fmt.format(-123456.785));
}


function testNumFmthiIN() {
    var fmt = new ilib.NumFmt({
        locale: "hi-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1,12,34,56,13,232.78", fmt.format(-112345613232.785));
}


/***************** test cases written by Birendra 3/6/2013 *******************************************/


//test cases for en-GB

function testNumFmtenGB() {
    var fmt = new ilib.NumFmt({
        locale: "en-GB",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_enGB() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-GB",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_enGB() {
    var fmt = new ilib.NumFmt({
	locale: "en-GB",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}


//test cases for ko-KR

function testNumFmtkoKR() {
    var fmt = new ilib.NumFmt({
        locale: "ko-KR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocaleko_KR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ko-KR",
        currency: "KRW",
	maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("₩100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_koKR() {
    var fmt = new ilib.NumFmt({
	locale: "ko-KR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

//test cases for zh-Hans-CN
function testNumFmt_zhHansCN() {
    var fmt = new ilib.NumFmt({
        locale: "zh-Hans-CN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_zhHansCN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "zh-CN",
	style: "common",
        currency: "CNY"
    });
    
    assertNotNull(fmt);
    
    assertEquals("¥100,000.00", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_zhHansCN() {
    var fmt = new ilib.NumFmt({
	locale: "zh-Hans-CN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}


//test cases for honk-kong

function testNumFmt_zhHansHK() {
    var fmt = new ilib.NumFmt({
        locale: "zh-Hans-HK",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_zhHansHK() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "zh-Hans-HK",
	style: "iso",
        currency: "HKD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("HK$100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_zhHansHK() {
    var fmt = new ilib.NumFmt({
	locale: "zh-Hans-HK",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}
//zh-Hank-TW

function testNumFmt_zhHantTW() {
    var fmt = new ilib.NumFmt({
        locale: "zh-Hant-TW",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_zhHantTW() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "zh-Hant-TW",
	style: "iso",
        currency: "TWD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("TWD100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_zhHantTW() {
    var fmt = new ilib.NumFmt({
	locale: "zh-Hant-TW",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

//test cases for fr-FR
function testNumFmt_frFR() {
    var fmt = new ilib.NumFmt({
        locale: "fr-FR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_frFR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "fr-FR",
	currency: "CAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 $", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_frFR() {
    var fmt = new ilib.NumFmt({
	locale: "fr-FR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}

//test cases for pt-BR
function testNumFmt_ptBR() {
    var fmt = new ilib.NumFmt({
        locale: "pt-BR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}


function testNumFmtPercentageFormatRegular_ptBR() {
    var fmt = new ilib.NumFmt({
	locale: "pt-BR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,21%", fmt.format(57.21));
}
/******************************** End of test cases****************************************************/
function testNumFmtenGB() {
    var fmt = new ilib.NumFmt({
        locale: "en-GB",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtenCA() {
    var fmt = new ilib.NumFmt({
        locale: "en-CA",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtjaJP() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtja() {
    var fmt = new ilib.NumFmt({
        locale: "ja",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123456.78", fmt.format(-123456.785));
}

function testNumFmtptBR() {
    var fmt = new ilib.NumFmt({
        locale: "pt-BR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtdeDE() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtruRU() {
    var fmt = new ilib.NumFmt({
        locale: "ru-RU",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtidID() {
    var fmt = new ilib.NumFmt({
        locale: "id-ID",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtfrFR() {
    var fmt = new ilib.NumFmt({
        locale: "fr-FR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtfrCA() {
    var fmt = new ilib.NumFmt({
        locale: "fr-CA",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtitIT() {
    var fmt = new ilib.NumFmt({
        locale: "it-IT",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtAsyncDefaults() {
	var callbackCalled = false;
    new ilib.NumFmt({
    	sync: false,
    	onLoad: function (fmt) {
    	    assertNotNull(fmt);

    	    assertEquals("number", fmt.getType());
    	    assertEquals(-1, fmt.getMaxFractionDigits());
    	    assertEquals(-1, fmt.getMinFractionDigits());
    	    assertTrue(fmt.isGroupingUsed());
    	    assertEquals("halfdown", fmt.getRoundingMode());
    	    assertUndefined(fmt.getCurrency());
    	    
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
}

function testNumFmtAsync() {
	var callbackCalled = false;
    new ilib.NumFmt({
    	sync: false,
    	onLoad: function (fmt) {
    	    assertNotNull(fmt);
    	    assertEquals("12,345,678,901,234", fmt.format(12345678901234.0));
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
}

function testNumFmtAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.NumFmt({
        locale: "it-IT",
        maxFractionDigits: 2,
    	sync: false,
    	onLoad: function (fmt) {
    	    assertNotNull(fmt);
    	    assertEquals("-123.456,78", fmt.format(-123456.785));
    	    callbackCalled = true;
    	}
        
    });
    assertTrue(callbackCalled);
}
