import { TextInput, Text, View } from "react-native"
import styles from './style'

const InputText = (props) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.textContainer}
                placeholder={props.placeholder}
                placeholderTextColor={'#73676D'}
                multiline
                keyboardType={props.type}
                onChangeText={props.onChangeText} //o valor passado para o onChangeText será dado pelo pai (main.js)
            />

        </View>
    )
}

export default InputText