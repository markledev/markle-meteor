/**
*
* JestComponent
*
*/
// npm packages
import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

// custom imports
import messages from './messages';
import { translationMessages } from './translations';
import styles from './styles';
// import * as logger from '/imports/utils/client/logger';
// import * as globalVar from '/imports/utils/client/globalVar';

class JestComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    const { currentLocale } = this.props;
    return (
      <IntlProvider locale={ currentLocale } key={ currentLocale } messages={ translationMessages[currentLocale] } >        
        <div style={styles.mainContainer}>
          <FormattedMessage {...messages.header} />
        </div>
      </IntlProvider>
    );
  }
}

JestComponent.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  currentLocale: PropTypes.string.isRequired,
  // requiredArray: PropTypes.array.isRequired
};

export default JestComponent;
