import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {UseCountContext} from '../../ContextAPI/countContextProvider';
//import Comp1 from '../../comp1';
//import Comp2 from '../../comp2';

export default function TopView() {
  //const[input,setInput]=useState(0);
  //console.log(input);
  const countContext = UseCountContext();
  return (
    <View style={styles.container}>
      <Text style={{color: '#000', fontSize: 25}}>{countContext.count}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'blue',
          borderRadius: 5,
          marginVertical: 10,
          padding: 5,
        }}
        onPress={() => countContext.setCount(countContext.count + 1)}>
        <Text style={{fontSize: 25}}>Text me</Text>
      </TouchableOpacity>

      <Text style={{color: '#000', fontSize: 25}}>{countContext.count2}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'green',
          borderRadius: 5,
          marginVertical: 10,
          padding: 5,
        }}
        onPress={() => countContext.setCount2(countContext.count2 + 1)}>
        <Text style={{fontSize: 25}}>Text me</Text>
      </TouchableOpacity>

      <Text style={{color: '#000', fontSize: 25}}>{countContext.count3}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'red',
          borderRadius: 5,
          marginVertical: 10,
          padding: 5,
        }}
        onPress={() => countContext.setCount3(countContext.count3 + 1)}>
        <Text style={{fontSize: 25}}>Text me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
