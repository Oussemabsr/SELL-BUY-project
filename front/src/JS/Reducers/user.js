import { REGISTER_USER, LOAD_USER, FAIL_USER, LOGOUT_USER, CURRENT_USER } from '../ActionTypes/user';

const initialState = {
  user: null, 
  isAuth: false, 
  isLoading: true, 
  errors: [], 
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        isAuth: true,
        errors: [],
      };
    case LOAD_USER:
      return {
        ...state,
        isLoading: true,
        errors: [],
      };
    case CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        isAuth: true,
        errors: [],
      };
    case FAIL_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        errors: action.payload,
      };
    case LOGOUT_USER:
      return initialState; 
    default:
      return state;
  }
};

export default userReducer;
