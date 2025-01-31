import React from 'react';
import { Button, Linking, View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Mobile App!</Text>
      <Button
        title="Visit GitHub Repository"
        onPress={() => Linking.openURL('https://github.com/cReAtOR0009/your-project-name')}
      />
      <Button
        title="HNG Hire - React Native Developers"
        onPress={() => Linking.openURL('https://hng.tech/hire/react-native')}
      />
      <Button
        title="Telex"
        onPress={() => Linking.openURL('https://telex.com')}
      />
      <Button
        title="Delve"
        onPress={() => Linking.openURL('https://delve.com')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});