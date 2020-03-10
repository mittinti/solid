'use strict';


// Need to create a gift box

function Box (name) {
	this.name = name;
}

Box.prototype.setHeight = function (height) {
	this.height = height;
	return this;
};

Box.prototype.setBreadth = function (breadth) {
	this.breadth = breadth;
	return this;
};

Box.prototype.setColor = function (color) {
	this.color = color;
	return this;
};

var box = new Box('Murthy').setHeight(11).setBreadth(22).setColor('Yellow');
console.log(JSON.stringify(box));


// ########################### Using Classes ###########################

class Box {
	constructor(name) {
		this.name = name;
		return this;
	}
	setHeight (height) {
		this.height = height;
		return this;
	}
	setBreadth (breadth) {
		this.breadth = breadth;
		return this;
	}
	setColor (color) {
		this.color = color;
		return this;
	}
}


var box = new Box('MCVR').setHeight(20).setBreadth(30).setColor('Pink');
console.log(JSON.stringify(box));