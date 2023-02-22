import { StyleSheet } from "react-native";


export const HomeStyles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#1A1A1A',
        marginTop: 24,
        alignItems: 'center'
    },
    header:{
        display:'flex',
        alignItems: 'center',
        width: '100%',
        height: 173,
        backgroundColor: '#0D0D0D',
    },
    logo:{
        width: 110.34,
        height: 32,
        marginTop: 46
    },
    containerInput:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnPlus:{
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -22,
        backgroundColor: '#4EA8DE',
        borderRadius: 6,
        marginLeft: 8
    },
    iconePlus:{
        width: 18,
        height: 18,
    },
    input:{
        width: 271,
        height: 54,
        marginTop: -24,
        backgroundColor: '#262626',
        borderRadius: 6,
        paddingLeft: 16,
        color: '#F2F2F2',
        fontSize: 16,
    },
    accountants:{
        width: 327,
        height: 19,
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25
    },
    textCreate:{
        width: 'auto',
        fontSize: 14,
        color: '#4EA8DE',
        fontWeight: 'bold'
    },
    textCompleted:{
        width: 'auto',
        fontSize: 14,
        color: '#8284FA',
        fontWeight: 'bold'
    },
    counter:{
        width: 25,
        height: 19,
        fontSize: 12,
        marginLeft: -110,
        fontWeight: 'bold',
        color: '#D9D9D9',
        backgroundColor: '#333333',
        borderRadius: 999,
        textAlign: 'center'
    },
    list:{
        width: 327,
        marginTop: 20,
        marginBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#333333',
        padding: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconeLista:{
        width: 56,
        height: 56,
        marginBottom: 20
    },
    textEmpty:{
        color: '#808080', 
        fontSize: 14, 
        width: 327,
        textAlign: 'center'
    }
});