import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';

const Button = ({ text, onPress }) => (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
    >
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);


const ParcoursScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleButtonPress = (content) => {
        setModalContent(content);
        setModalVisible(true);
};
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            {/* <Text style={styles.title}>MES PARCOURS</Text> */}
        </View>
        <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>MES PARCOURS</Text>
            <Text> Comment ça va aujourd'hui ?</Text>
        </View>
        <View style={styles.buttonContainer}>
                <Button text=" MES EMOTIONS " onPress={() => handleButtonPress("Informations sur MES EMOTIONS")} />
                <Button text=" MOI... " onPress={() => handleButtonPress("Informations sur MOI...")} />
                <Button text=" ... ET LES AUTRES " onPress={() => handleButtonPress("Informations sur ... ET LES AUTRES")} />
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

        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{modalContent}</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Fermer</Text>
                        </TouchableOpacity>
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
     
     
    },
    notificationContainer: {
      padding: 50,
      width: '100%',
      alignItems: 'center',
    },
    notificationText: {
      color: '#ff925c',
      fontSize: 40,
      marginBottom: 10,
   
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'center',
    },
    button: {
      width: '85%',
      padding: 10,
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
      color: '#FFBF47',
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
  modalText: {
      fontSize: 18,
      marginBottom: 20,
  },
  closeButton: {
      backgroundColor: '#FFBF47',
      padding: 10,
      borderRadius: 10,
  },
  closeButtonText: {
      color: 'black',
      fontWeight: 'bold',
  },
  });

export default ParcoursScreen; 