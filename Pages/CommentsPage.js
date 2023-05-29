import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Comments from "../Components/Comments/Index";

const CommentPage = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={props.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Comments Dono={item.Dono} Nome={item.Nome} Idade={item.Idade} function={() => props.function(item.id)} />}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B3BEDE',

        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default CommentPage