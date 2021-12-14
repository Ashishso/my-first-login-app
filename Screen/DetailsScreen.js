import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';


function DetailsScreen  ({navigation})  {
  return (
    <View style={styles.container}>
    <View style={styles.item}>
    <Text> details Screen </Text>
    <Button
    title='go to details screen......again'
    onPress={() => navigation.push('HomeScreen')}
    />
    </View>
    <View style={styles.item}>
    <Button
    title='go to home'
    onPress={() =>  navigation.navigate('DetalsScreen')}
    />
    </View>
    <View style={styles.item}>
    <Button
    title='go back'
    onPress={() =>  navigation.goBack('')}
    /> 
    </View>
    <View style={styles.item}>
    <Button
    title='go to first screen'
    onPress={() => navigation.popToTop('')}
    />
    </View>
    </View>

  )
}


const styles = StyleSheet.create ({
  container:{
     justifyContent:'center',
     alignItems:'center',
     flex:1,
     
  },

  item:{
  
    
    margin:10
  }

})

export default DetailsScreen;