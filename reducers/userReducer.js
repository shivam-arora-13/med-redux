import * as actionTypes from '../ActionTypes';

const initialState = {
  username: null || localStorage.getItem('username'),
  role: null || localStorage.getItem('role'),
  token: null || localStorage.getItem('token'),
  contact : null || localStorage.getItem('contact'),
  address : null || localStorage.getItem('address'),
  description : null || localStorage.getItem('description'),
  name :  null || localStorage.getItem('name'),
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.LOGOUT_SUCCESS:
    //   return {
    //     ...state,
    //     Username: null,
    //     email: null,
    //     role: null,
    //     token: null,
    //   };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default UserReducer;
