import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DailyExerciseScreen from '../Screens/DailyExerciseScreen/DailyExerciseScreen';
import CommunityScreen from '../Screens/CommunityScreen/CommunityScreen';
import MyPageScreen from '../Screens/MyPageScreen/MyPageScreen';
import ShopScreen from '../Screens/ShopScreen/ShopScreen';
import MainScreen from '../Screens/MainScreen/MainScreen';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Main'>
      <Tab.Screen name="Main" 
                  component={MainScreen}
                  options={{
                    title: '홈',
                    tabBarIcon: () => (
                      <MatIcon name="home-filled" color={'grey'}/>
                    ),
                    headerShown: false
                  }}
      />
      <Tab.Screen name="DailyExercise" 
                  component={DailyExerciseScreen} 
                  options={{
                    title: '오늘의 운동',
                    tabBarIcon: () => (
                      <FeatherIcon name="activity" color={'grey'}/>
                    ),
                  }}
      />
      <Tab.Screen name="Community" 
                  component={CommunityScreen} 
                  options={{
                    title: '커뮤니티',
                    tabBarIcon: () => (
                      <IoniIcon name="share-social-outline" color={'grey'}/>
                    ),
                  }}
      />
      <Tab.Screen name="Shop" 
                  component={ShopScreen}
                  options={{
                    title: '쇼핑',
                    tabBarIcon: () => (
                      <MaterialCommunityIcon name="shopping-outline" color={'grey'}/>
                    ),
                  }}
      />
      <Tab.Screen name="MyPage" 
                  component={MyPageScreen}
                  options={{
                    title: '내 정보',
                    tabBarIcon: () => (
                      <AntDesignIcon name="user" color={'grey'}/>
                    ),
                  }}
      />
    </Tab.Navigator>
  );
}