/*
 * testUnknown.js - test the unknown object
 * 
 * Copyright © 2014-2015, JEDLSoft
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

var UnknownUnit = require("./../lib/UnknownUnit.js");

function testMeasurementUnknownEmpty() {
	var m = new UnknownUnit();

	assertNotNull(m);
}

function testMeasurementUnknownUnitPreserved() {
	var m = new UnknownUnit({
	    unit: "krunghoonfoop",
	    amount: 2
	});

	assertNotNull(m);

	assertEquals("krunghoonfoop", m.getUnit());
	assertEquals(2, m.getAmount());
}

function testMeasurementUnknownUnitUnknownMeasureType() {
	var m = new UnknownUnit({
	    unit: "krunghoonfoop",
	    amount: 2
	});

	assertNotNull(m);

	assertEquals("unknown", m.getMeasure());
}
