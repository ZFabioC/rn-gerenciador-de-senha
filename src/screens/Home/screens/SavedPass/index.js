import { View, Text, FlatList } from 'react-native';

import styles from './style/';

import Header from '../../../../components/Header';
import PasswordCard from './PasswordCard';

export default function SavedPass() {

  const DATA = [
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
  ];

  return (
    <View style={styles.container}>
      <Header title={'Senhas Salvas'}/>   

      <View style={styles.content}>
        <FlatList
        style={{width: '90%'}}
        data={DATA}
        renderItem={({ item }) => <PasswordCard platform={item.platform} user={item.user} password={item.password} />}
        keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}