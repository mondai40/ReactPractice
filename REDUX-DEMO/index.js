const redux = require("redux");
const createStore = redux.createStore; //copy the createStore function
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
    }
}

//{previousState, action} => newState
const initialCakeState = {
    numOfCakes: 10,
}
const initailIceCreamState = {
    numOfIceCreams: 20,
}
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state;
    }
}
const iceCreamReducer = (state = initailIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer, 
});
const store = createStore(rootReducer, applyMiddleware(logger)); //hold application state(initial value)
console.log("initial state", store.getState()); //allows access to state via getState(0)
const unsubscribe = store.subscribe(() => {}); //4
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake()); //3
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();