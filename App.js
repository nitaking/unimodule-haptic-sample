/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Haptics from 'expo-haptics';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  async _onNotificationFeedback(notificationFeedbackType) {
    // Haptics.notificationAsync(Haptics.NotificationFeedbackType.{Success, Warning, Error})
    await Haptics.notificationAsync(notificationFeedbackType)
  }
  onFeedbackSuccess(notificationFeedbackType) {
    // this._onNotificationFeedback(Haptics.NotificationFeedbackType.Success)
    Haptics.notificationAsync()
  }
  async _onImpactFeedback(impactFeedbackStyle) {
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.{Light, Medium, Heavy}.)
    await Haptics.impactAsync(impactFeedbackStyle)
  }
  async onLightFeedback(impactFeedbackStyle) {
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.{Light, Medium, Heavy}.)
    await this._onImpactFeedback(Haptics.ImpactFeedbackStyle.Light)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <TouchableOpacity
          style={{ height: 60, width: 100, backgroundColor: 'blue', borderRadius: 50, alignItems: 'center', justifyContent: 'center'  }}
          onPress={this.onFeedbackSuccess}
        >
          <Text style={{ color: 'white' }}>Button 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ height: 60, width: 100, backgroundColor: 'red', color: 'white', borderRadius: 50, margin: 20, alignItems: 'center', justifyContent: 'center' }}
          onPress={this.onLightFeedback}
        >
          <Text style={{ color: 'white' }}>Button 2</Text>
        </TouchableOpacity>
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
