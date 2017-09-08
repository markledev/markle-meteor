import { createSelector } from 'reselect';

const selectVar1 = () => state => state.getIn(['LogOut', 'var1']);

export {
	selectVar1,
};
