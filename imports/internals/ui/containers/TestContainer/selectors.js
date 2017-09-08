import { createSelector } from 'reselect';

const selectVar1 = () => state => state.getIn(['TestContainer', 'var1']);

export {
	selectVar1,
};
