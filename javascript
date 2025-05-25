```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const mensajesPreestablecidos = [
  "Me siento asustado",
  "Necesito que vengas ya",
  "Estoy en peligro",
];

export default function ChatHelp() {
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);

  const enviarMensaje = (nuevoMensaje) => {
    if (!nuevoMensaje.trim()) return;
    const nuevo = { id: Date.now().toString(), contenido: nuevoMensaje };
    setMensajes([...mensajes, nuevo]);
    setMensaje('');
    // Aquí puedes integrar una llamada a una API para notificar a los padres en tiempo real.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Comunícate con tus padres</Text>
      <FlatList
        data={mensajes}
        renderItem={({ item }) => (
          <Text style={styles.mensaje}>{item.contenido}</Text>
        )}
        keyExtractor={item => item.id}
        style={styles.chatContainer}
      />
      <View style={styles.predefinidosContainer}>
        {mensajesPreestablecidos.map((texto, index) => (
          <TouchableOpacity
            key={index}
            style={styles.botonPredefinido}
            onPress={() => enviarMensaje(texto)}
          >
            <Text style={styles.textoPredefinido}>{texto}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu mensaje..."
        value={mensaje}
        onChangeText={setMensaje}
      />
      <Button title="Enviar" onPress={() => enviarMensaje(mensaje)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  mensaje: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    borderRadius: 5,
    marginVertical: 3,
  },
  predefinidosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  botonPredefinido: {
    backgroundColor: '#4dd0e1',
    padding: 8,
    borderRadius: 5,
  },
  textoPredefinido: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
```
