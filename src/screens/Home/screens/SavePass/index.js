import { View, TouchableOpacity, Text } from 'react-native';

import Header from '../../../../components/Header';
import styles from './style';
import Input from './components/input';
import { useState } from 'react';

export default function SavePass() {

  const [platform, setPlatform] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

 return (
   <View style={styles.container}>
    <Header title="Salvar senhas"/>

    <Input
      placeholder={'Informe a plataforma'}
      value={platform}
      onChangeText={(platform) => setPlatform(platform)}
      secureTextEntry={true}
      icon={'tagso'}
    />

    <Input
      placeholder={'Digite seu Usuário'}
      value={user}
      onChangeText={(user) => setUser(user)}
      secureTextEntry={false}
      icon={'user'}
    />

    <Input
      placeholder={'Digite sua senha'}
      value={password}
      onChangeText={(pass) => setPassword(pass)}
      secureTextEntry={true}
      icon={'lock'}
    />

    <TouchableOpacity style={styles.buttonSignIn}>
      <Text style={styles.textButtonSignIn}>Cadastrar Credenciais</Text>
    </TouchableOpacity>

   </View>
  );
}