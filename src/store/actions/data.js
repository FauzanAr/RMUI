export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    };
};

const recieveData = data => {
    return {
        type: FETCH_SUCCESS,
        data: data
    };
};

const fetchError = message => {
    return {
        type: FETCH_FAILURE,
        message
    };
};

export const fetchData = () => dispatch => {
    const url = 'http://localhost:8000/api/v1/view-data';
    dispatch(fetchRequest());
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        dispatch(recieveData(data));
    })
    .catch((err) => {
        console.log(err);
        dispatch(fetchError(err));
    });
};