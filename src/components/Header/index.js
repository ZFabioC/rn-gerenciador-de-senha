import { View, Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import styles from './style';

export default function Header({ title }) {
 return (
   <View style={styles.container}>
        <View style={styles.containerTitle}>
            <Text style={styles.title}>{title}</Text>
            <AntDesign name="setting" size={24} color="white" />
        </View>
   </View>
  );
}