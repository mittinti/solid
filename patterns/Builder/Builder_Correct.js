'use strict';


// Need to create a gift box

function Box (name, length, breadth, color) {
	this.name = name;
	this.length = length;
	this.breadth = breadth;
	this.color = color;
}

var box = new Box('Murthy', 10, 20, 'Blue');
console.log(JSON.stringify(box));