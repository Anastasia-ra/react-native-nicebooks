import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/constants';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 32 }]}>Book shelf</Text>
      <Text style={styles.text}>Categories</Text>
      <Text style={styles.text}>Latest additions</Text>
      <Text style={styles.text}>See more</Text>
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
