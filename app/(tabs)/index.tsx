import React from 'react';
import { TouchableOpacity, Linking, View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stage 0 Mobile App by Creator</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://github.com/cReAtOR0009/MobileApp_Stage_0.git')}
        >
        <Text style={styles.buttonText}>Visit GitHub Repository</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonHNG]}
        onPress={() => Linking.openURL('http://hng.tech/hire/flutter-developers')}
     >
        <Text style={styles.buttonText}>HNG Hire - React Native Developers</Text>
      </TouchableOpacity>


      <TouchableOpacity
       style={[styles.button, styles.buttonTelex]}
        onPress={() => Linking.openURL('https://telex.im')}
        >
        <Text style={styles.buttonText}>Telex</Text>
      </TouchableOpacity>


      <TouchableOpacity
       style={[styles.button, styles.buttonDelve]}
        onPress={() => Linking.openURL('https://delve.fun')}
       >
        <Text style={styles.buttonText}>Delve</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap:20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color:"#007BFF"
  }, 
  button: {
    backgroundColor: '#007BFF', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, 
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonHNG: {
    backgroundColor: '#FF5733', 
  },
  buttonTelex: {
    backgroundColor: '#28A745', 
  },
  buttonDelve: {
    backgroundColor: '#6F42C1', 
  },
});