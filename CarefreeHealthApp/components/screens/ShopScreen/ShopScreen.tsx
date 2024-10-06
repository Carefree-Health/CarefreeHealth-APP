import { useNavigation } from '@react-navigation/native'
import { Text, Button, View } from 'react-native'
import useCarefreeNavigation from '@/components/navigator/hooks/useCarefreeNavigation';

export default function ShopScreen() {

    const {navigation} = useCarefreeNavigation();

    return (
        <View>
            <Text>ShopScreen</Text>
            <Button title='마이페이지로 이동' onPress={() => navigation.navigate('MyPage')}></Button>
        </View>
    )
}