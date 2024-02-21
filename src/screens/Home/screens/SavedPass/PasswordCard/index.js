import { View, Text, Alert } from 'react-native';
import { useState } from 'react';
import * as Clipboard from 'expo-clipboard'

import ButtonIcon from '../../../../../components/ButtonIcon';

import styles from './style/';

export default function PasswordCard({ data, removeItemId, clickedButtonDelete }) {

  const { id, platform, user, password } = data

  const [visiblePassword, setVisiblePassword] = useState(false)

  const viewPassword = () => {
    setVisiblePassword(!visiblePassword)
  }

  const copyToClipboard = async (string) => {
    await Clipboard.setStringAsync(string)
  }

  const deleteItem = () => {
    Alert.alert(
      "Deletar",
      "Tem certeza que deseja deletar este item ?",
      [
        {text: 'OK', onPress: () => {
          removeItemId(id) 
          clickedButtonDelete()
        }},
        {text: 'Cancelar'}
      ],
      {cancelable: false}
    )
  }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <ButtonIcon icon={'delete'} size={20} color={'black'} click={deleteItem}/>
                
                <Text style={styles.title}>{platform}</Text>
                
                <ButtonIcon icon={'eye'} size={20} color={'black'} click={viewPassword}/>
            </View>

            <View style={styles.info}>
                <Text style={styles.subTitle}>{user}</Text>
                <ButtonIcon icon={'copy1'} size={20} color={'black'} click={() => copyToClipboard(user)} />
            </View>

            <View style={styles.info}>
                <Text style={styles.subTitle}>{visiblePassword ? password : '*'.repeat(password.length) }</Text>
                <ButtonIcon icon={'copy1'} size={20} color={'black'} click={() => copyToClipboard(password)}/>
            </View>
        </View>
    );
}