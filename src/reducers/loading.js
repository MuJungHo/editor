const defaultState = {
    isFetching: false
}
  
const loading = (state = defaultState, action) => {
    switch (action.type) {
        case 'REQUEST_START':
            return {
                isFetching: action.isFetching
            }
        case 'REQUEST_FINISH':
            return {
                isFetching: action.isFetching
            }
        default:
            return state
        }
    }

export default loading
  