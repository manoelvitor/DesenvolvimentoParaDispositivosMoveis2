import React, { Component } from 'react'
import { View, Text, Switch, ScrollView, TextInput, Keyboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import style from '../src/style'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statusDia: false,
      statusTamanho: false,
      fraseGuardada: 'Digite algo aqui e guarde essa frase.'
    }
    this.changeBoardColor = this.changeBoardColor.bind(this)
    this.changeStoredTxtColorAndSize = this.changeStoredTxtColorAndSize.bind(this)
  }

  async componentDidMount() {
    const atualizarItems = async (listaChaves) => {
      await AsyncStorage.multiGet(listaChaves, (erro, storedItems) => {
        for (let item of storedItems) {
          console.log(item)
          try {
            if (item[0] === 'frase_armazenada')
              this.setState({ fraseGuardada: item[1] })
            else if (item[0] === 'statusDia_armazenado')
              this.setState({ statusDia: JSON.parse(`${item[1]}`.toLowerCase()) })
            else if (item[0] === 'fontSize_armazenado')
              this.setState({ statusTamanho: JSON.parse(`${item[1]}`.toLowerCase()) })
          } 
          catch (e) {
            console.log(e)
          }
        }
      })
    }
    atualizarItems([
      'frase_armazenada', 
      'statusDia_armazenado',
      'fontSize_armazenado'
    ])
  }

  async componentDidUpdate(_, statsAnterior) {
    const frase = this.state.fraseGuardada
    const statusDia = this.state.statusDia
    const tamanhoFonte = this.state.statusTamanho

    try {
      if (statsAnterior.fraseGuardada != frase)
        await AsyncStorage.setItem('frase_armazenada', frase)

      else if (statsAnterior.statusDia != statusDia)
        await AsyncStorage.setItem('statusDia_armazenado', `${statusDia}`)

      else if (statsAnterior.statusTamanho != tamanhoFonte)
        await AsyncStorage.setItem('fontSize_armazenado', `${tamanhoFonte}`)
    }
    catch(e) {
      console.log(`Erro ao redefinir items -> ${e}`)
    }
  }

  changeBoardColor() {
    const estilo = { 
      display: 'flex',
      height: 360,
      marginTop: 15,
      padding: 15,
      marginBottom: 15,
      borderWidth: 2
    }
    this.state.statusDia === false ?
      estilo.backgroundColor = '#f5f5f5' : 
      estilo.backgroundColor = 'gray'
    return estilo
  }

  changeStoredTxtColorAndSize() {
    const estilo = { 
      flex: 1,
      fontStyle: 'italic'
    }
    const statusDia = this.state.statusDia
    const tamanho = this.state.statusTamanho

    statusDia === true ?
      estilo.color = '#fff' : estilo.color = '#000'
    tamanho == true ?
      estilo.fontSize = 30 : estilo.fontSize = 16

    return estilo
  }

  render() {
    return(
      <View style={ style.phoneScreen }>
        <Text style={style.title}>Aplicativo Frases</Text>
        <View style={style.boxButtons}>
          <Text>
            { this.state.statusDia ? 'Noite' : 'Dia' }
          </Text>
          <Switch 
            value={ this.state.statusDia }
            onValueChange= { (vlDia) => this.setState({ statusDia: vlDia }) } 
          />
          
          <Text>
            { this.state.statusTamanho ? 'Grande' : 'Pequeno' }
          </Text>
          <Switch 
            value={ this.state.statusTamanho }
            onValueChange= { vlSize => this.setState({ statusTamanho: vlSize }) } />
        </View>
        <ScrollView style={ this.changeBoardColor() }>
          <TextInput
            onChangeText={ txtDigitado => this.setState({ fraseGuardada: txtDigitado }) }
            style={ this.changeStoredTxtColorAndSize() }
            multiline={true}
            defaultValue={ this.state.fraseGuardada }
          />
          {/* <Text>{ this.state.fraseGuardada }</Text> */}
        </ScrollView>
      </View>
    )
  }
}