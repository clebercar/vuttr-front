import { combineReducers } from 'redux';

import users from './users';
import { tools } from '../ducks/todos';

export default combineReducers({
  tools
})