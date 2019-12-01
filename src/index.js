let candy = document.getElementById("candyForm").value

function createStore (candyReducer) {
    // Declare the "state"
    let state = [];

    // Get State function.
    function getState() {
        return state
    };

    // Dispatch function:
    function dispatch(action) {
        state = candyReducer(state, action);
        render();
    };

    return {dispatch, getState};
}

function candyReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_CANDY':
            return [...state, action.candy];
        default:
            return state;
    }
}

function render() {
let container = document.getElementById('container');
    if(store.getState()) {
        container.textContent = store.getState().join(' ')
    } else {
        throw new Error("the store's state has not been defined yet")
    }
};

// Use your createStore function and the functions provided here to create a store
let store = createStore();

// once the store is created, call an initial dispatch
store.dispatch({type: "@@INIT"})

