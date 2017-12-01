/**
*
* ProductDescription
*
*/
// npm packages
import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

// custom imports
import messages from './messages';
import { translationMessages } from './translations';
import styles from './styles';
// import * as logger from '../../../utils/client/logger';
// import * as globalVar from '../../../utils/client/globalVar';

class ProductDescription extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    const { currentLocale } = this.props;
    return (
      <IntlProvider locale={ currentLocale } key={ currentLocale } messages={ translationMessages[currentLocale] } >  
        <div>
          <a href="javascript:void(0)" className="widget">
            <div className="widget-content clearfix">
              <img src="img/people/trung.jpg" alt="avatar" className="img-circle img-thumbnail img-thumbnail-avatar pull-right"/>
              <h2 className="widget-heading h3"><strong>Trần Minh Trung</strong></h2>
              <span>
                <StarRatings
                  rating={4}
                  isSelectable={false}
                  isAggregateRating={false}
                  numOfStars={ 5 }
                  starWidthAndHeight={'15px'}
                  starSpacing={'0px'}
                  starRatedColor={'#F4D03F'}
                />
              </span>
            </div>
          </a>      
          <div className="widget">
            <div className="widget-image widget-image-sm">
              <img src="img/caykhe/Honda-Lead.jpg" alt="image" style={{maxWidth: '100%'}}/>
              <div className="widget-image-content">
                <h2 className="widget-heading text-light"><strong>SH vàng 2017</strong></h2>
                <h3 className="widget-heading text-light-op h4">SH xịn dễ dàng vi vu Sài Gòn tràn đầy tự tin</h3>
              </div>
              <i className="fa fa-handshake-o"></i>
            </div>
            <div className="widget-content widget-content-full">
              <table className="table table-striped table-borderless remove-margin">
                <tbody>
                  <tr>
                      <td><a href="javascript:void(0)" className="text-black">Giá một ngày</a></td>
                      <td className="text-center" style={{width: 200}}><span className="text-muted">50,000 VND</span></td>
                  </tr>
                  <tr>
                      <td><a href="javascript:void(0)" className="text-black">Thời gian thuê</a></td>
                      <td className="text-center" style={{width: 200}}><span className="text-muted">20/11/17 - 25/11/17</span></td>
                  </tr>
                  <tr>
                      <td><a href="javascript:void(0)" className="text-black">Vận chuyển</a></td>
                      <td className="text-center" style={{width: 200}}><span className="text-muted">Có</span></td>
                  </tr>
                  <tr>
                      <td><a href="javascript:void(0)" className="text-black">Deposit</a></td>
                      <td className="text-center" style={{width: 200}}><span className="text-muted">500,000 VND</span></td>
                  </tr>
                  <tr>
                      <td><a href="javascript:void(0)" className="text-black">Chứng minh thư</a></td>
                      <td className="text-center" style={{width: 200}}><span className="text-muted text-danger">Cần thiết</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button type="button" className="btn btn-block btn-primary btn-lg" onClick={evt => FlowRouter.go('checkout')}>Thuê ngay</button>
        </div>
      </IntlProvider>
    );
  }
}

ProductDescription.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  currentLocale: PropTypes.string.isRequired,
  // requiredArray: PropTypes.array.isRequired
};

export default ProductDescription;
