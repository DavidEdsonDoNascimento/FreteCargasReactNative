import * as React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    transportadora: 'Transportadora Zéquinha',
    rota: 'Navegantes/SC x São Paulo/SP',
    produto: 'Diversos',
    valor: 'R$2100,00',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    transportadora: 'Transportadora Juquinha',
    rota: 'Itajai/SC x São Paulo/SP',
    produto: 'Diversos',
    valor: 'R$2400,00',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    transportadora: 'Transportadora Joãozinho',
    rota: 'Iha Bela/SC x São Paulo/SP',
    produto: 'Diversos',
    valor: 'R$3000,00',
  },
];

export class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity
              id={item.id}
              onPress={() => {
                this.props.navigation.navigate('Detalhes');
              }}
              style={styles.item}>
              <View>
                <Text style={styles.title}>{item.transportadora}</Text>
                <Text style={styles.content}>Rota: {item.rota}</Text>
                <Text style={styles.content}>
                  Produto:{item.produto} Valor: {item.valor}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#eee',
    padding: 5,
    marginVertical: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
