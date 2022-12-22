import { all, fork } from "redux-saga/effects";
import * as SignInSaga from "./SignInSaga";

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(SignInSaga)
    ].map(fork)
  );
}
