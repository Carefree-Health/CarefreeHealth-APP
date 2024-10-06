import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { MainTabParamList, RootStackParamList } from '../types/navigate-type';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const useCarefreeNavigation = () =>{
    const navigation = useNavigation<
    // NativeStackNavigationProp<RootStackParamList>
    BottomTabNavigationProp<MainTabParamList>
    //   NativeStackNavigationProp<SignStackParamList> &
    //   NativeStackNavigationProp<SearchStackParamList> &
    //   NativeStackNavigationProp<CartStackParamList> &
    //   NativeStackNavigationProp<ChatStackParamList> &
    //   NativeStackNavigationProp<MapStackParamList> &
    //   NativeStackNavigationProp<ModalPresentationParamList> &
  >();
  
  return {navigation}
}

export default useCarefreeNavigation;