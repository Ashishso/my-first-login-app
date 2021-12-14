import React  from 'react';
import {StyleSheet,View,Text,Button,FlatList} from 'react-native';


const ExploreScreen = () => {
        return (
            <View style={styles.container}>
            <Text style={styles.textList}> ExploreScreen </Text>
            
            <View style={styles.button}>
            <Button 
             title='go to Details Screen'
             
            />
            </View>
            </View>
        );
    
};


const styles = StyleSheet.create ({
    
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
    },
    button: {
        padding: 10,
        margin: 10
    }
    
})

export default ExploreScreen;
