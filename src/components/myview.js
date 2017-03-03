import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyView extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.google.com'}}
        style={{marginTop: 20}}
      />
    );
  }
}