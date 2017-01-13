import { createStore } from 'redux';

const defaultState = {};

const reducer = function(state = defaultState, action) {
  if(action.type == 'TEST')
    console.log('dispatch successful');
  if(action.type === 'CHG_TITLE')
    state.title = action.payload;

    return state;
}

const store = createStore(reducer, defaultState);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

// store.dispatch({
//   type: 'CHG_TITLE',
//   payload: 'New Title'
// });

export default store;
