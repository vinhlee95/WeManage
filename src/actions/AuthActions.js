import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, SIGNUP_USER, LOGIN_PENDING } from "./types";
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
   return {
      type: EMAIL_CHANGED,
      payload: text
   };
};

export const passwordChanged = (text) => {
   return {
      type: PASSWORD_CHANGED,
      payload: text
   };
};

export const loginUser = ( { email, password } ) => {
   return (dispatch) => {
      dispatch({type: LOGIN_PENDING});
      firebase.auth().signInWithEmailAndPassword(email, password)
         .then(user => loginUserSuccess(dispatch, user))
         .catch(() => loginUserFail(dispatch));
   };
};

export const signupUser = ( {email, password}) => {
      return (dispatch) => {
         firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(user => loginUserSuccess(dispatch, user))
      }
};

const loginUserSuccess = (dispatch, user) => {
   dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
   });
   //Actions match with the key of Scence in Router.js
   Actions.main();
};

const loginUserFail = (dispatch) => {
   dispatch({type: LOGIN_USER_FAIL, payload: "Invalid account! Please retry"});
}

