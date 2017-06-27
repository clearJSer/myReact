export default (state = ['item -2'], action) => {
  switch (action.type) {
    case 'ADD':
      state.push(action.payload)
      return state
    case 'REMOVE':
      state.splice(action.payload, 1)
      return state
    default:
      return state
  }
}
