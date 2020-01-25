'use strict';

// BASIC Constructor

function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;
	this.toString = function() {
		return this.model + " has done " + this.miles + " miles";
	};
}

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());


/////////////////////////////////////////////////////////////
///Constructor with prototype

function BasicCar(name, mileage, year) {
	this.name = name;
	this.mileage = mileage;
	this.year = year;
}

// to open car lock #constructor with prototype

BasicCar.prototype.getLockMessage = function () {
	return `${this.year}-${this.name}|${this.mileage}`;
}

var BMW = new BasicCar ('BMW', 10, 2020);
var Audi = new BasicCar ('Audi', 15, 2019);

console.log(BMW.getLockMessage());
console.log(Audi.getLockMessage());



