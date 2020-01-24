import NBA_api from '../api/NBA_api';

const initialState = {
  details: null
};

const seasonAveragesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SEASON_AVERAGES':
      return {
        ...state,
        details: action.data
      };
    default:
      return state;
  }
};

export const fetchSeasonAverages = ids => {
  return async dispatch => {
    let responses = [];
    Promise.all(
      ids.map(id => NBA_api.get(`season_averages?player_ids[]=${id}`))
    ).then(resolvedValues => {
      resolvedValues.forEach(value => {
        responses.push(value.data);
      });
    });
    dispatch({
      type: 'GET_SEASON_AVERAGES',
      data: responses
    });
  };
};

export default seasonAveragesReducer;
