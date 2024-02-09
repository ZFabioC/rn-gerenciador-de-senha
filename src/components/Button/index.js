import { TouchableOpacity, Text } from 'react-native';

import styles from '../Button/style'

export default function Button({ text, click }) {
 return (
    <TouchableOpacity style={styles.button} onPress={click}>
        <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
}