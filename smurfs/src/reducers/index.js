import {
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS
} from '../actions/index';

import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS
} from '../actions/index';

import { ERROR } from '../actions/index';

const initialState = {
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
    case ERROR:
      return{...state,
        fetchingSmurfs:false,
        addingSmurf:false
      }  
    default:
      return { ...state };
  }
};
export default smurfReducer;
