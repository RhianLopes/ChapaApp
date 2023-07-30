import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.9
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 18,
        marginTop: 10,
        width: width * 0.90,
        textAlign: 'center',
        color: '#636B7E'
    },
    buttonTest: {
        backgroundColor: '#E04747',
        height: 50,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        position: 'absolute'
    },
    labelTest: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    tags: {
        marginTop: 10,
    }
});
  