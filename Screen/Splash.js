import React from 'react';
import {StyleSheet,View,Text,Button,Dimensions,Image,TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Splash = ({navigation}) => {
    return(
     <View style={styles.container}>
     <View style={styles.header}>
     <Image 
     source={require('../images/img.jpg')}
     style={styles.logo}
     />
     </View>
     <View style={styles.footer}>
     <Text style={styles.textSign}>Stay connected with everyone!</Text>
     <Text>Signin with an account</Text>
     <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.button}>
     <Text style={styles.textInput}>Get Started...</Text>
     </TouchableOpacity>
     </View>
     </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
       backgroundColor:'#009387',
       height:45,
       width:130,
       borderRadius:50,
       margin:10,
       padding:10,
       justifyContent:'center',
       alignItems:'center',
       fontSize:16,
       fontWeight:'bold',
       color:'#fff'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 25
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    logo:{
        height:250,
        width:250,
        borderRadius:130
    }
  });

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

export default Splash;