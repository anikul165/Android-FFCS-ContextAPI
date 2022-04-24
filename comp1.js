import {useState} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

export default function Comp1({count}) {
  return (
    <View style={styles.container}>
      <Text>Component 1</Text>
      <StatusBar style="auto" />
      <Text style={count > 5 ? {color: 'green'} : {color: 'blue'}}>
        {count}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
