import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputComponent from './src/components/TextInputComponents';
import ButtonComponent from './src/components/ButtonComponent';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [text, setText] = useState('');
  const [reversed, setReversed] = useState('');
  const [error, setError] = useState('');

  const reverseText = () => {
    if (text.length > 100) {
      setError('Metin 100 karakteri geçemez.');
      setReversed('');
      return;
    }
    setError('');
    setReversed(text.split('').reverse().join(''));
  };

  const clearText = () => {
    setText('');
    setReversed('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <TextInputComponent value={text} onChangeText={setText} />
      {error ? <Text style={styles.error} testID="error">{error}</Text> : null}
      <View style={styles.buttonRow}>
        <ButtonComponent onPress={reverseText} title="Tersine Çevir" testID="reverse-button" />
        <ButtonComponent onPress={clearText} title="Temizle" testID="clear-button" />
      </View>
      <Text testID="reversed-text" style={styles.result}>{reversed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

