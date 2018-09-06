import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import RouterComponent from './src/Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  // identification login
  componentWillMount() {
    const config = { 
      apiKey: "AIzaSyBxwQJJO731gcB-YjFbgHj1eS0UxU59PDs", authDomain: "manager-7dc23.firebaseapp.com", databaseURL: "https://manager-7dc23.firebaseio.com", projectId: "manager-7dc23", storageBucket: "manager-7dc23.appspot.com", messagingSenderId: "585226564040" 
    };

    firebase.initializeApp(config);
  }
  render() {
    return(
      <Provider store = { store }>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;



