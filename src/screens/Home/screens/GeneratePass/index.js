import { View, Text, Image, Modal} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import Slider from '@react-native-community/slider';

import Header from '../../../../components/Header';
import ButtonText from '../../../../components/ButtonText';
import ModalPassword from '../../../../components/ModalPassword';

import styles from './style/';

export default function GeneratePass() {
  
  const [sizePassword, setSizePassword] = useState(10)
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()
  
  const basePassword = 'abcdefghijklmnopqrstuvwxyzçABCDEFGHIJKLMNOPQRSTUVWXYZÇ0123456789-!@#$%&*'
  
  const generatePass = () => {
    let pass = []
    
    for(let i=0; i<sizePassword; i++){
      const getPositionOfCharacter = Math.floor(Math.random() * basePassword.length)
      pass.push(basePassword[getPositionOfCharacter])
    }
    
    const removeSpaces = pass.join('')
    setPassword(removeSpaces)
    setModalVisible(!modalVisible)
  }
  
  const navigateAndSavePass = () => { 
    const generatePass = password

    navigation.navigate('Salvar Senha', { generatePass })
    setModalVisible(!modalVisible) 
  }

 return (
    <View style={styles.container}>
      <Header title={'Gerar uma senha'} />

      <Image
        style={styles.image}
        source={require('../../../../assets/cadeado-aberto.png')}
      />

      <Text style={styles.text}> Sua senha irá conter {sizePassword} caracteres!</Text>
      
      <View style={styles.containerSlider}>
        <Slider
          style={styles.slider}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor={'#09a5d9'}
          maximumTrackTintColor={'black'}
          thumbTintColor={'#09a5d9'}
          value={sizePassword}
          onValueChange={value => setSizePassword(value.toFixed(0))}
        />  
      </View>

      <ButtonText text={'Gerar Senha'} click={generatePass}/>

      <Modal visible={modalVisible} transparent={true}>
        <ModalPassword password={password} onClose={() => setModalVisible(!modalVisible)} navigate={navigateAndSavePass}/>
      </Modal>
    </View>
  );
}