import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import { CardItem, Input, DayPicker } from './commons';
import { employeeUpdate, employeeCreate } from "../actions";

class EmployeeForm extends Component {
   render() {
      return(
         <View>
            {/* Name input */}
            <CardItem>
               <Input
                  placeholder="Name"
                  value={this.props.name}
                  onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
               />
            </CardItem>

            {/* Phone Input */}
            <CardItem>
               <Input 
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  value={this.props.phone}
                  onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
               />
            </CardItem>

            {/* DayPicker */}
            <DayPicker
               selectedValue={this.props.shift}
               onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day})}
            />
         </View>
      );
   }
}

export default connect(null, { employeeUpdate, employeeCreate })(EmployeeForm);