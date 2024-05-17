import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importation du hook de navigation

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
        <Text style={styles.buttonText}>Voir mon histoire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
    backgroundColor: '#4F46E5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  viewHistoryButton: {
    backgroundColor: '#4F46E5',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default JournalScreen;
