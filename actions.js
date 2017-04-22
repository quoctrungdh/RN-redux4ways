import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from './constants';
import getPeople from './api';

export function getData() {
  return {
    type: FETCHING_DATA,
  };
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  };
}

export function getDataFailure(error) {
  return {
    type: FETCHING_DATA_FAILURE,
    error,
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData());
    getPeople()
    .then(res => dispatch(getDataSuccess(res)))
    .catch(err => dispatch(getDataFailure(err)));
  };
}
