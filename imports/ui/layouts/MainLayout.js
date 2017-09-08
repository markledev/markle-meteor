import React from 'react';
import Progress from '../common/Progress';
import Navigation from '../common/Navigation';
import ScreenTooSmall from '../common/ScreenTooSmall';
import Footer from '../common/Footer';
import TopHeader from '../common/TopHeader';
import { correctHeight, detectBody } from './Helpers';
import { Provider } from 'react-redux-meteor';
import configureStore from './store';
class MainLayout extends React.Component {

  render() {
    return (
      <div id="wrapper">
        <Navigation/>

        <div id="page-wrapper" className="gray-bg">

          <TopHeader />

          { this.props.main }

          <Footer />

        </div>
      </div>
    )
  }

  componentDidMount() {
    // Run correctHeight function on load and resize window event
    $(window).bind("load resize", function() {
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

export default MainLayout;
