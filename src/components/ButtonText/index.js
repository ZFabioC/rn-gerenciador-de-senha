import { TouchableOpacity, Text } from 'react-native';

import styles from './style/'

export default function ButtonText({ text, click }) {
 return (
    <TouchableOpacity style={styles.button} onPress={click}>
        <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
}