import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ButtonIcon from '../ButtonIcon'
import ButtonSave from './ButtonSave';
import styles from './style';

export default function ModalPassword({ password, onClose, navigate }) {

  return (
  <View style={styles.container}>

    <View style={styles.content}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Senha Gerada</Text>
      </View>

      <View style={styles.containerPassword}>
        <Text>{password}</Text> 
        <ButtonIcon icon={'copy1'} size={22} color={'black'} />
      </View>

      <ButtonSave text={'Salvar Senha'} click={navigate}/>
      
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>

  </View>
  );
}