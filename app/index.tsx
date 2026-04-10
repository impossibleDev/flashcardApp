import { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

const randomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function App() {
  const [btnColor, setBtnColor] = useState('#4A90E2');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/300/200' }}
        style={styles.image}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: btnColor }]}
        onPress={() => setBtnColor(randomColor())}
      >
        <Text style={styles.buttonText}>Press me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    gap: 24,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 12,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});