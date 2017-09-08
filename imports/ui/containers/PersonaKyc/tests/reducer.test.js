import expect from 'expect';
import personaKycReducer from '../reducer';
import { fromJS } from 'immutable';

describe('personaKycReducer', () => {
  it('returns the initial state', () => {
    expect(personaKycReducer(undefined, {})).toEqual(fromJS({}));
  });
});
