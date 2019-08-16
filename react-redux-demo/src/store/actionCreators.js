import { GET_MY_LIST, CHANGE_INPUT, ADD_TODO, DELETE_TODO, GET_TODO } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addTodoAction = () => ({
  type: ADD_TODO
})

export const deleteTodoAction = (index) => ({
  type: DELETE_TODO,
  index
})

export const getTodoListAction = (data) => ({
  type: GET_TODO,
  data
})

export const getTodoListReduxThunk = () => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5ca4595bc4e9a575b66b62fc/lapjc/DemoApi/redux_thubk-get_todo_list')
      .then((res) => {
        console.log(res.data)
        const data = res.data
        const action = getTodoListAction(data)
        dispatch(action)
      })
  }
}
export const getMyListAction = () => ({
  type: GET_MY_LIST
})