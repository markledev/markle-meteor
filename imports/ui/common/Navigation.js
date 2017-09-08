import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import $ from 'jquery';
// import { Link, Location } from 'react-router';

class Navigation extends Component {

  componentDidMount() {
    setTimeout(() => {
      $('.hasSubMenu > a').click(function() {
        $(event.currentTarget).parent().toggleClass('active');
        $('.hasSubMenu').not($(event.currentTarget).parent()).removeClass('active');
      })
    }, 1)
  }

  activeRoute(routeName) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    const realRoute = FlowRouter.getRouteName();
    return realRoute == routeName ? 'active' : '';
  }

  secondLevelActive(routeName) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    return "";
  }

  render() {
    return (
      <div>

        <nav className="navbar-default navbar-static-side" role="navigation">
          <div className="">

            <ul className="nav metismenu" id="side-menu">
              <li className="nav-header">
                <div className="dropdown profile-element">
                  <span className="floatLeft"><img alt="image" className="img-circle thumbnailImg" src="/profile.png" /></span>
                  <a data-toggle="dropdown" className="dropdown-toggle floatLeft" href="#" style={{paddingLeft: "13px", marginTop: 0}}>
                    <span className="clear">
                      <span className="block" id="navUserName">
                        User name
                      </span>
                      <span className="text-muted text-xs block" id="navUserCarrot"><i className="openSubmenu fa fa-chevron-down"></i></span>
                    </span>
                  </a>
                  <ul className="dropdown-menu animated fadeInRight m-t-xs" style={{top: "45px", left: "49px"}}>
                    <li><a href="#"><i className="fa fa-user"></i> My Persona</a></li>
                    <li className="divider"></li>
                    <li><a href="#" ><i className="fa fa-sign-out"></i> Logout</a></li>
                  </ul>
                </div>
                <div className="logo-element">
                  OTONOMOS
                </div>
              </li>

              <li className={`hasSubMenu ${this.activeRoute('persona')}`}>
                <a href="#" className="hasChild"><i className="fa fa-pie-chart" style={{width: "12px"}}></i> <span className="nav-label">My Holdings</span><span className="fa arrow"></span></a>
                <ul className="nav nav-second-level">
                  <li><a href="#" className="miniSub">Overview</a></li>
                  <li><a href="#" className="miniSub">Options</a></li>
                </ul>
              </li>

              <li className={`noSubMenu ${this.activeRoute('persona')}`}>
                <a href="#" className="hasChild"><i className="fa fa-gun" style={{width: "12px"}}></i> <span className="nav-label">Moon</span></a>
              </li>
            </ul>
            
           
          </div>
        </nav>

      </div>


    )
  }
}

export default Navigation
