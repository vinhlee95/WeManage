import React, { Component } from 'react';
import { Card, CardItem, Button } from './commons';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';

class EmployeeCreate extends Component {

   onButtonPress() {
      const {name, phone, shift} = this.props;
      this.props.employeeCreate({ name, phone, shift : shift || 'Monday' });
   }

   render() {
      return(
         <Card>
            {/* Employee form */}
            <EmployeeForm {...this.props}/>

            {/* Create button */}
            <CardItem>
               <Button onPress={this.onButtonPress.bind(this)}>
                  Create
               </Button>
            </CardItem>
         </Card>
      );
   }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);