import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { api, colors, fonts } from 'config';
import Header from './Header';
import Tab from './Tab';

const Tabs = TabNavigator({
  All: {
    screen: Tab,
    navigationOptions: {
      tabBarLabel: 'Todas'
    }
  },
  Opened: {
    screen: Tab,
    navigationOptions: {
      tabBarLabel: 'Abertas'
    }
  },
  Closed: {
    screen: Tab,
    navigationOptions: {
      tabBarLabel: 'Fechadas'
    }
  }
}, {
  tabBarPosition: 'top',
  tabBarOptions: {
    showLabel: true,
    showIcon: false,
    // animationEnabled: true,
    // swipeEnabled: true,
    activeTintColor: colors.activefiltersColor,
    inactiveTintColor: colors.filtersColor,
    labelStyle: {
      fontSize: fonts.small,
      fontWeight: '700'
    },
    style: {
      height: 'auto',
      margin: 20,
      marginBottom: 10,
      padding: 7,
      borderRadius: 5,
      borderTopWidth: 0,
      backgroundColor: colors.filtersBackground
    }
  }
});

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({ name: PropTypes.string.isRequired })
      }).isRequired
    }).isRequired
  }

  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'All',
    header: (
      <Header
        back={() => navigation.goBack()}
        title={navigation.state.params.name}
      />
    )
  })

  state = {
    refreshing: false,
    issues: {
      all: [],
      opened: [],
      closed: []
    }
  };

  componentWillMount = async () => {
    this.fetch(this.props.navigation.state.params.name);
  }

  fetch = async (name) => {
    this.setState({ refreshing: true });
    const issues = await api.getIssues(name);
    this.setState({
      refreshing: false,
      issues: {
        all: issues,
        opened: issues.filter(issue => issue.state === 'open'),
        closed: issues.filter(issue => issue.state === 'closed')
      }
    });
  }

  showIssue = url => () => {
    Linking.openURL(url);
  }

  render = () => (
    <Tabs
      screenProps={{
        name: this.props.navigation.state.params.name,
        issues: this.state.issues,
        refreshing: this.state.refreshing,
        showIssue: this.showIssue,
        fetch: this.fetch
      }}
    />
  );
}
