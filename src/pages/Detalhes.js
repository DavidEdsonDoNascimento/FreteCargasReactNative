import * as React from 'react';
import { Alert, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class HomePage extends React.Component {
  
render() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Transportadora:</Text>
      <Text>Transportadora Zéquinha</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Rota:</Text>
      <Text>Navegantes/SC x São Paulo/SP</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Veiculo:</Text>
      <Text>Truck</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Carroceria:</Text>
      <Text>Baú</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Especie:</Text>
      <Text>Caixas</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Produto:</Text>
      <Text>Diversos</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Valor:</Text>
      <Text>R$2100,00</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Telefone Preferencial:</Text>
      <Text>(47) 3366-4949</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Telefone Opcional 1:</Text>
      <Text>(47) 98801-2025</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Telefone Opcional 2:</Text>
      <Text>(47) 98801-2026</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Telefone Opcional 3:</Text>
      <Text></Text>
      <TouchableOpacity style={styles.botao} onPress={() => alert('Sua solicitação foi enviada para avaliação da transportadora.')}>
        <Text style={styles.botaoText}>Solicitar Fretagem</Text>
      </TouchableOpacity>      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'    
  },
  botao:{
    width:200,
    heigth: 45,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText:{
fontSize: 16,
fontWeight: 'bold',
color: '#fff'
  }
});
