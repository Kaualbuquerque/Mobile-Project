import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",

        margin: 10,
    },

    dataContainer: {
        backgroundColor: '#EEF3FF',

        padding: 10,
        width: 300,
        borderWidth: 1,
        borderRadius: 10,

        shadowColor: '#8990A3',
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: { width: 4, height: 4 },

    },

    dataContainerText:{
        fontSize: 20
    },

    trashContainer: {
        backgroundColor: '#769BEC',

        display: "flex",
        alignContent: "center",
        justifyContent: "center",

        marginLeft: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,

        shadowColor: '#8990A3',
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: { width: 4, height: 4 },
    }

})

export default styles