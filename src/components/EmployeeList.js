import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {

   //fetch employee data from Firebase after EmployeeList is rendered. 
   componentWillMount() {
      this.props.employeeFetch();
   }

   render() {
      return(
         <FlatList
            data={this.props.employees}
            renderItem={({ item }) => <ListItem employee={ item } />}
         />
      );
   }
}

const mapStateToProps = state => {
   //transform Object state.employees to Array
   const employees = _.map(state.employees, (val, uid) => {
      return {...val, uid}; //{ shift: 'Monday', name: 'Vinh', id: '123213' }
   });
   return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);