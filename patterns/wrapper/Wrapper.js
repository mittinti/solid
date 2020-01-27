'use strict';

// Initially points are based on total
function getPoints (orderTotal) {
	return Math.round(orderTotal);
}

// when holidays are turned on, we need double points
var isHolidayTurnedOn = false;

if (isHolidayTurnedOn) { // using wrapper we dont disturb any existing logic of points
	let muliplier = 2;
	const PointsWrapper = function (fn) {
		return function (total) {
			return (fn(total)) * muliplier;
		}
	}
	getPoints = PointsWrapper(getPoints);
}


console.log(getPoints(22.99));