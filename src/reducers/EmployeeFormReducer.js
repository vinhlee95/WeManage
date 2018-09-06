import { 
   EMPLOYEE_UPDATE, EMPLOYEE_CREATE_SUCCESS, EMPLOYEE_SAVE_SUCCESS 
} from '../actions/types';

const initialState = {
   name: '',
   phone: '',
   shift: ''
};

export default (state=initialState, action) => {
   switch(action.type) {
      case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};

      //clear form after employee is created
      case EMPLOYEE_CREATE_SUCCESS: 
      return initialState;

      //clear from after new employee's data was saved
      case EMPLOYEE_SAVE_SUCCESS:
      return initialState;

      default:
      return state;
   };
};