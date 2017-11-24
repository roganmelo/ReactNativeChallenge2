import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, RefreshControl } from 'react-native';
import { Card } from 'components';
import styles from './styles';

class Tab extends Component {
  state = {
    refreshing: false,
    issues: {
      all: [],
      opened: [],
      closed: []
    }
  };

  componentWillReceiveProps = nextProps => this.setState({ ...nextProps.screenProps });

  render = () => {
    const { navigation: { state } } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.issues[state.routeName.toLowerCase()]}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.state.fetch(this.state.name)}
            />
          }
          renderItem={({ item }) => (
            <Card data={item} onPress={this.state.showIssue(item.payload)} />
          )}
        />
      </View>
    );
  }
}

Tab.propTypes = {
  screenProps: PropTypes.shape({
    issues: PropTypes.shape({
      all: PropTypes.array.isRequired,
      opened: PropTypes.array.isRequired,
      closed: PropTypes.array.isRequired
    }).isRequired,
    refreshing: PropTypes.bool.isRequired,
    showIssue: PropTypes.func.isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({ name: PropTypes.string.isRequired }),
      routeName: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Tab;
