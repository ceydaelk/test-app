import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  onPress: () => void;
  title: string;
  testID?: string;
}

const ButtonComponent: React.FC<Props> = ({ onPress, title, testID }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} testID={testID}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginRight: 8,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default ButtonComponent;