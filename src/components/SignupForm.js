import React, { Component } from 'react';
import {Card, CardItem, Input, Button} from './commons';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, signupUser } from '../actions';

class SignupForm extends Component {

   onEmailChange(text) {
      this.props.emailChanged(text);
   }
   
   onPasswordChange(text) {
      this.props.passwordChanged(text);
   }

   onSignupPress() {
      const { email, password } = this.props;
      this.props.signupUser({ email, password });
   }

   render() {
      return(
         <Card>
            <CardItem>
               <Input
                  placeholder = 'Email' 
                  onChangeText = {this.onEmailChange.bind(this)}
                  keyboardType = 'email-address'
               />
            </CardItem>

            <CardItem>
               <Input
                  secureTextEntry
                  placeholder = 'Password'
                  onChangeText = {this.onPasswordChange.bind(this)}
               />
            </CardItem>

            <CardItem>
              <Button onPress = {this.onSignupPress.bind(this)}>
                Sign Up
              </Button>
            </CardItem>
         </Card>
      );
   }
}

const mapStateToProps = state => {
   return {
      email: state.auth.email,
      password: state.auth.password
   };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, signupUser })(SignupForm);