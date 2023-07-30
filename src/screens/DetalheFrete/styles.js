import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    label: {
        color: '#FFFFFF',
        marginLeft: 10,
        fontSize: 18
    }
});
  