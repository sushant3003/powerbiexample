import { put, takeLatest } from "redux-saga/effects";
import { Strings, ErrorStatus } from "../../utils/Strings";
import * as actionTypes from "../Actions/actiontypes";

//  worker
function* handleSignin(action) {
    
    try {

        let result = true;
        
        yield put({ type: actionTypes.SIGNIN_RESPONSE, success: action.data });
    
        action.callBack(result);         
  
    } catch (e) {
  
      yield put({
        type: actionTypes.SIGNIN_ERROR,
        error: { status: ErrorStatus.NETWORK_ERROR, message: e.message ? e.message : Strings.SomethingWentWrong },
      });
    
    }
  
  }
  
  //  watcher
  export function* signinWatcherSaga() {

    yield takeLatest(actionTypes.SIGNIN_REQUEST, handleSignin);
  
  }