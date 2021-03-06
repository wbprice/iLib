/*
 * testscriptinfo.js - test the script info object
 * 
 * Copyright © 2013-2015, JEDLSoft
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

var ScriptInfo = require("./../lib/ScriptInfo.js");

function testScriptConstructor() {
    var si = new ScriptInfo();
    assertNotNull(si);
}

function testScriptGet1() {
    var si = new ScriptInfo("Latn");
    assertNotNull(si);
    
    assertEquals("Latn", si.getCode());
    assertEquals(215, si.getCodeNumber());
    assertEquals("Latin", si.getName());
    assertEquals("Latin", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertTrue(si.getCasing());
}

function testScriptGet2() {
    var si = new ScriptInfo("Phag");
    assertNotNull(si);
    
    assertEquals("Phag", si.getCode());
    assertEquals(331, si.getCodeNumber());
    assertEquals("Phags-pa", si.getName());
    assertEquals("Phags_Pa", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGet3() {
    var si = new ScriptInfo("Hebr");
    assertNotNull(si);
    
    assertEquals("Hebr", si.getCode());
    assertEquals(125, si.getCodeNumber());
    assertEquals("Hebrew", si.getName());
    assertEquals("Hebrew", si.getLongCode());
    assertEquals("rtl", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGet4() {
    var si = new ScriptInfo("Hans");
    assertNotNull(si);
    
    assertEquals("Hans", si.getCode());
    assertEquals(501, si.getCodeNumber());
    assertEquals("Han (Simplified variant)", si.getName());
    assertEquals("Han_(Simplified_variant)", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertTrue(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGetDefaultLongCode() {
    var si = new ScriptInfo("Sara");
    assertNotNull(si);
    
    assertEquals("Sara", si.getCode());
    assertEquals(292, si.getCodeNumber());
    assertEquals("Sarati", si.getName());
    assertEquals("Sarati", si.getLongCode());
}

function testScriptGetDefaultLongCodeOrya() {
    var si = new ScriptInfo("Orya");
    assertNotNull(si);
    
    assertEquals("Orya", si.getCode());
    assertEquals(327, si.getCodeNumber());
    assertEquals("Oriya", si.getName());
    assertEquals("Oriya", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGetDefaultLongCodeAmharic() {
    var si = new ScriptInfo("Ethi");
    assertNotNull(si);
    
    assertEquals("Ethi", si.getCode());
    assertEquals(430, si.getCodeNumber());
    assertEquals("Ethiopic (Geʻez)", si.getName());
    assertEquals("Ethiopic", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertTrue(si.getNeedsIME());
    assertFalse(si.getCasing());
}
function testScriptGetDefaultLongCodeWithSpaces() {
    var si = new ScriptInfo("Kore");
    assertNotNull(si);
    
    assertEquals("Kore", si.getCode());
    assertEquals(287, si.getCodeNumber());
    assertEquals("Korean (alias for Hangul + Han)", si.getName());
    assertEquals("Korean_(alias_for_Hangul_+_Han)", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertTrue(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGetDefaultLongCodeArab() {
    var si = new ScriptInfo("Arab");
    assertNotNull(si);
    
    assertEquals("Arab", si.getCode());
    assertEquals(160, si.getCodeNumber());
    assertEquals("Arabic", si.getName());
    assertEquals("Arabic", si.getLongCode());
    assertEquals("rtl", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertFalse(si.getCasing());
}
function testScriptGetUnknown() {
    var si = new ScriptInfo("Fooo");
    assertNotNull(si);
    
    assertEquals(undefined, si.getCode());
    assertEquals(0, si.getCodeNumber());
    assertEquals(undefined, si.getName());
    assertEquals(undefined, si.getLongCode());
}

function testScriptGetAllScripts() {
    var scripts = ScriptInfo.getAllScripts();
    assertNotNull(scripts);
    
    assertEquals(177, scripts.length);

    assertEquals("Adlm", scripts[0]);
    assertEquals("Afak", scripts[1]);
    assertEquals("Aghb", scripts[2]);
    assertEquals("Arab", scripts[4]);
    assertEquals("Zzzz", scripts[scripts.length-1]);
}

function testScriptGetDefaultLongCodeKits() {
    var si = new ScriptInfo("Kits");
    assertNotNull(si);
    
    assertEquals("Kits", si.getCode());
    assertEquals(288, si.getCodeNumber());
    assertEquals("Khitan small script", si.getName());
    assertEquals("Khitan_small_script", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGetDefaultLongCodePauc() {
    var si = new ScriptInfo("Pauc");
    assertNotNull(si);
    
    assertEquals("Pauc", si.getCode());
    assertEquals(263, si.getCodeNumber());
    assertEquals("Pau Cin Hau", si.getName());
    assertEquals("Pau_Cin_Hau", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGetDefaultLongCodeMend() {
    var si = new ScriptInfo("Mend");
    assertNotNull(si);
    
    assertEquals("Mend", si.getCode());
    assertEquals(438, si.getCodeNumber());
    assertEquals("Mende Kikakui", si.getName());
    assertEquals("Mende_Kikakui", si.getLongCode());
    assertEquals("rtl", si.getScriptDirection());
    assertTrue(si.getNeedsIME());
    assertFalse(si.getCasing());
}