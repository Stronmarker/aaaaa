import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const Button = ({ text, onPress }) => (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
    >
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);

const AntistressScreen = () => (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.header}>
                <Text style={styles.title}>MES ANTI-STRESS</Text>
            </View>
            <View style={styles.notificationContainer}>
                <Text style={styles.notificationText}>MES MEDITATIONS</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button text="MEDITATION / VISUALISATION" />
                <Button text="MEDITATION / BODY" />
            </View>
            <View style={styles.notificationContainer}>
                <Text style={styles.notificationText}>MES EXERCICES RESPIRATOIRE</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button text="DETENTE DU DIAPHRAGME" />
                <Button text="COHERENCE CARDIAQUE" />
            </View>
            <View style={styles.notificationContainer}>
                <Text style={styles.notificationText}>MES MUSIQUES RELAXANTES</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button text="BRUIT D'EAU" />
                <Button text="SONS D'OISEAUX" />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}>US</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.footerText}>MENTIONS LÉGALES</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.footerText}>CVG</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollViewContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        padding: 25,
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

export default AntistressScreen;