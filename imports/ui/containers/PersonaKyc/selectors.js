import { createSelector } from 'reselect';

const selectVar1 = () => state => state.getIn(['PersonaKyc', 'var1']);

export {
	selectVar1,
};
