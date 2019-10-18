import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  removeTool: ['id'] 
})

const INITIAL_STATE = [
  {
      "tags": [
          "tarefas",
          "organização",
          "atividades",
          "produtividade"
      ],
      "_id": "5d1a8363a7aefd001fdaa807",
      "title": "Miro",
      "link": "https://miro.info/",
      "description": "Trello é um aplicativo de gerenciamento de projeto baseado na web originalmente feito por Fog Creek Software em 2011.",
      "created_at": "2019-07-01T22:04:19.380Z",
      "updatedAt": "2019-07-01T22:04:19.380Z",
      "__v": 0
  },
  {
    "tags": [
        "tarefas",
        "organização",
        "atividades",
        "produtividade"
    ],
    "_id": "5ce5ccaad5fcb30029d34fd1",
    "title": "Github",
    "link": "https://github.org/",
    "description": "Trello é um aplicativo de gerenciamento de projeto baseado na web originalmente feito por Fog Creek Software em 2011.",
  }
]

const remove = (state = INITIAL_STATE, action) =>
  state.filter( tool => tool._id !== action.id)

export default createReducer(INITIAL_STATE, {
  [Types.REMOVE_TOOL]: remove
})