import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Header extends Component {
  state = { name: '' };

  add = () => {
    const { name } = this.state;
    this.props.add(name);
    this.setState({ name: '' });
  }

  clear = () => {
    this.props.clear();
  }

  render = () => (
    <View style={styles.header}>
      <TextInput
        underlineColorAndroid='transparent'
        autoCorrect={false}
        autoCapitalize='none'
        placeholder='Adicionar repositório'
        style={styles.headerInput}
        onChangeText={name => this.setState({ name })}
        value={this.state.name}
      />
      <TouchableOpacity onPress={this.add}>
        <Icon name='plus' style={styles.headerIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.clear}>
        <Icon name='trash-o' style={styles.headerIcon} />
      </TouchableOpacity>
    </View>
  );
}

Header.propTypes = {
  add: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
};
