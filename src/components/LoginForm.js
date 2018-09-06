import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Card, CardItem, Input, Button, Spinner} from './commons';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Actions } from "react-native-router-flux";


class LoginForm extends Component {

   // Call Action Creator when user types some text
    onEmailChange(text) {
      this.props.emailChanged(text);
    }

    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }

    onLoginPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
    }

    onSignupPress() {
      Actions.signup();
    }
    
    renderSpinner() {
      if(this.props.pending) {
        return(
          <Spinner />
        );
      }
      else {
        return(
          <Button onPress = { this.onLoginPress.bind(this) } >
            Login
          </Button>
        );
      }
    }

    render() {
      return(
         <Card>
           {/* Email input */}
            <CardItem>
               <Input
                  placeholder = 'Email' 
                  onChangeText = {this.onEmailChange.bind(this)} 
                  value = {this.props.email}
                  keyboardType='email-address'
                  returnKeyType='next'
                  autoFocus='true'
               />
            </CardItem>

            {/* Password input */}
            <CardItem>
               <Input
                  secureTextEntry
                  placeholder = 'Password'
                  onChangeText = {this.onPasswordChange.bind(this)}
                  value = {this.props.password}
                  returnKeyType='go'
                  onSubmitEditing = {this.onLoginPress.bind(this)}
               />
            </CardItem>

            {/* Error message */}
            <View style={{backgroundColor: 'white'}}>
              <Text style={{color: 'red', fontSize: 20, paddingTop: 5, paddingBottom: 5, textAlign: 'center'}}>{this.props.error}</Text>
            </View>

            {/* Spinner or Login Button*/}
            <CardItem>
              {this.renderSpinner()}
            </CardItem>

            {/* SignUp  */}
            <View style={{backgroundColor: 'white'}}>
            <Text style={styles.signupMessage}>First time here?</Text>
            </View>
            <CardItem style={styles.signupCard}>
              <Button onPress = {this.onSignupPress.bind(this)}>
                Sign Up
              </Button>
            </CardItem>
         </Card>
      );
   }
}
// Connect state to LoginForm
const mapStateToProps = state => {
  const { email, password, error, user, pending } = state.auth;
  return { email, password, error, user, pending };
};

// Connect Action Creator to LoginForm component
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);

//Styling
const styles = {
  signupMessage: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10
  }
};