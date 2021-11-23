import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import styleUsuario from './style'

export default Registro = ({ route }) => {
  const navigate = useNavigation()
  return(
    <View style={styleUsuario.boxUsuario}>
      <Text style={styleUsuario.title}>Usuário Cadastrado</Text>
      <Text style={styleUsuario.txt}>Nome: { route.params?.nome }</Text>      
      <Text style={styleUsuario.txt}>Idade: { route.params?.idade }</Text>
      <Text style={styleUsuario.txt}>Sexo: { route.params?.sexoPessoa }</Text>
      <Text style={styleUsuario.txt}>Escolaridade: { route.params?.escolaridade }</Text>
      <Text style={styleUsuario.txt}>Limite: { route.params?.valorLimite }</Text>
      <Text style={styleUsuario.txt}>
        Nacionalidade: { 
          route.params?.brasileiro == true ?
            'Brasileiro' : 'Estrangeiro'
        }
      </Text>      
    </View>
  )
}