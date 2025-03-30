import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import CustomButton from './src/components/CustomButton';
import styles from './src/styles/global';

export default function App() {
  const [message, setMessage] = useState('¡Bienvenido a mi App!');
  const [inputText, setInputText] = useState('');

  let [fontsLoaded] = useFonts({
    'CustomFont': require('./assets/fonts/CustomFont.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground 
      source={require('./assets/images/background.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
        <CustomButton title="Presionar" onPress={() => setMessage(inputText)} />
        <TextInput 
          style={styles.input} 
          placeholder="Escribe aquí por favor" 
          onChangeText={setInputText}
          value={inputText}
        />
      </View>
    </ImageBackground>
  );
}