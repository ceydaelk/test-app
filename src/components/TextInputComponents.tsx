import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

const TextInputComponent: React.FC<Props> = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Metin girin"
      value={value}
      onChangeText={onChangeText}
      testID="text-input"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
});

export default TextInputComponent;
