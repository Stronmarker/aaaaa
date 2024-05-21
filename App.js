import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements'; // Import des éléments de React Native Elements
import ParcoursScreen from './Parcours';
import CommunauteScreen from './Communaute';
import JournalScreen from './Journal';
import QuotidienScreen from './Quotidien';
import SuccesScreen from './Succes';
import AntistressScreen from './Antistress';
import HistoireScreen from './Histoire';
import RdvScreen from './Rdv';

// Définition des écrans et des composants
function AccueilScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 20, color: '#ff925c' }}>ACCUEIL</Text>
      <View style={{ marginBottom: 20 }}>
        <Text>BloomYou : Bonjour</Text>
        <Text>Autre texte ici</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        <CustomButton title="MES PARCOURS" onPress={() => navigation.navigate('Parcours')} />
        <CustomButton title="LA COMMUNAUTÉ" onPress={() => navigation.navigate('Communauté')} />
        <CustomButton title="MON QUOTIDIEN" onPress={() => navigation.navigate('Quotidien')} />
        <CustomButton title="MES ANTI-STRESS" onPress={() => navigation.navigate('Anti-stress')} />
        <CustomButton title="MES RDV" onPress={() => navigation.navigate('Rdv')} />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 100 }}>
        <TouchableOpacity><Text style={{ color: '#FFBF47', marginRight: 50 }}>US</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ color: 'black', marginRight: 50 }}>MENTIONS LÉGALES</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ color: '#FFBF47' }}>CVG</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const CustomButton = ({ title, onPress }) => (
  <Button
    title={title}
    containerStyle={{ margin: 5 }}
    buttonStyle={{ backgroundColor: '#FFBF47' }}
    titleStyle={{ color: 'black' }}
    onPress={onPress}
  />
);

// Navigation
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={AccueilScreen} />
        <Stack.Screen name="Parcours" component={ParcoursScreen} />
        <Stack.Screen name="Communauté" component={CommunauteScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="Quotidien" component={QuotidienScreen} />
        <Stack.Screen name="Succès" component={SuccesScreen} />
        <Stack.Screen name="Anti-stress" component={AntistressScreen} />
        <Stack.Screen name="Histoire" component={HistoireScreen} />
        <Stack.Screen name="Rdv" component={RdvScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
