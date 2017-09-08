import expect from 'expect';
import testContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('testContainerReducer', () => {
  it('returns the initial state', () => {
    expect(testContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
