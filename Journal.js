import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importation du hook de navigation
import  BackgroundImage  from './Images/joie.png';

function JournalScreen() {
  const [problems, setProblems] = useState('');
  const [lessons, setLessons] = useState('');
  const navigation = useNavigation(); // Utilisation du hook de navigation

  const handleSave = () => {
    // Vous pouvez utiliser les valeurs de `problems` et `lessons` comme vous le souhaitez, par exemple, pour les sauvegarder dans une base de données ou les afficher à l'utilisateur.
    console.log('Problèmes:', problems);
    console.log('Leçons:', lessons);
  };

  const goToHistoireScreen = () => {
    navigation.navigate('Histoire'); // Navigation vers l'écran HistoireScreen
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.BackgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Mon journal</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mes problèmes"
          multiline
          value={problems}
          onChangeText={(text) => setProblems(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mes leçons"
          multiline
          value={lessons}
          onChangeText={(text) => setLessons(text)}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewHistoryButton} onPress={goToHistoireScreen}>
        <Text style={styles.buttonText}>Afficher mon journal</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.footerText}>US</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.footer}>MENTIONS LÉGALES</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.footerText}>CVG</Text>
            </TouchableOpacity>
        </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
BackgroundImage: {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
},

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ff925c',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minHeight: 100, // Hauteur minimale de la zone de texte
  },
  saveButton: {
    backgroundColor: '#FFBF47',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  viewHistoryButton: {
    backgroundColor: '#FFBF47',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
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
    color: '#ff925c',
  },

});

export default JournalScreen;
