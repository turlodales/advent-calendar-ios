'use strict';

let React = require('react-native');
let Constants = require('./Constants');

let {
  StyleSheet,
  Text,
  View,
} = React;

class CalendarItem extends React.Component {
  render() {
    return (
      <View style={[styles.container, {width: this.props.size, height: this.props.size}]}>
        <Text style={styles.welcome}>
          {this.props.index}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: Constants.textColor,
    margin: 10,
  },
});

module.exports = CalendarItem;
