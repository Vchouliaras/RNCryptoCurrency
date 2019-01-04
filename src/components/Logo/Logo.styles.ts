import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cells: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 30,
    height: 30,
  },
  subtitle: {
    alignSelf: 'center',
    fontSize: 18,
    opacity: 0.8,
  },
  colorLabel: {
    width: 10,
    height: 10,
    position: 'absolute',
    right: -17,
  },
})

export default styles
