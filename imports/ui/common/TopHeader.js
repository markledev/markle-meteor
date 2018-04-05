import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
// import { Dropdown } from 'react-bootstrap';
import { smoothlyMenu } from '../layouts/Helpers';
import LanguageToggle from '/imports/ui/components/LanguageToggle';
import App from '/imports/ui/common/App';

class TopHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  toggleNavigation (e) {
    e.preventDefault();
    $('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }

  redirectToLogout () {
    FlowRouter.go('logout');
  }

  toggleSidebar() {
    App.sidebar('toggle-sidebar');
  }

  render () {
    return (
        <header className="navbar navbar-inverse navbar-fixed-top">
            <ul className="nav navbar-nav-custom">
                <li>
                    <a href="javascript:void(0)" onClick={() => this.toggleSidebar()}>
                        <i className="fa fa-ellipsis-v fa-fw animation-fadeInRight" id="sidebar-toggle-mini"></i>
                        <i className="fa fa-bars fa-fw animation-fadeInRight" id="sidebar-toggle-full"></i>
                    </a>
                </li>

                <li className="animation-fadeInQuick text-center">
                    <a href=""><strong>ToDanPho</strong></a>
                </li>
            </ul>

            {/*
                <ul className="nav navbar-nav-custom pull-right">
                    <li>
                        <a href="javascript:void(0)" onclick="App.sidebar('toggle-sidebar-alt');this.blur();">
                            <i className="gi gi-settings"></i>
                        </a>
                    </li>


                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="img/placeholders/avatars/avatar.jpg" alt="avatar"/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li className="dropdown-header">
                                <strong>ADMINISTRATOR</strong>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i className="fa fa-inbox fa-fw pull-right"></i>
                                    Link #1
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i className="fa fa-pencil-square fa-fw pull-right"></i>
                                    Link #2
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i className="fa fa-picture-o fa-fw pull-right"></i>
                                    Link #3
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i className="gi gi-settings fa-fw pull-right"></i>
                                    Link #1
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i className="gi gi-lock fa-fw pull-right"></i>
                                    Link #2
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            */}
            
        </header>
    );
  }
}

export default TopHeader;
