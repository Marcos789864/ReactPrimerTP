import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function Carga({navigation}) {
  return (
    <View style={styles.container}>

    <View style={styles.overlay}>

    
        <Text>Tarea</Text>
       
      
        
    
    </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparente para el fondo
    },
    modal: {
      backgroundColor: '#fff',
      width: 600,
      maxWidth: '100%',
      padding: 30,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4, // Elevación para Android
      alignItems: 'center',
    },
  });