import { StyleSheet } from 'react-native';
import { colors, fonts } from 'config';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: colors.white
  },
  info: {
    flex: 1
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    marginRight: 10
  },
  title: {
    marginRight: 20,
    fontSize: fonts.regular,
    fontWeight: '700'
  },
  subtitle: {
    fontSize: fonts.small,
    color: colors.inactive
  },
  icon: {
    fontSize: 20,
    color: colors.inactive
  }
});
