import { View, Text, TouchableOpacity } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';


import styles from './style'

const Comments = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.dataContainer}>
                <Text style={styles.dataContainerText}>Dono(a) - {props.Dono}</Text>
                <Text style={styles.dataContainerText}>Nome - {props.Nome}</Text>
                <Text style={styles.dataContainerText}>Idade - {props.Idade} anos</Text>
            </View>
            <TouchableOpacity style={styles.trashContainer} onPress={() => props.function(props.id)} >
                <FontAwesome5 name="trash-alt" size={24} color="#EEF3FF" />
            </TouchableOpacity>
        </View>
    )
}

export default Comments