import NBA_api from '../api/NBA_api';

const initialState = {
  details: null
};

const playerDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLAYER_DETAILS':
      return {
        ...state,
        details: action.data
      };
    default:
      return state;
  }
};

export const fetchPlayerDetails = ids => {
  return async dispatch => {
    let responses = [];
    Promise.all(ids.map(id => NBA_api.get(`/players/${id}`))).then(
      resolvedValues => {
        resolvedValues.forEach(value => {
          responses.push(value.data);
        });
      }
    );
    dispatch({
      type: 'GET_PLAYER_DETAILS',
      data: responses
    });
  };
};

export default playerDetailsReducer;
