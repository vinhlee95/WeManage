import React from 'react';
import { Picker, Text } from 'react-native';
import { CardItem } from '../commons';

const DayPicker = props => {
   return(
      <CardItem style={styles.cardStyle}>
         <Text style={styles.textStyle}>Shift</Text>
         <Picker
            selectedValue={props.selectedValue}
            onValueChange={props.onValueChange}
            style={styles.pickerStyle}
         >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
         </Picker>
      </CardItem>
   );
};

const styles = {
   textStyle: {
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginLeft: 7
   },
   pickerStyle: {
      flex: .8
   }
};

export {DayPicker};