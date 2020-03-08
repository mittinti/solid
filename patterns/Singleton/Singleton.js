'use strict';

function ProcessMgr () {
	function Singleton () { // this is not exposed out to public
		// stuff here
	}
	var instance;
	return {
		getInstance : function () {
			if (instance === undefined) {
				instance = new Singleton();
			}
			return instance;
		}
	}
}

var process = new ProcessMgr();
var a = process.getInstance();
var b = process.getInstance();
console.log(a === b);