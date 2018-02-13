import expect from 'expect';
import sampleChatReducer from '../reducer';
import { fromJS } from 'immutable';

describe('sampleChatReducer', () => {
  it('returns the initial state', () => {
    expect(sampleChatReducer(undefined, {})).toEqual(fromJS({}));
  });
});
