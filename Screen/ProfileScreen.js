import React from 'react';
import {StyleSheet,View,Text,Button,FlatList} from 'react-native';


const ProfileScreen = ({navigation}) => {
    return (
            <View style={styles.container}>
            <Text > ProfileScreen </Text>
            
            <View style={styles.button}>
            <Button 
                title='go to Details Screen'
                onPress={() => navigation.navigate('Details')}
            />
            </View>
            </View>
        );
    
};


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

export default ProfileScreen;
