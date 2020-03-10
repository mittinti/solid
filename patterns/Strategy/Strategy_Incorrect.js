// This is best way to eliminate the ugly growing switch case.
// I hate switches, I never use switches in my home - every device just direct


/** DESIGN Problem **/

function Authorize(type) {
	switch (type) {
	case 'CREDIT_CARD' :
		console.log('It is card...credit card');
		break;
	case 'Paypal' :
		console.log('It is PAL... PAYPAL');
		break;
	}
 }

new Authorize('CREDIT_CARD');
new Authorize('Paypal');