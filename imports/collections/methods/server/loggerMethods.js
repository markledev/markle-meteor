import { logInfo, logDebug, logWarn, logError } from '/imports/utils/server/logger';

Meteor.methods({
	'loggerMethods/logInfo'(component, message) {
		logInfo(component, message);
	},

	'loggerMethods/logWarn'(component, message) {
		logWarn(component, message);
	},

	'loggerMethods/logError'(component, message) {
		logError(component, message);
	}
})