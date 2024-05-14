import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ParcoursScreen from './Parcours.js';
import CommunauteScreen from './Communaute.js';
import JournalScreen from './Journal.js'; 
import QuotidienScreen from './Quotidien.js'; 
import SuccesScreen from './Succes.js'; 
import AntistressScreen from './Antistress.js'; 
import HistoireScreen from './Histoire.js'; 

// Définition des écrans
function AccueilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.title}>ACCUEIL</Text> */}
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>BLOOM YOU</Text>
        <Text>Bonjour</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button text="ACCÈS PARCOURS" onPress={() => navigation.navigate('Parcours')} />
        <Button text="ACCÈS COMMUNAUTÉ" onPress={() => navigation.navigate('Communauté')} />
        <Button text="ACCÈS JOURNAL" onPress={() => navigation.navigate('Journal')} /> 
        <Button text="ACCÈS QUOTIDIEN" onPress={() => navigation.navigate('Quotidien')} />
        <Button text="ACCÈS SUCCÈS" onPress={() => navigation.navigate('Succès')} />
        <Button text="ACCÈS ANTI-STRESS" onPress={() => navigation.navigate('Anti-stress')} />
        <Button text="ACCÈS HISTOIRE" onPress={() => navigation.navigate('Histoire')} />
        <Button text="CHANGER RDV" popup onPress={() => Alert.alert("Pop-up : mood du jour (1 fois/jour)")} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity><Text style={styles.footerText}>US</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.footer}>MENTIONS LÉGALES</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.footerText}>CVG</Text></TouchableOpacity>
      </View>
    </View>
  );
}

// Composant bouton
function Button({ text, popup, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

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
        {/* Ajoutez d'autres écrans ici si nécessaire */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    width: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  notificationContainer: {
    padding: 20,
    width: '100%',
  },
  notificationText: {
    color: '#ff925c',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    width: '85%',
    padding: 7,
    backgroundColor: '#FFBF47',
    margin: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    width: '100%',
  },
  footerText: {
    color: '#FFBF47',
  },
});

export default App;
