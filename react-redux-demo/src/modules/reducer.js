import todos from './todos/todo';
import counter from './counter/counter';

import { combineReducers } from 'redux';

const reducer = combineReducers({
  counter,
  todoList: todos
})

export default reducer