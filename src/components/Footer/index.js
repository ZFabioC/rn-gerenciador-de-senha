import { View, Text } from 'react-native';

import styles from './style';

export default function Footer() {
 return (
   <View style={styles.footer}>
        <Text style={styles.footerText} >© Fábio 2024</Text>
   </View>
  );
}