import { createSelector } from 'reselect';

const selectVar1 = () => state => state.getIn(['ResetPassword', 'var1']);

export {
	selectVar1,
};
