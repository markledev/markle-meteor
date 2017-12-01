import expect from 'expect';
import multiLoginReducer from '../reducer';
import { fromJS } from 'immutable';

describe('multiLoginReducer', () => {
  it('returns the initial state', () => {
    expect(multiLoginReducer(undefined, {})).toEqual(fromJS({}));
  });
});
