/*
*
* SampleContainer
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
import { GET_ALL_USERS } from '/imports/publications/SampleContainer/constants';
import styles from './styles';
import TestComponent from '/imports/ui/components/TestComponent';
import * as logger from '/imports/utils/client/logger';
import * as globalVar from '/imports/utils/client/globalVar';

class SampleContainer extends React.Component {
  constructor(props) {
    super(props);
    //log messages to server
    logger.info('SampleContainer', {gg: 'gg'}, 'hehe');
    logger.warn('SampleContainer', {gg: 'gg'}, 'hehe');
    logger.error('SampleContainer', {gg: 'gg'}, 'hehe');

    //set globalVar
    globalVar.set('hehehe', 'hihi');
    // globalVar.get('hehehe'); //hihi
    // globalVar.setPersistent('hehehe', 'hihi');
    // globalVar.remove('hehehe');

    this.state = {}
  }

  render() {
    const { allUsers, dispatchReducerOne, var1, currentUser } = this.props;

    return (
      <div>
        <div className="ibox">
          <div className="ibox-content">
            <div style={styles.mainContainer}>
              <FormattedMessage {...messages.fieldOne}/>
              { this.props.currentUser._id } length: { allUsers.length }
              <button className="btn btn-success" onClick={dispatchReducerOne}>Methods in reducer</button>
              Test redux state updated: {var1}
              <TestComponent/>
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

//publications here
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
const mapTrackerToProps = (state, props) => {
  if (Meteor.subscribe(GET_ALL_USERS).ready()) {
    return {
      currentUser: {_id: 'lll'},
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
) (SampleContainer);
