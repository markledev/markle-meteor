import { createSelector } from 'reselect';

const selectVar1 = () => state => state.getIn(['Container', 'var1']);

export {
	selectVar1,
};
