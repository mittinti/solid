'use strict';

function getErrorMessage (responseCode) {
	var errorMessage;
	if (responseCode === 404) {
		errorMessage = 'resoource not found';
    } else if (responeCode === 500) {
    	errorMessage = 'Internal server error';
    }
	return errorMessage;
}

module.exports = {
		getErrorMessage : getErrorMessage
};