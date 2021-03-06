/*
 * runner.js - ilib CLI test framework to run JsUnit tests under Qt/QML
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

/**
 * Create a new test runner instance. This class runs the actual tests and
 * collects the results, and summarizes them when it is done. 
 * 
 * @class
 * @constructor
 * @param {string|ilib.String=} string initialize this instance with this string 
 */
function TestRunner(root) {
	this.results = {
		pass: 0,
		fail: 0,
		runs: 0,
		failures: [],
		timings: {}
	};
	this.subSuites = [];
	this.root = root || "../..";
};

TestRunner.prototype = {
	_isEmpty: function (obj) {
		var prop = undefined;
		
		if (!obj) {
			return true;
		}
		
		for (prop in obj) {
			if (prop && typeof(obj[prop]) !== 'undefined') {
				return false;
			}
		}
		return true;
	},
	
	runTests: function() {
		var start = new Date();
		
		this.subSuites.forEach(function (suite) {
			//console.log("TestRunner: running suite " + suite.path);
			suite.runTests(this.results, this.root);
		}.bind(this));
		
		var end = new Date();
		this.duration = (end.getTime() - start.getTime()) / 1000;
		
		this.report();
	},
	
	addSuite: function (suite) {
		this.subSuites.push(suite);
	},
	
	mean: function(measurements) {
		if (measurements.length < 1) return 0;
		var total = 0;
		for (var i = 0; i < measurements.length; i++) {
			total += measurements[i];
		}
		return total/measurements.length;
	},
	
	median: function(measurements) {
		return measurements.length > 0 ? measurements[Math.floor(measurements.length/2)] : 0;
	},
	
	max: function(measurements) {
		return measurements.length > 0 ? measurements[measurements.length-1] : 0;
	},
	
	min: function(measurements) {
		return measurements.length > 0 ? measurements[0] : 0;
	},
	
	standardDeviation: function(measurements) {
		if (measurements.length < 1) return 0;
		var mean = this.mean(measurements);
		var variance = 0;
		for (var i = 0; i < measurements.length; i++) {
			var diff = measurements[i] - mean;
			variance += diff * diff;
		}
		return Math.sqrt(variance/measurements.length);
	},
	
	histogram: function(measurements) {
		if (measurements.length < 1) return [];
		var max = measurements[measurements.length-1];
		var bucketSize = max/10;
		var buckets = [];
		var start, j = 0;
		var bucketBottom, bucketTop, bucket;
		
		function formatnum(num) {
			return num.toPrecision((num < 1 && num != 0) ? 4 : 5);
		}
		for (var i = 0; i < 9; i++) {
			bucketBottom = i * bucketSize;
			bucketTop = ((i+1) * bucketSize);
			bucket = { range: "[" + formatnum(bucketBottom) + ", " + formatnum(bucketTop) + ")"};
			start = j;
			while (j < measurements.length && measurements[j] < bucketTop) j++;
			bucket.count = j - start;
			buckets.push(bucket);
		}
		bucketBottom = 9 * bucketSize;
		bucketTop = 10 * bucketSize;
		bucket = { 
			range: "[" + formatnum(bucketBottom) + ", " + formatnum(bucketTop) + "]",
			count: measurements.length - j 
		};
		buckets.push(bucket);
		return buckets;
	},
	
	report: function() {
		if (!this._isEmpty(this.results.timings)) {
			var plusses = "+++++++++++++++++++++++++++++++++++++++";
			
			// bench mark tests were included
			// console.log("timings are:\n" + JSON.stringify(this.results.timings));
			for (var category in this.results.timings) {
				var m = this.results.timings[category];
				m.sort(function(left,right) {
					return left-right;
				});
				console.log("--------------------------------------------------------------------");
				console.log("Category " + category);
				console.log("Iter. : " + m.length);
				console.log("Mean  : " + this.mean(m));
				console.log("Median: " + this.median(m));
				console.log("Max   : " + this.max(m));
				console.log("Min   : " + this.min(m));
				console.log("Stddev: " + this.standardDeviation(m));
				console.log("Histogram:");
				var hist = this.histogram(m);
				for (var i = 0; i < hist.length; i++) {
					console.log(hist[i].range + ": " + hist[i].count + " " + plusses.substring(0,Math.floor(40*hist[i].count/m.length+0.5)));
				}
			}
		}
		console.log("Summary - " + this.results.runs + " tests run, " + this.results.pass + " pass, " + this.results.fail + " fail, " + this.duration + " seconds.");		
	}
};

if (!module) {
	var module = {
		exports: {}
	};
}

module.exports = TestRunner;
