'use strict';

let React = require('react-native');
let Dimensions = require('Dimensions');
let Constants = require('./Constants');
let CalendarItem = require('./CalendarItem');

let DimensionWidth = Dimensions.get('window').width;
let {
  StyleSheet,
  Text,
  View,
} = React;

class Calendar extends React.Component {
  renderItem(value) {
    return <CalendarItem width={width} index={value} />;
  }

  render() {
    let list = [0, 1, 2, 3, 4, 5, 6];
    let size = DimensionWidth / 3;

    return (
      <View style={styles.container}>
        {list.map(function(value) {
          return <CalendarItem size={size} index={value} key={value} />
        })}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
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
