import { View, TouchableOpacity, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native'

import Header from '../../../../components/Header';
import Input from './components/input';
import styles from './style';
import ButtonIcon from '../../../../components/ButtonIcon';

export default function SavePass() {

  const [platform, setPlatform] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [visibilityPassword, setVisibilityPassword] = useState(true)
  const route = useRoute()

  const generatedPass = route.params?.generatePass || ''

  useEffect(() => {
    if(generatedPass) {
      setPassword(generatedPass)
    }
  },[generatedPass])

 return (
   <View style={styles.container}>
    <Header title="Salvar senhas"/>

    <Input
      placeholder={'Informe a plataforma'}
      value={platform}
      onChangeText={(platform) => setPlatform(platform)}
      icon={'tagso'}
    />

    <Input
      placeholder={'Digite seu usuário'}
      value={user}
      onChangeText={(user) => setUser(user)}
      icon={'user'}
    />

    <View style={styles.containerPassword}>
      <Input
        placeholder={'Digite sua senha'}
        value={password}
        onChangeText={(pass) => setPassword(pass)}
        secureTextEntry={visibilityPassword}
        icon={'lock'}
      />

      <ButtonIcon 
        icon={'eye'} 
        color={'black'} 
        size={20}
        styles={styles.buttonViewPassword}
        click={() => setVisibilityPassword(!visibilityPassword)}
      />
    </View>

    <TouchableOpacity style={styles.buttonSignIn}>
      <Text style={styles.textButtonSignIn}>Cadastrar Credenciais</Text>
    </TouchableOpacity>

   </View>
  );
}