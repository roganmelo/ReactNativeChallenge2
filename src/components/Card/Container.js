import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const Card = ({ data, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: data.image }}
        />
      </View>
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>{data.name}</Text>
        <Text style={styles.subtitle}>{data.subtitle}</Text>
      </View>
      <View>
        <Icon name='angle-right' style={styles.icon} />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    payload: PropTypes.string.isRequired
  }).isRequired,
  onPress: PropTypes.func.isRequired
};

export default Card;
