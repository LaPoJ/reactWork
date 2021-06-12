const defaultState = {
  inputValue: 'we',
  list: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'NEW_ADD_TODO':
      return state + 1;
    case 'NEW_DELETE_TODO':
      return state -1;
    default:
      return state;
  }
}