import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigator from '@/components/navigator/MainTabNavigator/MainTabNavigator.tsx';


const Stack = createNativeStackNavigator();

export const RootStackNavigator = () =>{
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="MainTabNavigator"
            component={MainTabNavigator}
            // stack navigator를 중첩할때마다 헤더가 하나씩 늘어나기 때문에 header hide처리
            // (추후 bottomTab 하위에 shared stack이 추가되는 케이스 고려)
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    )
}

// type RootStackParamList = {
//   MainTabNavigator: undefined; // 'MainTabNavigator'에는 매개변수가 전달되지 않음
//   // 다른 스크린들도 추가 가능:
//   // Profile: { userId: string };
//   // Settings: undefined;
// };