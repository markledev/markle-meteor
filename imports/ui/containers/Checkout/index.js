/*
*
* Checkout
*
*/

// npm packages
import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux-meteor';
import swal from 'sweetalert';
// import { toJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// custom imports
import messages from './messages';
import * as selectors from './selectors';
import { TRIGGER_SAGA_ONE } from './constants';
import { GET_ALL_USERS } from '../../../publications/Checkout/constants';
import styles from './styles';
import { translationMessages } from './translations';
import * as logger from '../../../utils/client/logger';
import * as globalVar from '../../../utils/client/globalVar';

class Checkout extends React.Component {
  constructor (props) {
    super(props);

    // // Log messages to server
    // logger.info('Checkout', {gg: 'gg'}, 'hehe');
    // logger.warn('Checkout', {gg: 'gg'}, 'hehe');
    // logger.error('Checkout', {gg: 'gg'}, 'hehe', {coolstory: 'coolstory'});

    // // Set globalVar
    // globalVar.set('hehehe', 'hihi');
    // globalVar.get('hehehe'); //hihi
    // globalVar.setPersistent('hehehe', 'hihi');
    // globalVar.remove('hehehe');

    this.state = {};
    this.confirm = this.confirm.bind(this);
  }

  confirm () {
    if (globalVar.get('loggedIn')) {
      swal({
        title: "Bạn có chắc chắn thuê hàng?",
        text: "Khi bấm chắc chắn, bạn đã đồng ý với điều khoản của công ty",
        icon: "warning",
        buttons: ["Quay lại", "Chắc chắn"],
      })
      .then((willRent) => {
        if (willRent) {
          swal("Kết thúc trải nghiệm", "Cảm ơn bạn nhiều vì đã thuê đồ qua Caykhe. Đây chưa là sản phẩm hoàn thiện. Caykhe team sẽ liên lạc lại với bạn khi công ty hoạt động chính thức.",{
            icon: "success",
          });
        }
      });
    } else {
      FlowRouter.go('multiLogin');
    }
  }

  render () {
    const {
      currentLocale,
      subsReady
    } = this.props;
    return (
      <IntlProvider locale={ currentLocale } key={ currentLocale } messages={ translationMessages[currentLocale] }>
        {subsReady ? (
          <div>
            <div className="widget">
              <div className="widget-content text-right clearfix">
                <img src="img/caykhe/Honda-Lead.jpg" alt="avatar" className="img-thumbnail pull-left" style={styles.thumbnail}/>

                <div><span>SH vàng xịn</span></div>
                <div><span className="text-muted">5 x 50,000 VND</span></div>
                <div><span className="text-muted">20/11/17 - 25/11/17</span></div>
                <div><span>250,000 VND</span></div>
              </div>
            </div>
            <div style={styles.emptyPadding}>
            </div>
            <div className="widget">
              <div className="widget-content widget-content-full">
                <table className="table table-striped table-borderless remove-margin">
                  <tbody>
                    <tr>
                      <td><a href="javascript:void(0)" className="text-black">Mã giảm giá</a></td>
                      <td className="text-center" style={{width: 200}}><span className="text-muted">caykhe</span></td>
                    </tr>
                    <tr>
                      <td><a href="javascript:void(0)" className="text-black">Tiền vận chuyển</a></td>
                      <td className="text-center" style={{width: 200}}><span className="text-muted">30,000 VND</span></td>
                    </tr>
                    <tr>
                      <td><a href="javascript:void(0)" className="text-black">Phương thức thanh toán</a></td>
                      <td className="text-center" style={{width: 200}}><span className="text-muted">Tiền mặt</span></td>
                    </tr>
                    <tr>
                      <td><a href="javascript:void(0)" className="text-black">Deposit</a></td>
                      <td className="text-center" style={{width: 200}}><span className="text-muted">500,000 VND</span></td>
                    </tr>
                    <tr>
                      <td><a href="javascript:void(0)" className="text-black">Tổng cộng</a></td>
                      <td className="text-center" style={{width: 200}}><h3><strong className="text-success">780,000 VND</strong></h3></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <button type="button" className="btn btn-block btn-primary btn-lg" onClick={evt => this.confirm()}>Xác nhận</button>
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

Checkout.propTypes = {
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
)(Checkout);
