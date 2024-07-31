import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function index({navigation}) {
  return (
    <View style={styles.container}>

    <View style={styles.overlay}>

      <View style= {styles.nav}>
        <Text style= {styles.navText}>Tareas</Text></View>
      <ScrollView>
      
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Carga')}>
      <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nav:
  {
    backgroundColor: "#fff",
    width: '100%',
    paddingVertical: 15, // Espaciado vertical para el titular
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1, // Añadir una línea debajo del titular si es necesario
    borderBottomColor: '#ddd',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
  },
  navText: {
    fontSize: 24, // Tamaño del texto más grande
    fontWeight: 'bold',
    color: '#333', // Color del texto
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Para sombra en Android
    shadowColor: '#000', // Para sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  overlay: {
    width: '75%',
    height: '75%',
    backgroundColor: 'rgba(245, 245, 245, 5)', // Color de fondo con opacidad
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0.5
  }
});
