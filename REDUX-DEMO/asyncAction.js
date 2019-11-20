const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

//part of reducer start=============================================
const initialState = {
    loading: false,
    users: [],
    error: "",
};
//part of reducer end=============================================


//action start=============================================
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST,
    };
}
const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
}
const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    };
}

const fetchusers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                //response.data is the array of users
                const users = response.data.map(user=>user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                //error.message is the error description
                dispatch(FETCH_USERS_FAILURE(error.message));
            })
    }
}

//action end=============================================


//reducer start=============================================
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: "",
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users: [],
                error: action.payload,
            }
    }
}
//reducer end=============================================

//store start=============================================
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchusers())

//store end=============================================
