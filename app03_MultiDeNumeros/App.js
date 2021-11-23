import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  TextInput,
  TouchableHighlight
} from 'react-native'

const estilo = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    paddingLeft: 15, paddingRight: 15
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15
  },
  introduction: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15
  },
  inputs: {
    height: 55,
    marginTop: 15,
    borderWidth: 1,
    padding: 15,
    borderColor: '#a4a4a4'
  },
  btn: {
    marginTop: 15,
    backgroundColor: '#1880d3',
    padding: 15,
    borderWidth: 2,
    borderColor: '#005395',
    borderRadius: 3,
  },
  txtBtn: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  resultBox: {
    marginTop: 15,
    padding: 15,
    alignItems: 'center'
  }
})

class Multiplicador extends Component {

  constructor(props) {
    super(props)
    
    this.state = { num1: 0, num2: 0, result: 0 }
  }
  
  pegaNum1 = (a) => this.setState({ num1: a })

  pegaNum2 = (b) => this.setState({ num2: b })

  multiplicar = () => {
    const a = this.state.num1
    const b = this.state.num2
    if (a !== null && b !== null) {
      if (!isNaN(a) && !isNaN(b))
        this.setState({ result: a * b })
    }
  }
  
  render() {
    return(
      <View>
        <Text style={estilo.title}>Multiplicador de Números</Text>
        <Text style={estilo.introduction}>
          Escreva um valor em cada um dos espaços 
          e aperte o botão.
        </Text>
        <TextInput
          placeholder={"Digite o 1º número"}
          style={estilo.inputs}
          onChangeText={ this.pegaNum1 }
        />
        <TextInput
          placeholder={"Digite o 2º número"}
          style={estilo.inputs}
          onChangeText={ this.pegaNum2 }
        />
        <TouchableHighlight
          style={estilo.btn}
          onPress={ this.multiplicar }>
          <Text style={estilo.txtBtn}>Multiplicar</Text>
        </TouchableHighlight>

        <View style={estilo.resultBox}>
          <Text>Resultado: { this.state.result }</Text>
        </View>
      </View>
    )
  }
}

export default App = () => {
  return(
    <View style={estilo.screen}>
      <Multiplicador/>
    </View>
  )
}