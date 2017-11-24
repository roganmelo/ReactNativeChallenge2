import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = ({ back, title }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={back}>
      <Icon name='angle-left' style={styles.headerIcon} />
    </TouchableOpacity>
    <View style={styles.headerText}>
      <Text style={styles.headerTextContent}>{title}</Text>
    </View>
  </View>
);

Header.propTypes = {
  back: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Header;
