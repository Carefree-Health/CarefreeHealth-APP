import { StyleSheet, View } from 'react-native'
import { RootStackNavigator } from './RootStackNavigator/RootStackNavigator'

export default function NavigationContainer() {
    return (
        <View style={styles.container}>
            <RootStackNavigator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})