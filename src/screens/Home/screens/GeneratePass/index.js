import { View, Text, Image} from 'react-native';
import { useState } from 'react';
import Slider from '@react-native-community/slider';

import Header from '../../../../components/Header';
import Button from '../../../../components/Button';
import Moodal from '../../../../components/Moodal';

import styles from './style/';

export default function GeneratePass() {

  const [sizePassword, setSizePassword] = useState(10)
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

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

      <Button text={'Gerar Senha'} click={generatePass}/>

      <Moodal visible={modalVisible} onClose={() => setModalVisible(!modalVisible)}/>
      
      
    </View>
  );
}