'use strict';

// Decide the parts of the factory which should be produced

function Developer (name) {
	this.name = name;
	this.type = "Developer";
}

function Tester (name) {
	this.name = name;
	this.type = "Tester";
}

// Once parts are decided, start the factory

function EmployeeFactory (name, type) {
	switch (type) {
		case 1 : 
			return new Developer(name);
		case 2 :
			return new Tester(name);
	}
}



function say () {
	console.log( `I am ${this.name} and I am a ${this.type}`);
}

const emps = [];

emps.push(new EmployeeFactory('Murthy', 1));
emps.push(new EmployeeFactory('Gaurav', 2));
emps.push(new EmployeeFactory('Akhil', 1));


emps.forEach(function (emp) {
	say.call(emp);
});