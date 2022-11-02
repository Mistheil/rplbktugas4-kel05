import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

function App(){
  // Hooks lifecyle untuk se,tState
    const [count, setCount] = useState(0);

  //  useEffect sepertto componentDidmount
   useEffect(() => {
    // Update the document title using the browser API
   alert('Helo Am Mount First')
  //  Clean UP Data Atau ComponentWillUnmount
    return function cleanup() {
    setCount(0)
    };
  });
return  (
    <View style={{justifyContent:'center', alignItems:'center', marginTop:200}}>
        <Text>Hitung Aku {count}</Text>
        <Button title='Hitung' onPress={() => setCount(count+1)}/>
    </View>
);
}
export default App
