import React from 'react'
import { connect } from 'react-redux'

const TodoList = (props) => {
  let { inputValue, inputChange, addTodo, deleteTodo, list } = props
    return (
      <div>
        <input type="text"
          value={ inputValue }
          onChange={ inputChange }
        />
        <button onClick={ addTodo }>提交</button>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index}
                  onClick={ deleteTodo.bind(this,index) }>
                  { index }:{ item }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e){
      let action  = {
        type: 'CHANGE_INPUT',
        value: e.target.value
      }
      dispatch(action)
    },
    addTodo () {
      let action = {
        type: 'ADD_TODO'
      }
      dispatch(action)
    },
    deleteTodo (index) {
      let action = {
        type: 'DELETE_TODO',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList)
