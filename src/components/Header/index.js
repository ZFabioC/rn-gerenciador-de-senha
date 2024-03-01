import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

import ButtonIcon from '../ButtonIcon';
import ModalLogout from './ModalLogout';
import styles from './style';

export default function Header({ title }) {

  const [visibleModal, setVisibleModal] = useState(false)
  const navigation = useNavigation()

  function returnLogin () {
    navigation.navigate('Login')
  }

 return (
   <View style={styles.container}>
        <View style={styles.containerTitle}>
            <Text style={styles.title}>{title}</Text>

            <ButtonIcon color={'white'} icon={'setting'} size={24} click={ () => setVisibleModal(!visibleModal)}/>
            
            <Modal visible={visibleModal} transparent={true}>
              <TouchableWithoutFeedback onPress={() => setVisibleModal(!visibleModal)}>
                <View style={styles.modalOverlay}/>
              </TouchableWithoutFeedback>
              
              <ModalLogout logout={() => returnLogin} />
            </Modal>
        </View>
   </View>
  );
}