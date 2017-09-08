import React from 'react';
import { IntlProvider } from 'react-intl';
import { translationMessages } from './translations';
import Container from './index';
import { Provider } from 'react-redux-meteor';
import configureStore from '/imports/ui/layouts/store';
import reducer from './reducer';
import sagas from './sagas';
export default class ContainerMain extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const currentLocale = Session.get('currentLocale') || 'en';
		return (
			<Provider store = { configureStore('Container', reducer, sagas) }>
				<IntlProvider locale={ currentLocale } key={ currentLocale } messages={ translationMessages[currentLocale] }>
					<Container />
				</IntlProvider>
			</Provider>
			)
	}
}