import { useState } from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  title: {
    fontSize: 26,
    color: "#ffff0eff",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#121212",
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff"
  }
});

export default function Index() {
  const [valor, setValor] = useState("");
  const [taxa, setTaxa] = useState(""); 
  const [parcelas, setParcelas] = useState("");
  const [demais, setDemais] = useState(""); 
  const [resultado, setResultado] = useState("");

  const calcFinanciamento = () => {
    const c = Number(valor);
    const i = Number(taxa) / 100;
    const t = Number(parcelas);
    const extra = Number(demais);

    const m = c * Math.pow(1 + i, t) + extra;
    const p = m / t;

    setResultado(`Total a pagar: R$ ${m.toFixed(2)}\nValor da parcela: R$ ${p.toFixed(2)}`);
  };

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Simulador de Financiamentos</Text>
      <TextInput
        placeholder="Valor Financiado"
        style={styles.input}
        value={valor}
        onChangeText={setValor}
      />
      <TextInput
        placeholder="Taxa de juros ao mês(%)"
        style={styles.input}
        value={taxa}
        onChangeText={setTaxa}
      />
      <TextInput
        placeholder="Número de Parcelas"
        style={styles.input}
        value={parcelas}
        onChangeText={setParcelas}
      />
      <TextInput
        placeholder="Outras taxas/custos (opcional)"
        style={styles.input}
        value={demais}
        onChangeText={setDemais}
      />
      <Button
        title="Calcular Financiamento"
        onPress={calcFinanciamento}
      />
      <Text style={styles.text}>{resultado}</Text>
    </View>
  );
}