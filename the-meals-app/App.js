import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


/* konfigurasi font */
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
/* konfigurasi font */


export default function App() {
  /* implement Font */
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}></AppLoading>
    );
  };
  /* implement Font */

  return (
    <View style={styles.container}>
      <Text> app </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});