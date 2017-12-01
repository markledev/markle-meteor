import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import $ from 'jquery';
// import { Link, Location } from 'react-router';

class Navigation extends Component {
  componentDidMount () {
    setTimeout(() => {
      $('.hasSubMenu > a').click(function () {
        $(event.currentTarget).parent().toggleClass('active');
        $('.hasSubMenu').not($(event.currentTarget).parent()).removeClass('active');
      });
    }, 1);
  }

  activeRoute (routeName) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    const realRoute = FlowRouter.getRouteName();
    return realRoute === routeName ? 'active' : '';
  }

  secondLevelActive (routeName) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    return '';
  }

  logOut (evt) {
    evt.preventDefault();
    FlowRouter.go('logout');
  }

  render () {
    return (
      <div id="sidebar">
          <div id="sidebar-brand" className="themed-background">
              <a href="index.html" className="sidebar-title">
                  <i className="fa fa-cube"></i> <span className="sidebar-nav-mini-hide">App<strong>UI</strong></span>
              </a>
          </div>

          <div id="sidebar-scroll">
              <div className="sidebar-content">
                  <ul className="sidebar-nav">
                      <li>
                          <a href="index.html" className="active"><i className="fa fa-compass sidebar-nav-icon"></i><span className="sidebar-nav-mini-hide">Dashboard</span></a>
                      </li>
                      <li className="sidebar-separator">
                          <i className="fa fa-ellipsis-h"></i>
                      </li>
                      <li>
                          <a href="#" className="sidebar-nav-menu show"><i className="fa fa-chevron-left sidebar-nav-indicator sidebar-nav-mini-show"></i><i className="fa fa-cog sidebar-nav-icon"></i><span className="sidebar-nav-mini-hide">Dropdown</span></a>
                          <ul>
                              <li>
                                  <a href="javascript:void(0)">Link #1</a>
                              </li>
                              <li>
                                  <a href="javascript:void(0)">Link #2</a>
                              </li>
                          </ul>
                      </li>
                  </ul>

                  <div className="sidebar-section sidebar-nav-mini-hide">
                      <div className="sidebar-separator push">
                          <i className="fa fa-ellipsis-h"></i>
                      </div>
                      <ul className="sidebar-themes clearfix">
                          <li>
                              <a href="javascript:void(0)" className="themed-background-default" data-toggle="tooltip" title="Default" data-theme="default" data-theme-navbar="navbar-inverse" data-theme-sidebar="">
                                  <span className="section-side themed-background-dark-default"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-classy" data-toggle="tooltip" title="Classy" data-theme="css/themes/classy.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="">
                                  <span className="section-side themed-background-dark-classy"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-social" data-toggle="tooltip" title="Social" data-theme="css/themes/social.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="">
                                  <span className="section-side themed-background-dark-social"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-flat" data-toggle="tooltip" title="Flat" data-theme="css/themes/flat.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="">
                                  <span className="section-side themed-background-dark-flat"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-amethyst" data-toggle="tooltip" title="Amethyst" data-theme="css/themes/amethyst.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="">
                                  <span className="section-side themed-background-dark-amethyst"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-creme" data-toggle="tooltip" title="Creme" data-theme="css/themes/creme.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="">
                                  <span className="section-side themed-background-dark-creme"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-passion" data-toggle="tooltip" title="Passion" data-theme="css/themes/passion.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="">
                                  <span className="section-side themed-background-dark-passion"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-default" data-toggle="tooltip" title="Default + Light Sidebar" data-theme="default" data-theme-navbar="navbar-inverse" data-theme-sidebar="sidebar-light">
                                  <span className="section-side"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-classy" data-toggle="tooltip" title="Classy + Light Sidebar" data-theme="css/themes/classy.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="sidebar-light">
                                  <span className="section-side"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-social" data-toggle="tooltip" title="Social + Light Sidebar" data-theme="css/themes/social.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="sidebar-light">
                                  <span className="section-side"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-flat" data-toggle="tooltip" title="Flat + Light Sidebar" data-theme="css/themes/flat.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="sidebar-light">
                                  <span className="section-side"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-amethyst" data-toggle="tooltip" title="Amethyst + Light Sidebar" data-theme="css/themes/amethyst.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="sidebar-light">
                                  <span className="section-side"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-creme" data-toggle="tooltip" title="Creme + Light Sidebar" data-theme="css/themes/creme.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="sidebar-light">
                                  <span className="section-side"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-passion" data-toggle="tooltip" title="Passion + Light Sidebar" data-theme="css/themes/passion.css" data-theme-navbar="navbar-inverse" data-theme-sidebar="sidebar-light">
                                  <span className="section-side"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-default" data-toggle="tooltip" title="Default + Light Header" data-theme="default" data-theme-navbar="navbar-default" data-theme-sidebar="">
                                  <span className="section-header"></span>
                                  <span className="section-side themed-background-dark-default"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-classy" data-toggle="tooltip" title="Classy + Light Header" data-theme="css/themes/classy.css" data-theme-navbar="navbar-default" data-theme-sidebar="">
                                  <span className="section-header"></span>
                                  <span className="section-side themed-background-dark-classy"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-social" data-toggle="tooltip" title="Social + Light Header" data-theme="css/themes/social.css" data-theme-navbar="navbar-default" data-theme-sidebar="">
                                  <span className="section-header"></span>
                                  <span className="section-side themed-background-dark-social"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-flat" data-toggle="tooltip" title="Flat + Light Header" data-theme="css/themes/flat.css" data-theme-navbar="navbar-default" data-theme-sidebar="">
                                  <span className="section-header"></span>
                                  <span className="section-side themed-background-dark-flat"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-amethyst" data-toggle="tooltip" title="Amethyst + Light Header" data-theme="css/themes/amethyst.css" data-theme-navbar="navbar-default" data-theme-sidebar="">
                                  <span className="section-header"></span>
                                  <span className="section-side themed-background-dark-amethyst"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-creme" data-toggle="tooltip" title="Creme + Light Header" data-theme="css/themes/creme.css" data-theme-navbar="navbar-default" data-theme-sidebar="">
                                  <span className="section-header"></span>
                                  <span className="section-side themed-background-dark-creme"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)" className="themed-background-passion" data-toggle="tooltip" title="Passion + Light Header" data-theme="css/themes/passion.css" data-theme-navbar="navbar-default" data-theme-sidebar="">
                                  <span className="section-header"></span>
                                  <span className="section-side themed-background-dark-passion"></span>
                                  <span className="section-content"></span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          <div id="sidebar-extra-info" className="sidebar-content sidebar-nav-mini-hide">
              <div className="push-bit">
                  <span className="pull-right">
                      <a href="javascript:void(0)" className="text-muted"><i className="fa fa-plus"></i></a>
                  </span>
                  <small><strong>78 GB</strong> / 100 GB</small>
              </div>
              <div className="progress progress-mini push-bit">
                  <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="text-center">
                  <small>Crafted with <i className="fa fa-heart text-danger"></i> by <a href="http://goo.gl/vNS3I" target="_blank">pixelcave</a></small><br/>
                  <small><span id="year-copy"></span> &copy; <a href="http://goo.gl/RcsdAh" target="_blank">AppUI</a></small>
              </div>
          </div>
      </div>

    );
  }
}

export default Navigation;
