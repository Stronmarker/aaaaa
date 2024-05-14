import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements'; // Import des éléments de React Native Elements

// Définition des écrans et des composants
function AccueilScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>ACCUEIL</Text>
      <View style={{ marginBottom: 20 }}>
        <Text>BloomYou : Bonjour</Text>
        <Text>Autre texte ici</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        <CustomButton title="ACCÈS PARCOURS" onPress={() => navigation.navigate('Parcours')} />
        <CustomButton title="ACCÈS COMMUNAUTÉ" onPress={() => navigation.navigate('Communauté')} />
        <CustomButton title="ACCÈS JOURNAL" onPress={() => navigation.navigate('Journal')} />
        <CustomButton title="ACCÈS QUOTIDIEN" onPress={() => navigation.navigate('Quotidien')} />
        <CustomButton title="ACCÈS SUCCÈS" onPress={() => navigation.navigate('Succès')} />
        <CustomButton title="ACCÈS ANTI-STRESS" onPress={() => navigation.navigate('Anti-stress')} />
        <CustomButton title="ACCÈS HISTOIRE" onPress={() => navigation.navigate('Histoire')} />
        <CustomButton title="CHANGER RDV" onPress={() => Alert.alert("Pop-up : mood du jour (1 fois/jour)")} />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity><Text style={{ color: '#FFBF47', marginRight: 10 }}>US</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ color: '#FFBF47', marginRight: 10 }}>MENTIONS LÉGALES</Text></TouchableOpacity>
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
        {/* Ajoutez les autres écrans ici */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
