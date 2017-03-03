import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';
import MyView from './src/components/myview';
import NavBar from './src/components/navbar';
import AlbumList from './src/components/AlbumList';


class Albums extends Component {
  render() {
    return (
        <View>
          <AlbumList></AlbumList>
        </View>
      
    );
  }
}

AppRegistry.registerComponent('albums', () => Albums);