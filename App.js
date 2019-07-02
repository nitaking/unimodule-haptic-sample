/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Haptics from 'expo-haptics';

type Props = {};
export default class App extends Component<Props> {
  onNotificationFeedback(notificationType) {
    Haptics.notificationAsync(notificationType)
  }
  onImpact(impactType) {
    Haptics.impactAsync(impactType)
  }
  onSelection() {
    // Haptics.selection();
    Haptics.selectionAsync()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Unimodule Haptic!</Text>

        <TouchableOpacity
          style={styles.greenButton}
          onPress={this.onSelection}
        >
          <Text style={styles.outlineText}>selection</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.blueButton}
          onPress={() => this.onNotificationFeedback(Haptics.NotificationFeedbackType.Success)}
        >
          <Text style={styles.outlineText}>NotificationFeedback Success</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.blueButton}
          onPress={() => this.onNotificationFeedback(Haptics.NotificationFeedbackType.Warning)}
        >
          <Text style={styles.outlineText}>NotificationFeedback Warning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.blueButton}
          onPress={() => this.onNotificationFeedback(Haptics.NotificationFeedbackType.Error)}
        >
          <Text style={styles.outlineText}>NotificationFeedback Error</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.redButton}
          onPress={() => this.onImpact(Haptics.ImpactFeedbackStyle.Light)}
        >
          <Text style={styles.outlineText}>impactAsync Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.redButton}
          onPress={() => this.onImpact(Haptics.ImpactFeedbackStyle.Medium)}
        >
          <Text style={styles.outlineText}>impactAsync Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.redButton}
          onPress={() => this.onImpact(Haptics.ImpactFeedbackStyle.Heavy)}
        >
          <Text style={styles.outlineText}>impactAsync Heavy</Text>
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
  blueButton: {
    padding: 15, marginVertical: 10, backgroundColor: 'blue', borderRadius: 50, alignItems: 'center', justifyContent: 'center'
  },
  redButton: {
    padding: 15, marginVertical: 10, backgroundColor: 'red', borderRadius: 50, alignItems: 'center', justifyContent: 'center'
  },
  greenButton: {
    padding: 15, marginVertical: 10, backgroundColor: 'green', borderRadius: 50, alignItems: 'center', justifyContent: 'center'
  },
  outlineText: {
    color: 'white'
  }
});
