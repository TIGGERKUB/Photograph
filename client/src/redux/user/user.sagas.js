import UserActionTypes from "./user.types";
import { takeLatest, all, call, put } from "redux-saga/effects";



export function* signInWithEmail({ payload: { email, password } }) {
    try {
        
      const user = yield auth.signInWithEmailAndPassword(email, password);
      yield getSnapshotFromUserAuth(user);
    } catch (error) {
      yield put(signInFailure(error));
    }
  }