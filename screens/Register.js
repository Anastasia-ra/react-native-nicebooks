import { gql, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { colors } from '../styles/constants';

const styles = StyleSheet.create({
  globalContainer: {
    backgroundColor: colors.background,
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  pressable: {},
  text: {},
});

const createUser = gql`
  mutation CreateUser($email: String!, $username: String!, $password: String!) {
    createUser(email: $email, username: $username, password: $password) {
      user {
        id
        email
        username
        password_hash
        error
      }
    }
  }
`;

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createNewUser, { loading, error }] = useMutation(createUser);
  const [errorInfo, setErrorInfo] = useState('');

  async function submitRegistration(event) {
    event.preventDefault();

    try {
      const user = await createNewUser({
        variables: {
          username: username,
          email: email,
          password: password,
        },
      });

      if (user.data.createUser.error) {
        setErrorInfo(user.data.createUser.error);
        console.log(user.data.createUser.error);
        return;
      }
    } catch (err) {
      console.log('Error creating the user: ' + err);
    }
  }

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
        onPress={(e) => submitRegistration(e)}
      >
        <View>
          <Text style={styles.text}>Create an account</Text>
        </View>
      </Pressable>
    </View>
  );
}
