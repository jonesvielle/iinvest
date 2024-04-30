import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/homes';
import {RootStackParamList} from './type';
import DetailScreen from '../screens/detailScreen';
import ScoreScreen from '../screens/ScoreScreen';
import Transfer from '../screens/transfer';
import Receipt from '../screens/receipt';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="ScoreScreen" component={ScoreScreen} />
        <Stack.Screen name="transfer" component={Transfer} />
        <Stack.Screen name="receipt" component={Receipt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
