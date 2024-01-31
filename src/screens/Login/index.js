import { View,Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Login() {

  const navigation = useNavigation()

  function naveTo() {
    navigation.navigate('Home')
  }

 return (
   <View>
    <Text>Login</Text>
    <TouchableOpacity onPress={naveTo}>
        <Text>Login</Text>
    </TouchableOpacity>
   </View>
  );
}