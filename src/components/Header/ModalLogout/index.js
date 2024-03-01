import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function ModalLogout({ logout }) {
 return (
   <View style={styles.container}>
        <TouchableOpacity style={styles.buttonLogout} onPress={logout()}>
            <Text style={styles.textButtonLogout}>Logout</Text>
        </TouchableOpacity>
   </View>
  );
}