import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardItem } from './CardItem';
import { Button } from './Button';
import { Card } from './Card';

const Confirm = (props) => {
   return(
         <Modal
            visible={props.visible}
            animationType={'fade'}
            transparent
            onRequestClose={() => {}}
         >
            <View style={styles.containerStyle}>
               <Card>
                  <CardItem>
                     <Text style={styles.textStyle}>{props.children}</Text>
                  </CardItem>
                  <CardItem>
                     <Button onPress={props.handleAccept}>Accept</Button>
                     <Button onPress={props.handleCancel}>Cancel</Button>
                  </CardItem>
               </Card>
            </View>
         </Modal>
   );
};

const styles = {
   containerStyle: {
      flex: 1,
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: 'rgba(0,0,0,0.7)'
   },
   textStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 10
   },
   cardStyle: {
      paddingTop: 5,
      paddingBottom: 5
   }
};

export {Confirm};
