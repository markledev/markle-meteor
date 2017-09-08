import { createSelector } from 'reselect';

const selectVar1 = () => state => state.getIn(['PublicContainer', 'var1']);

export {
	selectVar1,
};
