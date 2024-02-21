import { View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native'

import Users from '../../../../services/database/Users';
import Header from '../../../../components/Header';
import PasswordCard from './PasswordCard';

import styles from './style/';

export default function SavedPass() {

  const [listPasswords, setListPassword] = useState([])
  const [clickedButtonDelete, setClickedButtonDelete] = useState(false)
  const focused = useIsFocused(false)
  
  const getUsers = () => {
    Users.getAllUsers()
      .then(list => setListPassword(list.reverse()))
      .catch(error => console.log(error))
  }

  const removeUser = (id) => {
    Users.removeUser(id)
  }

  useEffect(() => {
    getUsers()

    if(clickedButtonDelete) {
      setClickedButtonDelete(false)
    }
  }, [focused, clickedButtonDelete])

  return (
    <View style={styles.container}>
      <Header title={'Senhas Salvas'}/>   

      <View style={styles.content}>
        <FlatList
          style={{width: '90%'}}
          data={listPasswords}
          renderItem={({ item }) => <PasswordCard data={item} removeItemId={removeUser} clickedButtonDelete={() => setClickedButtonDelete(!clickedButtonDelete)} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}