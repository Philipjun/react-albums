import React, { Component } from 'react';
import { Text, TabBarIOS, View, StyleSheet} from 'react-native';

export default class NavBar extends Component {
  render () {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="favorites"
          selected={true}
        >
          <View>
            <Text>Favorite Places</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
        >
          <View>
            <Text>Add Place</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>      
    );
  }
}