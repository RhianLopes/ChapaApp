import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
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
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 30,
        width: '100%'
    },
    buttonNext: {
        backgroundColor: '#E04747',
        height: 50,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    labelNext: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    containerNext: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    containerRadio: {
        marginLeft: 20
    },
    radio: {
        flexDirection: 'row',
        marginTop: 10
    },
    radioLabel: {
        marginTop: 4,
        fontSize: 18,
        color: '#636B7E',
        fontWeight: 'bold'
    },
    radioSubLabel: {
        fontWeight: 'normal'
    }
});
  