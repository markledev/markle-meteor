import jquery from 'jquery';
// import metismenu from 'metismenu';
import { Dropdown } from 'react-bootstrap';

import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import styled from 'styled-components';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import NavLink from './NavLink';

class Navigation extends React.Component {

  // Create class has getInitialState function, extend component has constructor(superprops)
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {

    this.setState({ showModal: true });
  }

  handleClick(item) {

  }

  render() {

  }
}

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {

  };
}

// Which props do we want to inject, given the global state?


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
