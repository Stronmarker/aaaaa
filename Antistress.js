import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';

const Button = ({ text, onPress }) => (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
    >
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);

const openMeditationVisualisation = () => {
    Linking.openURL('https://depositphotos.com/fr/photo/woman-practices-yoga-46086607.html');
};
const openMeditationBody = () => {
    Linking.openURL('https://fr.freepik.com/photos-gratuite/tir-vertical-femme-meditant-pres-cascade_14377995.htm#query=meditation&position=13&from_view=keyword&track=sph&uuid=905ce310-a540-4b38-aa66-e5b98841493c')
};
const openDetenteDiaphragme = () => {
    Linking.openURL('https://www.shutterstock.com/fr/image-vector/diaphragmatic-breathing-abdominal-belly-deep-side-2328689477')
};
const openCoherenceCardiaque = () => {
    Linking.openURL('https://www.youtube.com/watch?v=dGJkzyKHKUE')
};
const openBruitDeau = () => {
    Linking.openURL('https://youtu.be/tLY6O6ykDyY')
};
const openSonsDoiseaux = () => {
    Linking.openURL('https://youtu.be/664Io8aGEoQ')
};

const AntistressScreen = () => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>MES ANTI-STRESS</Text>
        </View>
        <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>MES MEDITATIONS</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button text="MEDITATION / VISUALISATION" onPress={openMeditationVisualisation} />
            <Button text="MEDITATION / BODY" onPress={openMeditationBody} />
        </View>
        <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>MES EXERCICES RESPIRATOIRE</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button text="DETENTE DU DIAPHRAGME" onPress={openDetenteDiaphragme} />
            <Button text="COHERENCE CARDIAQUE" onPress={openCoherenceCardiaque} />
        </View>
        <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>MES MUSIQUES RELAXANTES</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button text="BRUIT D'EAU" onPress={openBruitDeau}/>
            <Button text="SONS D'OISEAUX" onPress={openSonsDoiseaux} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
        width: '100%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ff925c',
    },
    notificationContainer: {
        padding: 20,
        width: '100%',
        alignItems: 'center',
    },
    notificationText: {
        color: '#ff925c',
        fontSize: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        width: '85%',
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFBF47',
        marginVertical: 5,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        width: '100%',
    },
    footerText: {
        color: '#ff925c',
        marginHorizontal: 70,
    },
});

export default AntistressScreen;