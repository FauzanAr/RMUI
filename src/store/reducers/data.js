import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/data';

export default(
    state = {
        isFetching: false,
        isFetchSuccess: false,
        isFetchFailure: false,
        error: {},
        data: []
    },
    action
) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isFetchSuccess: true,
                data: action.data
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                isFetchFailure: true,
                error: action.message
            }
        default:
            return state
    }
}