import * as actionTypes from "../Actions/actiontypes";


const initialState = {
    userDetails: {},
    signInSuccess: false,
    signInError: "",
};


const SignInReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case actionTypes.SIGNIN_RESPONSE:
  
        return {
          ...state,
          signInSuccess: true,
          userDetails: action.success,
          signInError: "",
        };
  
      case actionTypes.SIGNIN_ERROR:
  
        return {
          ...state,
          signInError: action.error,
          signInSuccess: "",
          userDetails: {},
        };
    default:
        return state;
    }
}

export default SignInReducer;
