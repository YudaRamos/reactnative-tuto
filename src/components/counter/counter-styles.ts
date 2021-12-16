/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import theme from '../../app/theme';
const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 40,
    height: 40
  },
  buttonStyle: {
    backgroundColor: 'transparent'
  },
  buttonTextStyle: {
    color: theme.colors.primary
  }
});

export default styles;
