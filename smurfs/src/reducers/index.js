import {
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIIL
} from '../actions/index';

import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAIIL
} from '../actions/index';

import { ERROR } from '../actions/index';

const initalState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  error: null
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: ERROR.paylaod
      };
    case GET_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      };
    case GET_SMURF_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: ERROR.payload
      };
    default:
      return { ...state };
  }
};
export default smurfReducer;
