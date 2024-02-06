import { View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';


export default function Input({ placeholder, value, onChangeText, secureTextEntry, icon }) {
 return (
    <View style={styles.containerInput}>
        <AntDesign name={icon} size={28} color="black" /> 

        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    </View>
  );
}