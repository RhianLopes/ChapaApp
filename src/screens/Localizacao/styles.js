import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
    },
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 30,
        width: '100%'
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    containerTitle: {
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 20
    },
    containerDestiny: {
        marginLeft: 20,
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 20
    },
    containerInput: {
        marginLeft: 15
    },
    originLabel: {
        color: '#636B7E',
    },
    origin: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 18,
    },
    destiny: {
        marginTop: 20,
        width: width * 0.85
    },
    buttonCancel: {
        height: 50,
        width: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 40
    },
    labelCancel: {
        color: '#E04747',
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonTest: {
        backgroundColor: '#E04747',
        height: 50,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    labelTest: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    containerNext: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    }
});
  