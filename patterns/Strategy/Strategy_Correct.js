'use strict';
	
function Payment (func) {
	this.authorize = func;
}


var CreditCard = new Payment(function (){
	console.log('This is Credit Card...');
});

var PayPal = new Payment(function (){
	console.log('This is PayPal');
	console.log('Heavy Customizations here');
});

var ApplePay = new Payment(function (){
	console.log('This is ApplePay');
	
});


CreditCard.authorize();
PayPal.authorize();
ApplePay.authorize();
