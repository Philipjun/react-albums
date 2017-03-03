import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';
import MyView from './src/components/myview';
import NavBar from './src/components/navbar'


class Albums extends Component {
  render() {
    return (
    
        <NavBar></NavBar>
      

      
    );
  }
}

AppRegistry.registerComponent('albums', () => Albums);