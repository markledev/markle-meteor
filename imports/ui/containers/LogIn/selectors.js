import { createSelector } from 'reselect';

const selectVar1 = () => state => state.getIn(['LogIn', 'var1']);

export {
	selectVar1,
};
