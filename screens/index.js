import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import Modal from 'react-native-modal';

export default function Index() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleEditModal = () => {
    setEditModalVisible(!isEditModalVisible);
  };

  const handleSave = () => {
    if (name.trim() && description.trim()) {
      setCards([...cards, { name, description, status: 'in-progress' }]);
      setName('');
      setDescription('');
      toggleModal();
    } else {
      alert('Please fill in both fields');
    }
  };

  const handleEdit = (index) => {
    setSelectedCardIndex(index);
    setName(cards[index].name);
    setDescription(cards[index].description);
    toggleEditModal();
  };

  const handleFinish = () => {
    const updatedCards = cards.map((card, index) => 
      index === selectedCardIndex ? { ...card, status: 'completed' } : card
    );
    setCards(updatedCards);
    toggleEditModal();
  };

  const handleDelete = () => {
    const updatedCards = cards.filter((_, index) => index !== selectedCardIndex);
    setCards(updatedCards);
    toggleEditModal();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.overlay}>
        <View style={styles.nav}>
          <Text style={styles.navText}>Tareas</Text>
        </View>
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {cards.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => handleEdit(index)}
            >
              <View style={[
                styles.statusCircle,
                card.status === 'completed' ? styles.completedStatus : styles.inProgressStatus
              ]} />
              <Text style={styles.cardTitle}>{card.name}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para agregar tarea */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropOpacity={0.5}
        style={styles.modal}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Enter Information</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Brief Description"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <View style={styles.buttonContainer}>
            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={toggleModal} color="red" />
          </View>
        </View>
      </Modal>

      {/* Modal para editar tarea */}
      <Modal
        isVisible={isEditModalVisible}
        onBackdropPress={toggleEditModal}
        backdropOpacity={0.5}
        style={styles.modal}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Edit Task</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Brief Description"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <View style={styles.buttonContainer}>
            <Button title="Finish Task" onPress={handleFinish} />
            <Button title="Delete Task" onPress={handleDelete} color="red" />
            <Button title="Cancel" onPress={toggleEditModal} color="grey" />
          </View>
        </View>
      </Modal>
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
  overlay: {
    width: '75%',
    height: '75%',
    backgroundColor: 'rgba(245, 245, 245, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0.5,
  },
  nav: {
    backgroundColor: "#fff",
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  navText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
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
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 10,
    position: 'relative', // Allow positioning the status circle
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 10,
  },
  statusCircle: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  inProgressStatus: {
    backgroundColor: 'yellow',
  },
  completedStatus: {
    backgroundColor: 'red',
  },
});