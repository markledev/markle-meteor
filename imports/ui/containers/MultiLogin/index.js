/*
*
* MultiLogin
*
*/

// npm packages
import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux-meteor';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
// import { toJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// custom imports
import messages from './messages';
import * as selectors from './selectors';
import { TRIGGER_SAGA_ONE } from './constants';
import { GET_ALL_USERS } from '../../../publications/MultiLogin/constants';
import styles from './styles';
import { translationMessages } from './translations';
import * as logger from '../../../utils/client/logger';
import * as globalVar from '../../../utils/client/globalVar';


class MultiLogin extends React.Component {
  constructor (props) {
    super(props);

    // // Log messages to server
    // logger.info('MultiLogin', {gg: 'gg'}, 'hehe');
    // logger.warn('MultiLogin', {gg: 'gg'}, 'hehe');
    // logger.error('MultiLogin', {gg: 'gg'}, 'hehe', {coolstory: 'coolstory'});

    // // Set globalVar
    // globalVar.set('hehehe', 'hihi');
    // globalVar.get('hehehe'); //hihi
    // globalVar.setPersistent('hehehe', 'hihi');
    // globalVar.remove('hehehe');

    this.state = {};
  }


  signIn() {
    globalVar.set('loggedIn', true);
    FlowRouter.go('checkout');
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
    return (
      <IntlProvider locale={ currentLocale } key={ currentLocale } messages={ translationMessages[currentLocale] }>
        {subsReady ? (
          <div>
            <div className="block">
              <div className="form-group">
                <ButtonToolbar>
                  <ToggleButtonGroup type="radio" name="options" defaultValue={1} justified>
                    <ToggleButton value={1} bsStyle="primary">
                      Đăng nhập
                    </ToggleButton>
                    <ToggleButton value={2} bsStyle="primary">
                      Đăng kí
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </div>
              <br/>
              <br/>
              <div className="block-title">
                <button type="button" className="btn btn-block btn-info btn-lg" onClick={evt => this.signIn()}>
                  <i className="fa fa-facebook"></i> Đăng nhập bằng Facebook
                </button>
              </div>
              <div className="form-group text-center">
                Hoặc
              </div>
              <form className="form-horizontal form-bordered">
                <div className="form-group">
                    <label className="col-md-3 control-label" for="example-hf-email">Email</label>
                    <div className="col-md-9">
                        <input type="email" id="example-hf-email" name="example-hf-email" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-3 control-label" for="example-hf-password">Password</label>
                    <div className="col-md-9">
                        <input type="password" id="example-hf-password" name="example-hf-password" className="form-control"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-3 control-label" for="example-hf-email">Tên đầy đủ</label>
                    <div className="col-md-9">
                        <input type="text" id="example-hf-email" name="example-hf-email" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-3 control-label" for="example-hf-password">Số điện thoại</label>
                    <div className="col-md-9">
                        <input type="text" id="example-hf-password" name="example-hf-password" className="form-control"/>
                    </div>
                </div>

                <div className="form-group form-actions">
                  <div className="col-md-12">
                    <center>
                      <button className="btn btn-effect-ripple btn-primary" style={{overflow: 'hidden', position: 'relative'}} onClick={evt => this.signIn()}>Đăng nhập bằng email</button>
                    </center>
                  </div>
                </div>
              </form>
            </div>

            <div style={styles.extraPadding}>
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

MultiLogin.propTypes = {
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
)(MultiLogin);
