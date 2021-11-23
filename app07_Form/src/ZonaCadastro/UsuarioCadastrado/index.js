import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styleUsuario from './style'

class UsuarioCadastrado extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <View style={styleUsuario.boxUsuario}>
        <Text style={styleUsuario.title}>Dados Informados</Text>
        <View style={styleUsuario.pontilhado}></View>
        <Text style={styleUsuario.txt}>Nome: { this.props.nome }</Text>
        <Text style={styleUsuario.text}>Idade: { this.props.idade }</Text>
        <Text style={styleUsuario.txt}>Sexo: { this.props.sexo }</Text>
        <Text style={styleUsuario.txt}>Escolaridade: { this.props.escolari }</Text>
        <Text style={styleUsuario.txt}>Limite: { this.props.limite }</Text>
        <Text style={styleUsuario.txt}>
          Nacionalidade: { 
            this.props.brasileiro == true ? 
              'Brasileiro' : 'Estrangeiro'
          }
        </Text>
      </View>
    )
  }
}

export default UsuarioCadastrado