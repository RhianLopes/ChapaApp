import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: '#E04747',
        alignItems: 'center',
        paddingBottom: 40
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#FFFFFF',
        marginLeft: width * 0.25
    },
    arrow: {
    
    },
    containerTitle: {
        marginLeft: 20,
        marginTop: 56,
        width: '100%',
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#FFFFFF',
    },
    card: {
        width: '90%',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        marginTop: 25,
        padding: 20
    },
    containerCardTitle: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    containerCardDestiny: {
        paddingTop: 10,
        flexDirection: 'row'
    },
    imageCardTrip: {
        marginTop: 8
    },
    labelCardTrip: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 5
    },
    containerCardFlags: {
        flexDirection: 'row',
        marginTop: 15,
    },
    containerCardFlag: {
        padding: 5,
        backgroundColor: '#F4F4F5',
        borderRadius: 10,
        marginRight: 5
    },
    containerCardFlagLabel: {
        color: '#636B7E'
    },
    containerCardValues: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    containerCardValueLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5
    },
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 30,
        marginBottom: 25,
        width: '100%'
    },
    containerCardButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    containerCardButton: {
        padding: 10,
        borderRadius: 10,
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#E04747',
        marginRight: 10
    },
    containerCardNoButton: {
        padding: 12,
        borderRadius: 10,
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginRight: 10
    },
    containerCardButtonLabel: {
        color: '#FFFFFF',
        fontWeight: '500'
    },
    containerCardButtonNoLabel: {
        color: '#E04747',
        fontWeight: '500'
    },
    buttonAllFreights: {
        padding: 10,
        marginTop: 20,
        marginBottom: 10
    },
    labelAllFreights: {
        color: '#FFFFFF',
        fontSize: 16
    },
    containerFlag: {
        backgroundColor: '#0AB15F',
        borderRadius: 8,
        padding: 5,
        marginRight: 20
    },
    containerFlagLabel: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold'
    },
    containerNoFlag: {
        backgroundColor: '#DDDFE4',
        borderRadius: 8,
        padding: 5
    },
    containerNoFlagLabel: {
        color: '#BABEC9',
        fontSize: 12,
        fontWeight: 'bold'
    },
});
  