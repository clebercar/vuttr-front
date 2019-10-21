import { all, takeLatest } from 'redux-saga/effects';
import { getTools } from './tools';
import { removeTool } from './tools';
import { Types as ToolsTypes } from '../ducks/tools';

export default function* rootSaga() {
  yield all([
    takeLatest(ToolsTypes.GET_TOOLS_REQUEST, getTools),
    takeLatest(ToolsTypes.REMOVE_TOOL_REQUEST, removeTool),
  ]);
}