import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; // Tableau & Graphique
import { Picker } from 'emoji-mart'; // Importation des émojis
import { useNavigation } from '@react-navigation/native'; // Importation du hook de navigation

const QuotidienScreen = () => {
  const navigation = useNavigation(); // Utilisation du hook de navigation

  // Définition des couleurs pour chaque humeur
  const moodColors = {
    '😄': '#039c03', // Joyeux (vert foncé)
    '😊': '#66FF00', // Joyeux (vert clair)
    '😐': '#FFFF00', // Neutre (jaune)
    '😔': '#FFA500', // Triste (orange)
    '😢': '#FF0000', // Très triste (rouge)
  };

  const [moods, setMoods] = useState([
    { name: '😄', frequency: 0 },
    { name: '😊', frequency: 0 },
    { name: '😐', frequency: 0 },
    { name: '😔', frequency: 0 },
    { name: '😢', frequency: 0 },
  ]);

  // Fonction pour incrémenter la fréquence d'une humeur
  const incrementFrequency = (index) => {
    const updatedMoods = [...moods];
    updatedMoods[index].frequency = Math.round(updatedMoods[index].frequency) + 1;
    setMoods(updatedMoods);
  };

  // Fonction pour réinitialiser les réponses à 0
  const resetFrequencies = () => {
    const resetMoods = moods.map((mood) => ({ ...mood, frequency: 0 }));
    setMoods(resetMoods);
  };

  // Données pour le graphique
  const data = {
    labels: moods.map((mood) => mood.name),
    datasets: [
      {
        data: moods.map((mood) => mood.frequency),
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Balise "Aujourd'hui je me sens" */}
      <Text style={styles.chartTitle}>Aujourd'hui je me sens</Text>

      {/* Affichage des smileys d'humeur */}
      <View style={styles.moodContainer}>
        {moods.map((mood, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.moodButton, { backgroundColor: moodColors[mood.name] }]}
            onPress={() => incrementFrequency(index)}
          >
            <Text style={styles.moodText}>{mood.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      
      

      {/* Affichage du graphique */}
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={350}
          height={250}
          yAxisSuffix="" // Ne pas ajouter de suffixe à l'axe des ordonnées
          yAxisInterval={1} // Intervalles de 1 pour afficher uniquement des nombres entiers
          verticalLabelRotation={0} // Supprimer l'axe vertical
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            decimalPlaces: 0, // Pas de décimales sur l'axe des ordonnées
            color: (opacity = 1) => `rgba(79, 70, 229, ${opacity})`, // Couleur de la ligne
            strokeWidth: 4, // Épaisseur de la ligne
            barPercentage: 1, // Pour ajuster la largeur des barres du graphique
            yAxisInterval: 1, // Intervalles de 1 pour afficher uniquement des nombres entiers sur l'axe des ordonnées
            fromZero: true, // Supprimer les chiffres de l'axe vertical
          }}
          bezier // Utiliser une courbe de Bézier pour connecter les points
        />
      </View>

      {/* Bouton pour réinitialiser les réponses à 0 */}
      <TouchableOpacity style={styles.resetButton} onPress={resetFrequencies}>
        <Text style={styles.resetButtonText}>Réinitialiser les réponses à 0</Text>
      </TouchableOpacity>


      {/* Bouton pour naviguer vers JournalScreen */}
      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('Journal')}>
        <Text style={styles.navigationButtonText}>Voir le journal</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('Succès')}>
    <Text style={styles.navigationButtonText}>Voir mes Succes</Text>
  </TouchableOpacity>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  moodButton: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  moodText: {
    fontSize: 32,
  },
  resetButton: {
    backgroundColor: '#4F46E5',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  navigationButton: {
    backgroundColor: '#4F46E5',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  navigationButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  chartContainer: {
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 24, // Augmentation de la taille du texte
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default QuotidienScreen;
