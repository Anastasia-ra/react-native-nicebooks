import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/constants';
import { Button, Input } from 'react-native-elements';

export default function RandomQuotes({ navigation }) {
  const [quote, setQuote] = useState<string>('Get ready to be inspired');

  async function getRandomQuote() {
    const apiUrl = 'https://zenquotes.io/api/random/';

    const response = await fetch(apiUrl);
    const quoteResponse = await response.json();
    console.log(quoteResponse);
    const quote2 = quoteResponse[0].q;
    console.log(quote2, typeof quote2);
    setQuote(quote2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quote}</Text>
      <Button
        title="Display random quote"
        // buttonStyle={styles.button}
        // containerStyle={styles.buttonContainer}
        onPress={async () => await getRandomQuote()}
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
