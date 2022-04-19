import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/constants';
import { Link } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 32 }]}>Book shelf</Text>
      <Text style={styles.text}>Categories</Text>
      <Text style={styles.text}>Latest additions</Text>
      <Text style={styles.text}>See more</Text>
      {/* <Link to={{ screen: 'RandomQuotes' }}>Go to Random Quotes Generator</Link> */}
      <Button
        title="Random Quotes"
        // buttonStyle={styles.button}
        // containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate('RandomQuotes')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'serif',
    color: colors.textColor,
    fontSize: 24,
  },
});
