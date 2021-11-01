import {GET_RESULT} from './actions';

const initialState = {
  listUrl: [{html_url: 'enter text for searh'}],
};

function listReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_RESULT:
      return {...state, listUrl: action.payload};
    default:
      return state;
  }
}
export default listReducer;
