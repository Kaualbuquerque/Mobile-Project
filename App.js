import { StatusBar } from 'expo-status-bar';
import { Keyboard } from 'react-native';
import { useState, useEffect } from 'react';

//importando icones
import { MaterialCommunityIcons } from '@expo/vector-icons';

//importando bibliotacas para fazer o tab navigator
import 'react-native-gesture-handler';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//páginas importadas
import CommentPage from './Pages/CommentsPage';
import MainPage from './Pages/Main';

const Tab = createBottomTabNavigator()


export default function App() {

  const [Dono, setDono] = useState();
  const [Nome, setNome] = useState();
  const [Idade, setIdade] = useState();
  const [Files, setFiles] = useState([]);

  const sendComments = () => {
    const fileId = Date.now() + Math.random();
    setFiles([...Files, { Dono, Nome, Idade, id: fileId }]);
    Keyboard.dismiss();
  };

  const deletFile = (fileId) => {
    const updatedFile = Files.filter((file) => file.id !== fileId);
    setFiles(updatedFile);
  };

  useEffect(() => {
    console.log(Files);
  }, [Files]);


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {

            let iconName;
            const isFocused = useIsFocused();
            if (route.name === 'Adicionar uma nova ficha') {
              if (isFocused) {
                iconName = 'comment-plus';
                color = "#769BEC"
              } else {
                iconName = 'comment-plus-outline';
              }
            } else if (route.name === 'Ficha dos clientes') {
              if (isFocused) {
                iconName = 'comment-text-multiple';
                color = "#769BEC"
              } else {
                iconName = 'comment-text-multiple-outline';
              }
            } else if (route.name === 'perfil') {
              if (isFocused) {
                iconName = 'comment-text-multiple';
              } else {
                iconName = 'comment-text-multiple-outline';
              }
            }
            return <MaterialCommunityIcons name={iconName} size={35} color={color} />;
          },
        })
        }>

        <Tab.Screen name='Adicionar uma nova ficha'>
          {(props) => <MainPage Dono={setDono} Nome={setNome} Idade={setIdade} function={sendComments} />}
        </Tab.Screen>

        <Tab.Screen name='Ficha dos clientes'>
          {props => <CommentPage data={Files} function={deletFile} />}
        </Tab.Screen>

      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer >


  );
}
