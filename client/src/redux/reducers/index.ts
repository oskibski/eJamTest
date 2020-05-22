import { combineReducers } from 'redux';
import { deployments } from './deployments';
import { templates } from './templates';

export default combineReducers({
  deployments,
  templates,
});
