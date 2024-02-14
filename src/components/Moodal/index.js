import { Modal, Text, View, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import styles from './style';
import Button from '../ButtonIcon';

export default function Moodal({ visible, onClose }) {

  return (
  <Modal transparent={true} visible={visible}>
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text>Modal aqui</Text> 
        <Button text={'Salvar Senha'}/>
      </View>
    </View>
  </Modal>
  );
}