import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/constants';

export default function RandomQuotes() {
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
    <View style={styles.globalContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>{quote}</Text>
      </View>
      <View style={styles.roundPart} />
      <View style={styles.lowerPart}>
        <Pressable
          style={styles.pressable}
          // buttonStyle={styles.button}
          // containerStyle={styles.buttonContainer}
          onPress={async () => await getRandomQuote()}
        >
          <Text style={styles.lowerPartText}>
            Click here to get a new quote{' '}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    position: 'relative',
    top: 130,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'serif',
    color: colors.textColor,
    fontSize: 26,
    margin: 10,
    alignSelf: 'stretch',
    marginBottom: 20,
    textAlign: 'center',
  },
  roundPart: {
    position: 'relative',
    top: 220,
    right: 45,
    backgroundColor: '#718B7B',
    borderRadius: 500,
    width: 450,
    height: 380,
    alignSelf: 'stretch',
  },
  lowerPart: {
    backgroundColor: '#718B7B',
    position: 'relative',
    // bottom: 50,
    // height: 600,
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
  },
  lowerPartText: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 40,
    textAlign: 'center',
  },
  pressable: {
    position: 'relative',
    bottom: 70,
    width: 250,
    height: 300,
  },
});
