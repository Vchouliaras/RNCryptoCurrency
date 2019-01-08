import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginBottom: 60,
  },
  cells: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    paddingTop: 15,
  },
  logo: {
    width: 30,
    height: 30,
  },
  subtitle: {
    alignSelf: 'center',
  },
})

export default styles
