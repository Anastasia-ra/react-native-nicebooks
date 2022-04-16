import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './styles/constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nice books!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    color: colors.text,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
