import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../Type/Types";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

const getApi = () => {
    return fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .catch((error) => {
            throw error;
        });
};

function* fetchUsers(action) {
    try {
        const users = yield call(getApi, action.payload);
        yield put(getUsersSuccess(users));
    } catch (error) {
        yield put(getUserError(error.message));
    }
}

export const getUsersSuccess = (users) => {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: {
            loading: false,
            users: users
        }
    };
};

export const getUserError = (error) => {
    return {
        type: types.GET_USERS_FAILED,
        error: error
    };
};

function* RootSaga() {
    yield takeEvery(types.GET_USERS_REQUEST, fetchUsers);
}

export default RootSaga;