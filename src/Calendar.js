'use strict';

let React = require('react-native');
let Constants = require('./Constants');

let {
  StyleSheet,
  Text,
  View,
} = React;

class Calendar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constants.backgroundColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: Constants.textColor,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: Constants.mutedColor,
    marginBottom: 5,
  },
});

module.exports = Calendar;
