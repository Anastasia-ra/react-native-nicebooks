import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../styles/constants';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function logUser(username: string, password: string) {}

  return (
    <View style={styles.globalContainer}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Pressable
        style={styles.pressable}
        // buttonStyle={styles.button}
        // containerStyle={styles.buttonContainer}
        onPress={async () => await logUser(username, password)}
      >
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {},
  input: {},
  pressable: {},
  text: {},
});
