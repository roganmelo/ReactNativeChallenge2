import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, AsyncStorage, RefreshControl } from 'react-native';
import { Card } from 'components';
import { api } from 'config';
import Header from './Header';
import styles from './styles';

export default class Repositories extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired
    }).isRequired
  }

  static navigationOptions = {
    header: ({ scene }) => (
      <Header
        add={name => scene.route.params.add(name)}
        clear={() => scene.route.params.clear()}
      />
    )
  };

  state = {
    refreshing: false,
    repositories: []
  };

  componentWillMount = async () => {
    this.fetch();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      add: this.add,
      clear: this.clear
    });
  }

  fetch = async () => {
    this.setState({ refreshing: true });
    const repositories = JSON.parse(await AsyncStorage.getItem('@repositories'));
    this.setState({ refreshing: false, repositories });
  }

  add = async (name) => {
    if(!name) {
      alert('\n😠\n\nOwww cara!\n\nVocê esqueceu de inserir o nome do repositório');
      return;
    }

    try {
      const repository = await api.getRepository(name);
      const exists = this.state.repositories.some(item => item.name === repository.name);

      if(exists) {
        alert('\n😔\n\nOwww cara!\n\nEsse repositório já existe na lista');
        return;
      }

      const repositories = [...this.state.repositories, repository];
      await AsyncStorage.setItem('@repositories', JSON.stringify(repositories));
      this.setState({ repositories });
    } catch(err) {
      alert('\n😔\n\nOwww cara!\n\nEsse repositório não existe');
    }
  }

  clear = async () => {
    await AsyncStorage.clear();
    this.setState({ repositories: [] });
  }

  showIssues = name => () => {
    this.props.navigation.navigate('Issues', { name });
  }

  render = () => (
    <FlatList
      style={styles.container}
      data={this.state.repositories}
      keyExtractor={item => item.name}
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.fetch}
        />
      }
      renderItem={({ item }) => <Card data={item} onPress={this.showIssues(item.payload)} />}
    />
  );
}
