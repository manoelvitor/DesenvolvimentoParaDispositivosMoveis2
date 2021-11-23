import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, Switch, Pressable } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'
import styleZonaCadastro from './style'
import UsuarioCadastrado from './UsuarioCadastrado'

class ZonaCadastro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuarioCadastrado: false,
      nome: null,
      idade: null,
      sexoPessoa: 'Masculino',
      escolaridade: 'Ensino fundamental incompleto',
      valorLimite: 0,
      brasileiro: false,
      nacionalidade: null
    }
    this.pegaNome = this.pegaNome.bind(this)
    this.pegaIdade = this.pegaIdade.bind(this)
    this.pegaSexo = this.pegaSexo.bind(this)
    this.pegaEscolaridade = this.pegaEscolaridade.bind(this)
    this.pegaLimite = this.pegaLimite.bind(this)
    this.pegaNacionalidade = this.pegaNacionalidade.bind(this)
    this.avaliarSituacao = this.avaliarSituacao.bind(this)
    this.mostrarDados = this.mostrarDados.bind(this)
  }

  pegaNome(valorDigitado) { this.setState({ nome:  valorDigitado}) }
  pegaIdade(valorDigitado) { this.setState({ idade:  valorDigitado}) }
  pegaSexo(valorDigitado) { this.setState({ sexoPessoa:  valorDigitado}) }
  pegaEscolaridade(valorDigitado) { this.setState({ escolaridade:  valorDigitado}) }
  pegaLimite(valorDigitado) { this.setState({ valorLimite:  valorDigitado}) }
  pegaNacionalidade(valorDigitado) { this.setState({ brasileiro:  valorDigitado}) }
  
  mostrarDados() {
    if (this.state.usuarioCadastrado == false)
      if (!isNaN(this.state.idade))
        this.setState({ usuarioCadastrado: true })
  }

  avaliarSituacao() {
    if (
      this.state.nome != null          &&
      this.state.idade != null         &&
      this.state.sexoPessoa != null    &&
      this.state.escolaridade != null  &&
      this.state.valorLimite > 0       &&
      this.state.brasileiro != null
    ) { 
      this.mostrarDados() 
    }  
    else 
      console.log(this.state)
  }

  render() {
    return(
      <ScrollView style={styleZonaCadastro.zonaCadastro}>
        <View style={styleZonaCadastro.formulario}>
          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 25
          }}>
            Abertura de Conta
          </Text>
          <Text style={styleZonaCadastro.inputTitles}>Nome</Text>
          <TextInput
            onChangeText={ this.pegaNome }
            placeholder=" Digite seu nome"
            style={styleZonaCadastro.inputs}
          />
          <Text style={styleZonaCadastro.inputTitles}>Idade</Text>
          <TextInput
            onChangeText={ this.pegaIdade }
            placeholder=" Digite sua idade"
            style={styleZonaCadastro.inputs}
          />
          <Text style={styleZonaCadastro.inputTitles}>Sexo</Text>
          <Picker 
            selectedValue={this.state.sexoPessoa}
            onValueChange={ (itemValue, itemIndex) => { 
              this.setState({ sexoPessoa: itemValue }) 
            }}>
            <Picker.Item key={1} value={"Masculino"} label="Masculino"/>
            <Picker.Item key={2} value={"Feminino"} label="Feminino"/>
            <Picker.Item key={3} value={"Outro"} label="Outro"/>
          </Picker>
          <Text style={styleZonaCadastro.inputTitles}>Escolaridade</Text>
          <Picker
            selectedValue={this.state.escolaridade}
            onValueChange={ (itemValue, itemIndex) => {
              this.setState({ escolaridade: itemValue })
            }}>
            <Picker.Item key={1} value={"Ensino fundamental incompleto"} label="Ensino fundamental incompleto"/>
            <Picker.Item key={2} value={"Ensino fundamental completo"} label="Ensino fundamental completo"/>
            <Picker.Item key={3} value={"Ensino médio incompleto"} label="Ensino médio incompleto"/>
            <Picker.Item key={4} value={"Ensino médio completo"} label="Ensino médio completo"/>
            <Picker.Item key={5} value={"Ensino superior incompleto"} label="Ensino superior incompleto"/>
            <Picker.Item key={6} value={"Ensino superior completo"} label="Ensino superior completo"/>
          </Picker>
          <Text style={styleZonaCadastro.inputTitles}>Limite</Text>
          <Slider 
            minimumValue={50}
            maximumValue={200}
            step={1}
            minimumTrackTintColor='#336fca'
            maximumTrackTintColor='#a7a7a7'
            thumbTintColor='#285aa5'
            onValueChange={ 
              (valorSelecionado) => { 
                this.setState({ valorLimite: valorSelecionado })
              }
            }
            value={ this.state.valorLimite }
          />
          <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 20 }}>
            { this.state.valorLimite.toFixed(0) }
          </Text>
          <Text style={styleZonaCadastro.inputTitles}>Nacionalidade</Text>
          <Switch 
            trackColor={{ false: "#a7a7a7", true: "#336fca" }}
            thumbColor={'#285aa5'}
            value={ this.state.brasileiro }
            onValueChange={
              (valorSelecionado) => {
                this.setState({ brasileiro: valorSelecionado })
              }
            }
          />
          <Text style={{ textAlign: 'center', fontSize: 20 }}>
            { (this.state.brasileiro) ? "Brasileiro" : "Estrangeiro" }
          </Text>
          <Pressable 
              onPress={ this.avaliarSituacao }
              style={ ({pressed}) => [
                styleZonaCadastro.baseBtn,
                pressed ? 
                  styleZonaCadastro.btnPressed 
                  : styleZonaCadastro.btn  
            ]}>
            <Text style={styleZonaCadastro.btnTxt}>
              Cadastrar
            </Text>
          </Pressable>
        </View>
        { 
          this.state.usuarioCadastrado == false 
            ? null: <UsuarioCadastrado 
                      nome={ this.state.nome }
                      idade={ this.state.idade }
                      sexo={ this.state.sexoPessoa }
                      escolari={ this.state.escolaridade }
                      limite={ this.state.valorLimite }
                      brasileiro={ this.state.brasileiro }
                    /> 
        }
      </ScrollView>
    )
  }
}

export default ZonaCadastro