const defaultState = {
  inputValue: 'react-redux',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === 'CHANGE_INPUT') {
    let newSatate = JSON.parse(JSON.stringify(state))
    newSatate.inputValue = action.value
    return newSatate
  }
  if(action.type === 'ADD_TODO'){
    let newSatate = JSON.parse(JSON.stringify(state))
    newSatate.list.push(newSatate.inputValue)
    newSatate.inputValue = ''
    return newSatate
  }
  if(action.type === 'DELETE_TODO'){
    let newSatate = JSON.parse(JSON.stringify(state))
    newSatate.list.splice(action.index, 1)
    return newSatate
  }
  return state
}