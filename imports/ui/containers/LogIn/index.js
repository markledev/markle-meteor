/*
*
* LogIn
*
*/
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-redux-meteor';
import { toJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import * as selectors from './selectors';
import { TRIGGER_SAGA_ONE } from './constants';
import { GET_ALL_USERS } from '/imports/publications/LogIn/constants';
import styles from './styles';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileInterface: false
    };
  }

  componentWillMount() {
    let isMobileInterface = false;
    let isNotSupported = true;

    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      isMobileInterface = true;
    }

    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1)
      isNotSupported = false;
    if (ua.indexOf('firefox') > -1)
      isNotSupported = false;

    this.setState({
      isNotSupported,
      isMobileInterface
    });

  }

  render() {
    const {
      allUsers,
      dispatchReducerOne,
      var1,
      currentUser
    } = this.props;

    const {
      isMobileInterface,
      isNotSupported
    } = this.state;
    console.log('my current user is: ', currentUser)
    return (
      <div>
        <div style={styles.mainContainer}>
          <div className="middle-box text-center loginscreen animated fadeInDown">
            <div>
              <div>
                <img src="/img/otonomos/logoGrey40.png" />
              </div>
              <p className="tagLine">
                <FormattedMessage {...messages.headerLine}/>
              </p>
              <h3 className="paddingTop10 fontSize18">
                <FormattedMessage {...messages.title}/>
              </h3>
              <p></p>

              {
                currentUser ? (
                  <div>
                    <p>You are already logged in, please go to the dashboard.</p>
                    <p>
                      <a href="{{pathFor route='dashboard'}}" className="btn btn-w-m btn-primary">
                        Proceed to Dashboard
                      </a>
                      <a href="#" className="logout btn btn-w-m btn-danger">
                        Logout
                      </a>
                    </p>
                  </div>
                ) : (
                  <div>
                  {
                    isMobileInterface ? (
                      <div className="alert alert-info">
                        <p>
                          <FormattedMessage {...messages.mobileInterfaceMsg}/>
                          <strong>
                            <FormattedMessage {...messages.recommend}/>
                          </strong>
                        </p>
                      </div>
                    ) : (
                      isNotSupported ? (
                        <div className="alert alert-info">
                          <p>
                            <FormattedMessage {...messages.browserAlertFront}/>
                              <strong>
                                <FormattedMessage {...messages.blockchainNotSupport}/>
                              </strong>
                            <FormattedMessage {...messages.browserAlertBack}/>
                          </p>
                        </div>
                      ) : (
                        <div />
                      )
                    )
                  }
                    <form className="m-t" role="form" id="login">
                      <div className="form-group">
                        <input name="loginEmail" type="email" className="form-control" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input name="loginPassword" type="password" className="form-control" placeholder="Password" />
                      </div>
                      <button type="submit" className="btn btn-primary block full-width m-b" id="loginButton">Login</button>
                      <a href="{{pathFor route='passwordRecovery'}}"><small>Forgot password?</small></a>
                    </form>
                  </div>
                )
              }
              <p className="m-t">
                <small>
                  <FormattedMessage {...messages.footer}/>
                  <a href="http://www.otonomos.com/terms-and-conditions/" target="_blank" title="View Otonomos' Terms and Conditions">
                    <FormattedMessage {...messages.termsConditions}/>
                  </a>
                    and
                  <a href="https://www.otonomos.com/privacy-policy/" target="_blank" title="View Otonomos' Privacy Policy">
                    <FormattedMessage {...messages.privacyPolicy}/>
                  </a>.
                  <FormattedMessage {...messages.betaRelease}/>
                  <br/> &copy; 2017
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //Keep this function intact to ensure app stability
  componentWillUnmount() {
    const { dispatchStopSagas } = this.props;
    dispatchStopSagas();
  }
}

const mapTrackerToProps = (state, props) => {
  if (Meteor.subscribe(GET_ALL_USERS).ready()) {
    return {
      currentUser: Meteor.user(),
      allUsers: Meteor.users.find().fetch(),
      subsReady: true
    }
  }

  return { currentUser: new Object(), allUsers: [], subsReady: false };
}

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
      })
    }
  }
}

const mapStateToProps = createStructuredSelector({
  var1: selectors.selectVar1()
});

export default connect(
  mapTrackerToProps,
  mapStateToProps,
  mapDispatchToProps
) (LogIn);
