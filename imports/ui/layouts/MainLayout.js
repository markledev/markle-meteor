import React from 'react';
import PropTypes from 'prop-types';
// import Progress from '../common/Progress';
import Navigation from '../common/Navigation';
// import ScreenTooSmall from '../common/ScreenTooSmall';
import Footer from '../common/Footer';
import TopHeader from '../common/TopHeader';
import { correctHeight, detectBody } from './Helpers';
// import { Provider } from 'react-redux-meteor';
// import configureStore from './store';
import $ from 'jquery';

class MainLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentWillMount () {
    $('body').removeClass('gray-bg');
  }

  render () {
    return (
      <div id="page-wrapper">
        <div id="page-container" className="header-fixed-top sidebar-visible-lg-full">
          <Navigation/>
          <div id="main-container">
            <TopHeader/>
            <div id="page-content">
              { this.props.main }
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount () {
    // Run correctHeight function on load and resize window event
    $(window).bind('load resize', function () {
      correctHeight();
      detectBody();
    });

    // // Correct height of wrapper after metisMenu animation.
    // $('.metismenu a').click(() => {
    //   setTimeout(() => {
    //     correctHeight();
    //   }, 300)
    // });
  }
}

MainLayout.propTypes = {
  main: PropTypes.element
};

export default MainLayout;
