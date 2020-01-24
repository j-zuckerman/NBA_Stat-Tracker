import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import playerDetailsReducer from './reducers/playerDetailsReducer';
import seasonAveragesReducer from './reducers/seasonAveragesReducer';

const reducer = combineReducers({
  player: playerDetailsReducer,
  seasonAverages: seasonAveragesReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
