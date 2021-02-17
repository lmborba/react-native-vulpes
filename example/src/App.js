import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Colors />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
