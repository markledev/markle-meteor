import expect from 'expect';
import introPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('introPageReducer', () => {
  it('returns the initial state', () => {
    expect(introPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
