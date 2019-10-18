import { combineReducers } from 'redux';

import users from './users';
import tools from './tools';

export default combineReducers({
  users,
  tools
})