/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import LoginComponent from './app/components/project/login';
import indexComponent from './app/components/project/index'
import detailComponent from './app/components/project/detail'


const myNavigator = StackNavigator({
    index:{
    screen:indexComponent,
      navigationOptions:()=>{
      return {
        headerTitle:'首页',
        headerTitleStyle:{justifyContent:'center',alignSelf:'center'}
      }
    }
  },

  detail:{
    screen:detailComponent,
        navigationOptions:()=>{
      return {
        headerTitle:'详情',
        headerTitleStyle:{justifyContent:'center',alignSelf:'center'}
      }
    }
  },


    login:{
    screen:LoginComponent,
    navigationOptions:()=>{
      return {
        headerTitle:'登录',
        headerTitleStyle:{justifyContent:'center',alignSelf:'center'}
      }
    }
  },



})


export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myNavigator);
