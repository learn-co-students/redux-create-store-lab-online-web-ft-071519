// write your createStore function here

const createStore = (candyReducer) =>{
    let state;

    const dispatch = (action) => {
      state = candyReducer(state, action);
      render()
    };

    const getState = () => state;

    return {
      dispatch,
      getState
    };
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

let store = createStore(candyReducer);
store.dispatch({type: "@@INIT"});
console.log(store.getState()[0])

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch