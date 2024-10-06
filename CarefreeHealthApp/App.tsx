import React, { useEffect } from 'react';
import "./global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import { RootStackNavigator } from '@/components/navigator/RootStackNavigator/RootStackNavigator';
import SplashScreen from "react-native-splash-screen";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  useEffect(() => {
      SplashScreen.hide();
  },[]);

  return (
    <GluestackUIProvider mode="light">
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <RootStackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
