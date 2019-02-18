import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { alreadyLogin, notLoginYet } from '../actions'
import Main from './Main';



class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDR7gfpyBxsUH9R1PqCC3_0yqlmVCJtJsw",
      authDomain: "ujiansusulan-e3779.firebaseapp.com",
      databaseURL: "https://ujiansusulan-e3779.firebaseio.com",
      projectId: "ujiansusulan-e3779",
      storageBucket: "",
      messagingSenderId: "1063620520591"
    };

    firebase.initializeApp(config);
      
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            this.props.alreadyLogin(user);
        }
        else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return(
          <Main />
    );
  }
}



export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
