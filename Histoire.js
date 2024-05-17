import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HistoireScreen() {
  // Contenu de l'histoire
  const histoire = {
    problems: "Voici une liste de problèmes...",
    lessons: "Voici une liste de leçons apprises...",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon histoire</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mes problèmes</Text>
        <Text style={styles.sectionText}>{histoire.problems}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mes leçons</Text>
        <Text style={styles.sectionText}>{histoire.lessons}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
  },
});

export default HistoireScreen;
