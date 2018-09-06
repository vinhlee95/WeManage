import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from '../src/components/EmployeeList';
import SignupForm from './components/SignupForm';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
   return(
      <Router>
         <Scene key="root" hideNavBar>
            <Scene key="auth">
               <Scene key="login" component={LoginForm} title="Login To Your Account" initial />
               <Scene key="signup" component={SignupForm} title="Create A New Account" />
            </Scene>

            <Scene key="main">
               <Scene 
                  rightTitle="Add"
                  onRight={() => Actions.createEmployee()}
                  key="employeeList" 
                  component={EmployeeList} 
                  title="Employee List" />
               <Scene key="createEmployee" component={EmployeeCreate} title="Create Employee" />
               <Scene key="editEmployee" component={EmployeeEdit} title="Edit" />
            </Scene>
         </Scene>
      </Router>
   );
};

export default RouterComponent;