import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from "./types";
import { Actions } from 'react-native-router-flux';

//update state when users start typing
export const employeeUpdate = ({ prop, value }) => {
   return {
      type: EMPLOYEE_UPDATE,
      payload: {prop, value}
   };
};

//push user data to Firebase
export const employeeCreate = ({name,phone,shift}) => {
   //use currentUser as userId
   const {currentUser} = firebase.auth();
   return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
         dispatch({type: EMPLOYEE_CREATE_SUCCESS});
         Actions.pop();
      });
   };
};

//fetch employee data from Firebase
export const employeeFetch = () => {
   return(dispatch) => {
      const { currentUser } = firebase.auth();
      //fetch data from Firebase
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
      //watch for new data to come
      .on('value', snapshot => {
         dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
      })
   };
};

//update employee data
export const employeeSave = ({ name, phone, shift, uid }) => {
   const { currentUser } = firebase.auth();
   return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
         dispatch({type: EMPLOYEE_SAVE_SUCCESS}); 
         Actions.pop();
      });
   };
};

//delete employee data
export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      dispatch({type: EMPLOYEE_SAVE_SUCCESS});
      Actions.pop();
    });
  }
}