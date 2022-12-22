import * as actionTypes from "./actiontypes";

export const doSignin = (userDetails, callBack) => (
 {
  type: actionTypes.SIGNIN_REQUEST,
  data: userDetails,
  callBack: callBack
});