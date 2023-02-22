import { StyleSheet } from "react-native";

export const TasksStyles = StyleSheet.create({

    container:{
        width: 327,
        height: 64,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#262626',
        marginBottom: 20
    },
    check:{
        width: 24,
        height: 24
    },
    text:{
        width: 235,
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 10,
        color: '#F2F2F2'
    },
    textCheck:{
        width: 235,
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 10,
        color: '#F2F2F2',
        textDecorationLine: 'line-through'
    },
    trash:{
        width: 40,
        height: 40,
        right: 0
    }

});