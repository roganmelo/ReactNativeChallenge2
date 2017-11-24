import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from 'config';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: (Platform.OS === 'ios') ? 30 : 10,
    backgroundColor: colors.white
  },
  headerInput: {
    flex: 1,
    fontSize: fonts.small,
    padding: 7,
    borderRadius: 5,
    backgroundColor: colors.background
  },
  headerIcon: {
    marginLeft: 20,
    fontSize: fonts.regular
  }
});
