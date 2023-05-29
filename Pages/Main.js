import { SafeAreaView, StyleSheet, View, Keyboard } from 'react-native';
import InputText from '../Components/InputText';
import SendButton from '../Components/SendButton';
import { TouchableOpacity } from 'react-native';

const MainPage = (props) => {

    const dismissKeyboard = () => {
        Keyboard.dismiss()
    }
    return (
        <TouchableOpacity activeOpacity={1} onPress={dismissKeyboard} style={styles.container}>
            <View style={styles.container2}>
                <View >
                    <InputText label={"Dono"} onChangeText={props.Dono} placeholder={"Nome do dono"} />
                    <InputText label={"Nome"} onChangeText={props.Nome} placeholder={"Nome do animal"} />
                    <InputText label={"Idade"} type={'numeric'} onChangeText={props.Idade} placeholder={"Idade do animal"} />
                </View>

                <SendButton function={props.function} />
            </View>
        </TouchableOpacity>
    );
};

export default MainPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B3BEDE",

        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    container2: {
        backgroundColor: "#E3E4FF",

        paddingVertical: 30,
        paddingHorizontal: 10,

        borderRadius: 10,

        shadowColor: '#9494A6',
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: { height: 2, width: 0 }
    },
});
