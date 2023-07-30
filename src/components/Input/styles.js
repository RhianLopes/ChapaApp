import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    color: COLORS.DIM_GRAY,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    height: 50,
    marginTop: 5,
  },
  input: {
    fontSize: 16,
    height: 50,
    marginTop: 5,
  }
})
