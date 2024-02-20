import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './style/'

export default function ButtonIcon({ icon, size, color, styles, click }) {
  return (
    <TouchableOpacity onPress={click}>
      <AntDesign name={icon} size={size} style={styles} color={color} />
    </TouchableOpacity>
  );
}