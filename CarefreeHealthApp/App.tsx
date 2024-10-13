import React, { useEffect } from 'react';
import "./global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { RootStackNavigator } from '@/components/navigator/RootStackNavigator/RootStackNavigator';
import SplashScreen from "react-native-splash-screen";
import { initializeKakaoSDK } from '@react-native-kakao/core';
import {GestureHandlerRootView} from "react-native-gesture-handler";

function App(): React.JSX.Element {

    // 카카오 로그인 SDK 초기화
  initializeKakaoSDK('ffed0194fdd42580ea3571b6662e95d0');
  
  useEffect(() => {
      SplashScreen.hide();
  },[]);

  return (
      <GestureHandlerRootView style={styles.container}>
        <GluestackUIProvider mode="light">
            <SafeAreaView style={styles.container}>
              <NavigationContainer>
                <RootStackNavigator />
              </NavigationContainer>
            </SafeAreaView>
        </GluestackUIProvider>
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
