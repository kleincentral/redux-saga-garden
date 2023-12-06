import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* getPlant() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/plants",
    });
    yield put({
      type: "SET_PLANT",
      payload: response.data,
    });
  } catch (error) {
    alert("SAGA function getPlant failed,", error);
  }
}

function* addPlant(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/plants",
      data: action.payload,
    });
    yield put({
      type: "SAGA/GET_PLANT",
    });
  } catch (error) {
    alert("SAGA function addPlant failed,", error);
  }
}

function* removePlant(action) {
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/api/plants/${action.payload}`,
    });
    yield put({
      type: "SAGA/GET_PLANT",
    });
  } catch (error) {
    alert("SAGA function removePlant failed,", error);
  }
}

const plantList = (state = [], action) => {
  switch (action.type) {
    case "SET_PLANT":
      return action.payload;
    default:
      return state;
  }
};

function* rootSaga() {
  yield takeLatest("SAGA/ADD_PLANT", addPlant);
  yield takeLatest("SAGA/GET_PLANT", getPlant);
  yield takeLatest("SAGA/REMOVE_PLANT", removePlant);
}

const sagaMiddleware = createSagaMiddleware();

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// Note that the store is currently not
// configured to utilize redux-saga OR
// redux logger!
const store = createStore(
  combineReducers({
    plantList,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

export default store;
