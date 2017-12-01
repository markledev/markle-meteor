import expect from 'expect';
import checkoutReducer from '../reducer';
import { fromJS } from 'immutable';

describe('checkoutReducer', () => {
  it('returns the initial state', () => {
    expect(checkoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
