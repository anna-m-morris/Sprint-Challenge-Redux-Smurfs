import axios from axios;

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS= "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS= "GET_SMURF_SUCCESS";
export const GET_SMURF_FAIL = "GET_SMURF_FAIL";

export const ERROR = "ERROR";

export const getSmurf = () => (dispatch) => {
  dispatch({ type: GET_SMURF_START })

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({
        type: GET_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: GET_SMURF_FAILURE,
        payload: error
      })
      return false
    })
  }

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START});

  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: error});
      return false
    })
} 