import { CHANGE_INPUT, ADD_TODO, DELETE_TODO, GET_TODO } from './actionTypes'

const defaultState = {
  inputValue: 'Write Something',
  list: []
}

const todo = (state = defaultState, action) => {
  console.log(action)
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_TODO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === GET_TODO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.data.list
    return newState
  }
  return state
}

export default todo