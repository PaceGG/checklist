import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [cheatModalVisible, setCheatModalVisible] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [cheatValue, setCheatValue] = useState("");

  const resetCounter = () => {
    setCounter(0);
    setResetModalVisible(false);
  };

  const handleClickerClick = () => setCounter(counter + 1);
  const handleCheatClick = () => setCheatModalVisible(true);
  const handleResetClick = () => setResetModalVisible(true);

  const handleInput = () => {
    const num = Number(cheatValue);
    if (Number.isInteger(num) && cheatValue.trim() !== "") {
      setCounter(counter + num);
    }
    setCheatModalVisible(false);
    setCheatValue("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counterText}>Counter: {counter}</Text>

      {/* Основные кнопки */}
      <TouchableOpacity style={styles.button} onPress={handleClickerClick}>
        <Text style={styles.buttonText}>+1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleResetClick}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCheatClick}>
        <Text style={styles.buttonText}>Cheat</Text>
      </TouchableOpacity>

      {/* Modal для ввода числа (чит) */}
      <Modal visible={cheatModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Введите количество кликов:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={cheatValue}
              onChangeText={setCheatValue}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setCheatModalVisible(false)}
              >
                <Text style={styles.buttonText}>Отмена</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleInput}
              >
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal для подтверждения сброса */}
      <Modal visible={resetModalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Вы уверены, что хотите сбросить счётчик?</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setResetModalVisible(false)}
              >
                <Text style={styles.buttonText}>Отмена</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={resetCounter}
              >
                <Text style={styles.buttonText}>Сброс</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    alignItems: "center",
  },
  counterText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    width: 150,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: "center",
  },
});
