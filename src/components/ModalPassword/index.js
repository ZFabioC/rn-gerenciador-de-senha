import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ButtonIcon from '../ButtonIcon'
import ButtonSave from './ButtonSave';
import styles from './style';

export default function ModalPassword({ password, onClose, navigate }) {

  return (
  <View style={styles.container}>
    <View style={styles.content}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.containerPassword}>
        <Text>{password}</Text> 
        <ButtonIcon icon={'copy1'} size={22} color={'black'} />
      </View>

      <ButtonSave text={'Salvar Senha'} click={navigate}/>
    </View>
  </View>
  );
}