import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ToolActions } from '../ducks/tools';

export function* getTools({ tools }) {
    try {
        const { data } = yield call(api.get, '/tools');

        yield put(ToolActions.getToolsSuccess(data));
    } catch (error) {
        yield put(ToolActions.getToolsFailure({ tools, error: 'Não foi possível carregar as ferramentas'}));
    }
}

export function* removeTool({ id }) {
    try {
        const response = yield call(api.delete, `/tools/${id}`);

        if(response.status === 200) yield put(ToolActions.removeToolSuccess(id));
    } catch (error) {
        yield put(ToolActions.getToolsFailure({ error: 'Não foi possível apagar a ferramenta'}));
    }
}