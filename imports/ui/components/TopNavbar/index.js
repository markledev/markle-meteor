/**
*
* TopNavbar
*
*/
// npm packages
import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

// custom imports
import messages from './messages';
import { translationMessages } from './translations';
import styles from './styles';
// import * as logger from '../../../utils/client/logger';
// import * as globalVar from '../../../utils/client/globalVar';

class TopNavbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    const { currentLocale } = this.props;
    return (
      <IntlProvider locale={ currentLocale } key={ currentLocale } messages={ translationMessages[currentLocale] } >        
        <header className="navbar navbar-inverse navbar-fixed-top">
            <ul className="nav navbar-nav-custom">
                <li>
                    <a href="javascript:void(0)" onclick="App.sidebar('toggle-sidebar');this.blur();">
                        <i className="fa fa-ellipsis-v fa-fw animation-fadeInRight" id="sidebar-toggle-mini"></i>
                        <i className="fa fa-bars fa-fw animation-fadeInRight" id="sidebar-toggle-full"></i>
                    </a>
                </li>

                <li className="animation-fadeInQuick">
                    <a href=""><strong>ToDanPho</strong></a>
                </li>
            </ul>


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
        </header>
      </IntlProvider>
    );
  }
}

TopNavbar.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  currentLocale: PropTypes.string.isRequired,
  // requiredArray: PropTypes.array.isRequired
};

export default TopNavbar;
