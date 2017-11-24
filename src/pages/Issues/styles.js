import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from 'config';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: (Platform.OS === 'ios') ? 30 : 10,
    backgroundColor: colors.white
  },
  headerIcon: {
    fontSize: fonts.regular
  },
  headerText: {
    flex: 1,
    alignItems: 'center'
  },
  headerTextContent: {
    fontSize: fonts.regular,
    fontWeight: '700'
  }
});
