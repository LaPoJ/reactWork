import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'

import axios from 'axios'
import { getTodoListAction } from './actionCreators';

// generate
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
  const res = yield axios.get('https://easy-mock.com/mock/5ca4595bc4e9a575b66b62fc/lapjc/DemoApi/redux_thubk-get_todo_list')
  const action = getTodoListAction(res.data)
  yield put(action)
}

export default mySaga