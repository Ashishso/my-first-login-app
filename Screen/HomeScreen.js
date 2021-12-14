import React from 'react';
import {StyleSheet,View,Text,Button,FlatList} from 'react-native';

 
function HomeScreen  ({navigation})  {
        return (
            <View style= {styles.container}>
            <Text> HomeScreen </Text>
            <View style={styles.button}>
            <Button 
             title='go to Second Screen'
             onPress={() => navigation.navigate('Settings')}
            />
            </View>
            </View>

        );
    
}

const styles = StyleSheet.create ({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    button: {
        padding: 10,
        margin: 10
    }
    
})

export default HomeScreen;