import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
});

// Define the RootState type
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
