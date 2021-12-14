import  React,{useEffect, useState, useMemo} from 'react';
import {View, ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';     
import MainTabScreen from './Screen/MainTabScreen';
import RootStackScreen from './Screen/RootStackScreen';
import {AuthContext}  from './Components/context';
 
const Stack = createNativeStackNavigator();

const App = () => {
  
  const [isLoading, setIsLoading]  = useState(true);
  const [userToken, setUserToken] = useState(null);


 const authContext =  useMemo(() => ({
    signIn: () => {
      setUserToken('ashish');
      setIsLoading(false);
    },
     signOut: () => {
       setUserToken(null);
      setIsLoading(false);
     },
      signUp: () => {
        setUserToken('ashish');
        setIsLoading(false);
      },
 }));

useEffect(() => {
   setTimeout(() => {
       setIsLoading(false);
   }, 1000);     
    
}, [])

if(isLoading) {
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator  color= "#009387" size="large" />
    </View>
}

return (
    <AuthContext.provider value={ authContext }>   
      <NavigationContainer>
      { userToken !==   null ? (  
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#41B3A3'} }}>       
                 <Stack.Screen name="Home" component={MainTabScreen} />      
         </Stack.Navigator>     
        )   
        :   
      <RootStackScreen />   
        }    
       </NavigationContainer> 
     </AuthContext.provider>
    )
}

export default App; 