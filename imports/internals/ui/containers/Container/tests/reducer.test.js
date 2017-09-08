import expect from 'expect';
import containerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('containerReducer', () => {
  it('returns the initial state', () => {
    expect(containerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
