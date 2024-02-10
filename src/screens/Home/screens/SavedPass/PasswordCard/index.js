import { View, Text } from 'react-native';

import ButtonIcon from '../../../../../components/ButtonIcon';

import styles from './style/';

export default function PasswordCard({platform, user, password}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>{platform}</Text>
            </View>
            <Text style={styles.semiTitle}>{user}</Text>
            <Text style={styles.semiTitle}>{password}</Text>
            <ButtonIcon icon={'delete'} size={20} color={'black'} styles={styles.button}/>
        </View>
    );
}