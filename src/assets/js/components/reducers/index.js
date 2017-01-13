import { combineReducers } from 'redux';
import profileReducer from './reducer-profile';

const reducers = combineReducers({
  profile: profileReducer
});

export default reducers;
