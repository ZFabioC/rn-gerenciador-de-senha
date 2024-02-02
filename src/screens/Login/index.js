import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import styles from './style';
import Footer from '../../components/Footer';

export default function Login() {

  const navigation = useNavigation()

  function navigateTo() {
    navigation.navigate('Home')
  }

 return (
  <View style={styles.container}>

    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/background-login.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Entrar</Text>
    </View>

    <View style={styles.containerLogin}>
      <View style={styles.containerInput}>
        <AntDesign name="lock" size={28} color="black" /> 

        <TextInput
          style={styles.input}
          // onChangeText={handleInputChange}
          // value={inputValue}
          placeholder="Digite sua senha"
        />
      </View>

      <TouchableOpacity style={styles.buttonSignIn} onPress={navigateTo}>
        <Text style={styles.textButtonSignIn}>Login</Text>
      </TouchableOpacity>
    </View>
    <Footer/>
  </View>
  );
}