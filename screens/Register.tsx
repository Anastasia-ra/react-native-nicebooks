import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { colors } from '../styles/constants';

export default function Register() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function createUser(
    username: string,
    email: string,
    password: string,
  ) {}

  return (
    <View style={styles.globalContainer}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Pressable
        style={styles.pressable}
        // buttonStyle={styles.button}
        // containerStyle={styles.buttonContainer}
        onPress={async () => await createUser(username, email, password)}
      >
        <Text style={styles.text}>Create an account</Text>
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
