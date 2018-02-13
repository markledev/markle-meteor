/*
*
* SampleChat
*
*/

// npm packages
import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux-meteor';
// import { toJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// custom imports
import messages from './messages';
import * as selectors from './selectors';
import { TRIGGER_SAGA_ONE } from './constants';
import { GET_ALL_USERS } from '../../../publications/SampleChat/constants';
import styles from './styles';
import { translationMessages } from './translations';
import * as logger from '../../../utils/client/logger';
import * as globalVar from '../../../utils/client/globalVar';
import { ChatFeed, Message } from 'react-chat-ui'; 

class SampleChat extends React.Component {
  constructor (props) {
    super(props);

    // Log messages to server
    // logger.info('SampleChat', {gg: 'gg'}, 'hehe');
    // logger.warn('SampleChat', {gg: 'gg'}, 'hehe');
    // logger.error('SampleChat', {gg: 'gg'}, 'hehe', {coolstory: 'coolstory'});

    // Set globalVar
    // globalVar.set('hehehe', 'hihi');
    // globalVar.get('hehehe'); //hihi
    // globalVar.setPersistent('hehehe', 'hihi');
    // globalVar.remove('hehehe');

    this.state = {
      messages: [
        new Message({
          id: 123456,
          message: 'GG Bro'
        }),
        new Message({
          id: 0,
          message: 'Well'
        })
      ]
    };
  }

  render () {
    const {
      allUsers,
      dispatchReducerOne,
      currentUser,
      var1,
      currentLocale,
      subsReady
    } = this.props;

    const {
      messages
    } = this.state;
    return (
      <IntlProvider locale={ currentLocale } key={ currentLocale } messages={ translationMessages[currentLocale] }>
        {subsReady ? (
          <div>
            <div className="ibox">
              <div className="ibox-content">
                <ChatFeed
                  messages={messages}
                  isTyping={false}
                  hasInputField={false}
                  showSenderName
                  bubblesCentered={false}
                  bubbleStyles={
                    {
                      text: {
                        fontSize: 20
                      },
                      chatbubble: {
                        borderRadius: 70,
                        padding: 40
                      }
                    }
                  }
                />

                <div className="input-group">
                  <textarea className="form-control custom-control" rows="3" style={{resize:'none'}}></textarea>     
                  <span className="input-group-addon btn btn-primary">Send</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <center style={styles.loading}>
              <ReactLoading
                type="spin"
                color="#2f4050"
                height="100"
                width="100"
              />
            </center>
          </div>
        )}
      </IntlProvider>
      );
  }

  // Keep this function intact to ensure app stability
  componentWillUnmount () {
    const { dispatchStopSagas } = this.props;
    dispatchStopSagas();
  }
}

// Publications here
/*
  In case of multiple publications..
  if (
  Meteor.subscribe('pub1').ready() &&
  Meteor.subscribe('pub2').ready() &&
  Meteor.subscribe('pub3').ready() &&
  ) {
    return {
      dataFromPub1: pub1Collection.find().fetch(),
      dataFromPub2: pub2Collection.find().fetch(),
      dataFromPub3: pub3Collection.find().fetch()
    }
  }

  return {
    dataFromPub1: [],
    dataFromPub2: null,
    dataFromPub3: [],
  }
*/

SampleChat.propTypes = {
  currentUser: PropTypes.object,
  allUsers: PropTypes.array,
  subsReady: PropTypes.bool,
  dispatchReducerOne: PropTypes.func,
  currentLocale: PropTypes.string.isRequired,
  dispatchStopSagas: PropTypes.func.isRequired,
  var1: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ])
};

const mapTrackerToProps = (state, props) => {
  const currentLocale = globalVar.get('currentLocale') || 'en';
  const defaultProps = {
    currentUser: {},
    allUsers: [],
    currentLocale,
    subsReady: false
  };

  if (Meteor.subscribe(GET_ALL_USERS).ready()) {
    return Object.assign(defaultProps, {
      currentUser: {_id: 'lll'},
      allUsers: Meteor.users.find().fetch(),
      subsReady: true
    });
  }

  return defaultProps;
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchReducerOne: () => {
      dispatch({
        type: TRIGGER_SAGA_ONE
      });
    },

    dispatchStopSagas: () => {
      dispatch({
        type: 'CANCEL_SAGAS'
      });
    }
  };
};

const mapStateToProps = createStructuredSelector({
  var1: selectors.selectVar1()
});

export default connect(
  mapTrackerToProps,
  mapStateToProps,
  mapDispatchToProps
)(SampleChat);
