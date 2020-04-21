import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
 
export const Example = () => {
  const [foo, setFoo] = useState(30);
 
  useEffect(() => {
    if (foo >= 42) {
      setFoo(42);
    }
  }, [foo])
 
  return (
    <View style={{flex:1}}> 
      <Text style={{padding:50}}>Helloo is {foo}.</Text>
      <Button onPress={() => setFoo(foo + 1)} title='Increase Foo!' />
    </View>
  )
}
export default Example;