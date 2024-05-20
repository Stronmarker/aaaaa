import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';

const Button = ({ text, onPress }) => (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
    >
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);


const SuccesScreen = () => {
const [modalVisible, setModalVisible] = useState(false);
const [createObjectiveModalVisible, setCreateObjectiveModalVisible] = useState(false);
const [selectedObjective, setSelectedObjective] = useState(null);


const successObjectives = [
  {id: '1', title: 'Succès 1'},
  {id: '2', title: 'Succès 2'},
  {id: '3', title: 'Succès 3'},
  
];

const ongoingObjectives = [
  {id: '4', title: 'Objectif en cours 1'},
  {id: '5', title: 'Objectif en cours 2'},
  {id: '6', title: 'Objectif en cours 3'},
];

const handleObjectivePress = (objective) => {
  setSelectedObjective(objective);
  setModalVisible(true);
};

const renderObjective = ({ item }) => (
  <TouchableOpacity style={styles.objective} onPress={() => handleObjectivePress(item)}>
   <Text style={styles.objectiveText}>{item.title}</Text>
</TouchableOpacity>
);

return (

    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>MES SUCCES</Text>
        </View>

        <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Mes Réussites</Text>
                <FlatList
                    data={successObjectives}
                    renderItem={renderObjective}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Mes Objectifs en Cours</Text>
                <FlatList
                    data={ongoingObjectives}
                    renderItem={renderObjective}
                    keyExtractor={(item) => item.id}
                />
            </View>
       
        <View style={styles.buttonContainer}>
            <Button text="CREER UN OBJECTIF" onPress={() => setCreateObjectiveModalVisible(true)} />
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

        {selectedObjective && (
          <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() =>setModalVisible(false)}
          >

                <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>{selectedObjective.title}</Text>
                            <Text style={styles.modalText}>Détails de l'objectif</Text>
                            <Button text="Fermer" onPress={() => setModalVisible(false)} />
                        </View>
                </View>
              </Modal>
        )}

           <Modal
                animationType="slide"
                transparent={true}
                visible={createObjectiveModalVisible}
                onRequestClose={() => setCreateObjectiveModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Créer un nouvel objectif</Text>
                        <Text style={styles.modalText}>Formulaire de création d'objectif</Text>
                        <Button text="Fermer" onPress={() => setCreateObjectiveModalVisible(false)} />
                    </View>
                </View>
            </Modal>
    </View>
    );
};

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
      color: '#FFBF47',  
    },
    listContainer: {
      width: '100%',
      padding: 20,
    },
    listTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ff925c',
      marginBottom: 10,
    },
    objective: {
      padding: 15,
      backgroundColor: '#FFBF47',
      marginBottom: 10,
      borderRadius: 10,
      lignItems: 'center',
    },
    objectiveText: {
      color: 'black',
    },
    buttonContainer: {
      width: '85%',
      backgroundColor: '#FFBF47',
      margin: 20,
      borderRadius: 20,
      alignItems: 'center',  
    },
    button: {
      width: '85%',
      padding: 1,
      backgroundColor: '#FFBF47',
      margin: 10,
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
      color: '#ff925c',
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
  },
  modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  modalText: {
      fontSize: 16,
      marginBottom: 20,
  },
  });

export default SuccesScreen; 
