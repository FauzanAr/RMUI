export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const POST_REQUEST = "POST_REQUEST";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";
const url = 'http://localhost:8000/api/v1/view-data';

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

const postRequst = () => {
    return {
        type: POST_REQUEST
    };
};

const postSuccess = () => {
    return {
        type: POST_SUCCESS
    };
};

const postError = () => {
    return {
        type: POST_FAILURE
    }
}

export const postData = (data) => dispatch => {
    const urls = 'http://localhost:8000/api/v1/post-data'
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    dispatch(postRequst());
    fetch(urls, option)
    .then(res => res.json())
    .then(response => {
        console.log(response);
        dispatch(postSuccess);
        window.location.reload();
    })
    .catch((error) => {
        console.log(error)
        dispatch(postError());
    })

}

export const fetchData = () => dispatch => {
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