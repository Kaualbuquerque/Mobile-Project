import { Text, TouchableOpacity } from "react-native"
import styles from "./style"

const SendButton = (props) => {
    return ( //a função usada no onPress será passada pelo pai (main.js)
        <TouchableOpacity style={styles.container} onPress={props.function}> 
            <Text style={styles.button}>Enviar</Text>
        </TouchableOpacity>
    )
}

export default SendButton