import { Button, StyleSheet, TextInput, View, ScrollView, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  function cadastrarUsuario() {
    if (nome && telefone) {
      setUsuarios([...usuarios, { nome, telefone }]);
      setNome("");
      setTelefone("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>

      <View style={styles.linhaInput}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.inputHorizontal}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome"
        />
      </View>

      <View style={styles.linhaInput}>
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.inputHorizontal}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="Digite o telefone"
          keyboardType="phone-pad"
        />
      </View>

      <View style={{ padding: 10, alignItems: 'flex', marginLeft: 65}}>
        <Button title="Cadastrar" onPress={cadastrarUsuario} />
      </View>

      <View style={{ borderBottomWidth: 1, marginVertical: 15 }} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold" }}>Nome</Text>
        <Text style={{ fontWeight: "bold" }}>Telefone</Text>
      </View>

      <ScrollView style={{ marginTop: 10 }}>
        {usuarios.map((usuario, index) => (
          <View key={index} style={styles.item}>
            <Text style={{fontSize: 14}}>{usuario.nome}</Text>
            <Text style={{fontSize: 14}}>{usuario.telefone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    fontWeight: "600",
    width: 70,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    padding: 10,
    marginVertical: 5,
    borderRadius: 4,
  },
  linhaInput: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputHorizontal: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 8,
    borderRadius: 4,
    flex: 1,
  },
});
