import { View, Text, FlatList } from 'react-native';

import styles from './style/';

import Header from '../../../../components/Header';
import PasswordCard from './PasswordCard';
import { useEffect, useState } from 'react';

export default function SavedPass() {

  const [id, setId] = useState('')
  const [data, setData] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      platform: 'Instagram',
      user: 'First Item',
      password: '123456678',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      platform: 'Instagram',
      user: 'Second Item',
      password: '123456678',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      platform: 'Instagram',
      user: 'Third Item',
      password: '123456678',
    },
  ])

  const removeItem = (id) => {
    const filterArray = data.filter(item => item.id !== id)
    setData(filterArray)
  }


  return (
    <View style={styles.container}>
      <Header title={'Senhas Salvas'}/>   

      <View style={styles.content}>
        <FlatList
        style={{width: '90%'}}
        data={data}
        renderItem={({ item }) => <PasswordCard data={item} removeItemId={removeItem}/>}
        keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}