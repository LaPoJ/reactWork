import React, { Component } from 'react'
import store from "./store"
import { getMyListAction, changeInputAction, addTodoAction, deleteTodoAction, getTodoListReduxThunk } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {

  constructor(props) {
    super(props)
    console.log(store.getState())
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.stateChange = this.stateChange.bind(this)
    this.addTodoList = this.addTodoList.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    store.subscribe(this.stateChange)
  }

  stateChange () {
    this.setState(store.getState())
  }

  //action
  changeInputValue (e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  addTodoList () {
    const action = addTodoAction()
    store.dispatch(action)
  }

  deleteTodo(index) {
    const action = deleteTodoAction(index)
    store.dispatch(action)
  }

  componentDidMount () {
    const action = getMyListAction()
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        addTodoList={this.addTodoList}
        list={this.state.list}
        deleteTodo={this.deleteTodo}
      />
    )
  }
}

export default TodoList
