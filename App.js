import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Modal } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-web';


export default function App() {
  // useState --> HOOK que permite criar uma variavel de estado
  // Este HOOK retorna um array com dois valores ( valor atual e função de atualização)

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const calcImc = () => {
    let result = peso / (altura * altura)

    if (result < 18.5) {
      console.log("Abaixo do peso")
    } else if (result >= 18.5 && result <= 24.9) {
      console.log("Peso normal")
    } else if (result >= 25 && result <= 29.9) {
      console.log("Excesso de peso")
    } else if (result >= 30 && result <= 35) {
      console.log("Obesidade")
    } else if (result > 35) {
      console.log("Obesidade extrema")
    }

    console.log("O resultado do seu IMC é: ", result.toFixed(2))
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Digite seu peso'
        value={peso}
        onChangeText={(value) => setPeso(value)}
        style={{ width: '80%', borderBottomWidth: 1, borderColor: '#581845', marginBottom: 30, color: '#581845' }}
      />

      <TextInput
        placeholder='Digite sua altura'
        value={altura}
        onChangeText={(value) => setAltura(value)}
        style={{ width: '80%', borderBottomWidth: 1, borderColor: '#581845', marginBottom: 30, color: '#581845' }}
      />

      <Button title='Calcular IMC' onPress={calcImc} />

      <Modal transparent={true} visible={modalVisible} animationType='slide'>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>

            <Text></Text>

            <Button title='Fechar Modal' onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#b0a6df"
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center'
  }
});
