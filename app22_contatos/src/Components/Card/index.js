import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import api from '../Services/api'
import { useNavigation } from '@react-navigation/core'
import styles from '../../style'

export default Card = ({ data, funcCarregarContatos }) => {
  const [id, setId] = useState(data?.id)
  const [nome, setNome] = useState(data?.nome)
  const [telefone, setTelefone] = useState(data?.telefone)
  const [email, setEmail] = useState(data?.email)

  const excluirContato = async () => {
    const response = await api.delete(`/agenda-de-contatos/${id}`)
    await funcCarregarContatos()
  }

  const navigation = useNavigation()
  
  const irFormulario = async () => {
    navigation.navigate('Formulario', { 
      id: id, 
      nome: nome,
      telefone: telefone, 
      email: email,
      atualizarLista: funcCarregarContatos
    })
  }

  return(
    <View>
      <View style={styles.card}>
          <Text style={styles.tituloTarefa}>{ nome }</Text>
          <Text style={styles.descricao}>{ telefone }</Text>
          <Text style={styles.descricao}>{ email }</Text>
          <View style={styles.boxBotoes}>
            <TouchableOpacity style={styles.buttonEditar}
              onPress={ irFormulario } >
              <Text style={styles.txtBtns}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonExcluir}
              onPress={ excluirContato } >
              <Text style={styles.txtBtns}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}