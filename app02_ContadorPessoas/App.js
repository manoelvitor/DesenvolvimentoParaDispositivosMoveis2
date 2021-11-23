import React, { Component } from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  TouchableHighlight
} from 'react-native'

const estilo = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    paddingRight: 15,
    paddingLeft: 15,
    justifyContent: 'center', alignItems: 'center'
  },
  counter: {
    backgroundColor: '#fff',
    padding: 10,
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').height
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#e77c0b'
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 20,
  },
  counterBox: {
    borderWidth: 2,
    borderColor: '#cecece',
    alignItems: 'flex-end',
    padding: 15
  },
  number: {color: 'red', fontSize: 28, fontWeight: 'bold' },
  wrapper: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBox: {
    flexDirection: 'row',
    padding: 10,
    width: (2 * 75) + 55
  },
  btnText: {
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 35
  },
  btnAdd: {
    alignItems: 'center', justifyContent: 'center',
    height: 65,
    width: 75,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#1a781e'
  },
  btnRemove: {
    alignItems: 'center', justifyContent: 'center',
    height: 65,
    width: 75,
    backgroundColor: '#ff7777',
    marginLeft: 35,
    borderWidth: 2,
    borderColor: '#c00404'
  }
})

class Contador extends Component {
  
  state = { count: 0 }

  addPerson = () => {
    this.setState({ count: this.state.count + 1 })
  }

  removePerson = () => {
    if (this.state.count > 0)
      this.setState({ count: this.state.count - 1 })
  }

  render() {
    return(
      <View style={estilo.counter}>
        <Text style={estilo.title}>Contador de Pessoas</Text>
        <Text style={estilo.paragraph}>
          Toque no botão verde para adicionar uma nova pessoa, 
          e no botão vermelho para retirar.
        </Text>
        <View style={estilo.counterBox}>
          <Text style={estilo.number}>{ this.state.count }</Text>
        </View>
        <View style={estilo.wrapper}>
          <View style={estilo.buttonBox}>
            
            <TouchableHighlight 
              style={estilo.btnAdd} onPress={ this.addPerson }>
              <Text style={estilo.btnText}>+</Text>
            </TouchableHighlight>

            <TouchableHighlight 
              style={estilo.btnRemove} onPress={ this.removePerson }>
              <Text style={estilo.btnText}>-</Text>
            </TouchableHighlight>

          </View>
        </View>
      </View>
    ) 
  }
}

const Screen = () => {
  return(
    <View style={estilo.screen}>
      <Contador/>
    </View>
  )
}

export default Screen