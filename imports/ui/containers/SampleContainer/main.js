import React from 'react';
import { translationMessages } from './translations';
import SampleContainer from './index';
import { Provider } from 'react-redux-meteor';
import configureStore from '/imports/ui/layouts/store';
import reducer from './reducer';
import sagas from './sagas';
// import * as logger from '/imports/utils/client/logger';
import * as globalVar from '/imports/utils/client/globalVar';

export default class SampleContainerMain extends React.Component {
	render () {
		return (
			<Provider store = { configureStore('SampleContainer', reducer, sagas) }>
				<SampleContainer />
			</Provider>
			)
	}
}