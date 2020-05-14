import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_REQUEST,
    POST_SUCCESS,
    POST_FAILURE
} from '../actions/data';

export default(
    state = {
        isFetching: false,
        isFetchSuccess: false,
        isFetchFailure: false,
        isPosting: false,
        isPostSuccess: false,
        isPostFailure: false,
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
        case POST_SUCCESS:
            return {
                ...state,
                isPostSuccess: true,
            }
        case POST_REQUEST:
            return {
                ...state,
                isPosting: true
            }
        case POST_FAILURE: 
            return {
                ...state,
                isPostFailure: true
            }
        default:
            return state
    }
}