import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ff925c',
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

export default HistoireScreen;
