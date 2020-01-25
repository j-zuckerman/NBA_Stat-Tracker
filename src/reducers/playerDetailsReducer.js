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
  var playerInformations = [];
  let playerDetails = { playerInfo: [], seasonAverages: [], stats: [] };
  var seasonAverages = [];
  return dispatch => {
    Promise.all(ids.map(id => NBA_api.get(`/players/${id}`))).then(
      resolvedValues => {
        resolvedValues.forEach(value => {
          let playerInfo = value.data;
          playerDetails.playerInfo.push(playerInfo);
        });
      }
    );

    Promise.all(
      ids.map(id =>
        NBA_api.get(`season_averages?season=2018&player_ids[]=${id}`)
      )
    ).then(resolvedValues => {
      resolvedValues.forEach(value => {
        let seasonAverage = value.data;
        playerDetails.seasonAverages.push(seasonAverage);
      });
    });

    Promise.all(
      ids.map(id =>
        NBA_api.get(
          `stats?player_ids[]=${id}&seasons[]=2018&seasons[]=2019&per_page=82`
        )
      )
    ).then(resolvedValues => {
      resolvedValues.forEach(value => {
        let stat = value.data;
        playerDetails.stats.push(stat);
      });
    });

    console.log(playerDetails);

    dispatch({
      type: 'GET_PLAYER_DETAILS',
      data: playerDetails
    });
  };
};

export default playerDetailsReducer;
