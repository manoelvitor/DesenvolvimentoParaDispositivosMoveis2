import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable
} from 'react-native'
import { Picker } from '@react-native-picker/picker'

const style = StyleSheet.create({
  app: {
    height: Dimensions.get('window').height,
    paddingLeft: 10,
    paddingRight: 10
  },
  titles: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000'
  },
  inputTitles: {
    marginTop: 25,
    fontSize: 18,
    color: '#000'
  },
  input1: {
    marginTop: 5,
    borderWidth: 2,
    padding: 10,
    borderRadius: 3
  },
  inputBox: {
    marginTop: 10,
    padding: 10,
    paddiTop: 5, paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 3,
    borderWidth: 2
  },
  de: {
    marginTop: 14,
    fontSize: 18,
    color: '#000',
    marginRight: 15
  },
  para: {
    marginTop: 14,
    fontSize: 18,
    color: '#000',
    marginRight: 15
  },
  escolha1: {
    width: 280
  },
  escolha2: {
    width: 265
  },
  baseBtn: {
    marginTop: 10,
    padding: 18,
    alignItems: 'center',
    borderRadius: 5
  },
  btn: {
    backgroundColor: '#0969da',
  },
  btnPressed: {
    backgroundColor: '#0a5bba',
  },
  txtBtn: {
    color: '#fff',
    fontSize: 16
  },
  result: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20, 
    color: '#000'
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantia: null,
      moeda1: 'Real',
      moeda2: 'Dólar',
      vlConversao: null
    }
    this.pegaQuantia = this.pegaQuantia.bind(this)
    this.calcularValor = this.calcularValor.bind(this)
    this.conversao = this.conversao.bind(this)
  }

  pegaQuantia(quantiaDigitada) {
    this.setState({ quantia: quantiaDigitada })
  }

  calcularValor(quantia, moeda1, moeda2) {
    if (moeda1 == 'Real' && moeda2 == 'Real')
      return quantia
    else if (moeda1 == 'Dólar' && moeda2 == 'Dólar')
      return quantia
    else if (moeda1 == 'Euro' && moeda2 == 'Euro')
      return quantia
    else if (moeda1 == 'Real' && moeda2 == 'Dólar')
      return quantia * 0.19
    else if (moeda1 == 'Dólar' && moeda2 == 'Real')
      return quantia * 5.37
    else if (moeda1 == 'Real' && moeda2 == 'Euro')
      return quantia * 0.16
    else if (moeda1 == 'Euro' && moeda2 == 'Real')
      return quantia * 6.22
    else if (moeda1 == 'Dólar' && moeda2 == 'Euro')
      return quantia * 0.86
    else if (moeda1 == 'Euro' && moeda2 == 'Dólar')
      return quantia * 1.16
  }

  conversao() {
    if (this.state.quantia != null) {
      const vlConv = this.calcularValor(
        this.state.quantia,
        this.state.moeda1,
        this.state.moeda2 )
      this.setState({ vlConversao: vlConv })
    }
  }

  render() {
    return(
      <View style={style.app}>
        <Text style={style.titles}>Conversor de Moedas</Text>
        <Text style={style.titles}>Dólar, Real e Euro</Text>
        <Text style={style.inputTitles}>Valor digitado</Text>
        <TextInput
          onChangeText={ this.pegaQuantia }
          placeholder={"Digite a quantia desejada"}
          style={style.input1}
        />
        <View style={style.inputBox}>
          <Text style={style.de}>De:</Text>
            <Picker
              style={style.escolha1}
              selectedValue={ this.state.moeda1 }
              onValueChange={ (itemValue,itemIndex) => this.setState({ moeda1: itemValue }) }
            >
            <Picker.Item key={1} value={"Real"} label="Real"/>
            <Picker.Item key={2} value={"Dólar"} label="Dólar"/>
            <Picker.Item key={3} value={"Euro"} label="Euro"/>
          </Picker>
        </View>
        <View style={style.inputBox}>
          <Text style={style.para}>Para:</Text>
            <Picker
              style={style.escolha2}
              selectedValue={ this.state.moeda2 }
              onValueChange={ (itemValue,itemIndex) => this.setState({ moeda2: itemValue }) }
            >
            <Picker.Item key={1} value={"Real"} label="Real"/>
            <Picker.Item key={2} value={"Dólar"} label="Dólar"/>
            <Picker.Item key={3} value={"Euro"} label="Euro"/>
          </Picker>
        </View>
        <Pressable
          onPress={ this.conversao }
          style={ ({pressed}) => [
            style.baseBtn,
            pressed ? 
              style.btnPressed : style.btn  
          ]}>
          <Text style={style.txtBtn}>Converter</Text>
        </Pressable>
        <Text style={style.result}>
          Resultado: { this.state.vlConversao }
        </Text>
      </View>
    )
  }
}

export default App