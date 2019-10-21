import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getToolsRequest: ['tools'],
  getToolsSuccess: ['tools'],
  getToolsFailure: ['errors'],
  removeToolRequest: ['id'],
  removeToolSuccess: ['id'],
  removeToolFailure: ['errors'],
})

const INITIAL_STATE = {
  toolsList: {
    tools: null,
    loading: false,
    errors: [],
  } 
}

const toolRequest = (state, { tools }) => ({ ...state, toolsList: { tools , loading: true } });

const toolSuccess = (state, { tools }) => {
  return { ...state, toolsList: { tools, loading: false, errors: [] } }
}

const toolRemoveSuccess = (state, { id } ) => {
  return { 
    ...state, 
    toolsList: { 
      tools: state.toolList.filter(tool => tool._id !== id ),
      loading: false,
      errors: []
    }
  }
}

const toolFailure = (state, { tools, errors }) => {
  console.log(state)
  return { ...state, toolsList: { loading: false, errors } }
}

export default createReducer(INITIAL_STATE, {
  [Types.GET_TOOLS_REQUEST]: toolRequest,
  [Types.GET_TOOLS_SUCCESS]: toolSuccess,
  [Types.GET_TOOLS_FAILURE]: toolFailure,
  [Types.REMOVE_TOOL_REQUEST]: toolRequest,
  [Types.REMOVE_TOOL_SUCCESS]: toolRemoveSuccess,
  [Types.REMOVE_TOOL_FAILURE]: toolFailure,
})