'use strict';

let React = require('react-native');
let Constants = require('./src/Constants');
let Calendar = require('./src/Calendar');

let {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  StatusBarIOS,
} = React;

class AdventCalendar extends React.Component {
  componentWillMount() {
    StatusBarIOS.setStyle('light-content');
  }

  render() {
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        component: Calendar,
        title: 'Welcome',
        backButtonTitle: 'Back',
      }}
      barTintColor={Constants.backgroundColor}
      tintColor={Constants.textColor}
      titleTextColor={Constants.textColor}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('AdventCalendar', () => AdventCalendar);
