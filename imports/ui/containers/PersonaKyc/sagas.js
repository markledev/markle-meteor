import { call, fork, take, cancel, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { TRIGGER_SAGA_ONE, REDUCER_ONE } from './constants';

function randomPromise() {
	return new Promise((resolve, reject) => {
		try {
			resolve('Viet is handsome indeed');
		} catch (e) {
			reject(e);
		}
	});
}
export function* immediateFunction(data) {
	// Data retrieved from the store
	const correctAnswer = yield call(randomPromise);
	yield put({
		type: REDUCER_ONE,
		correctAnswer: correctAnswer,
	});
}

export function* sagaOne() {
	const watcher = yield fork(takeLatest, TRIGGER_SAGA_ONE, immediateFunction);
	yield take('CANCEL_SAGAS');
	yield cancel(watcher);
	// MUST INCLUDE: Kill all existing sagas before routing to new page
}

export default [
	sagaOne,
];
