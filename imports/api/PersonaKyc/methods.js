import { METHOD_NAME_ONE } from './constants';

let allMethods = new Object();

allMethods[METHOD_NAME_ONE] = function () {
	// Write your magic here, make sure it does not break order page
};

Meteor.methods(allMethods);
