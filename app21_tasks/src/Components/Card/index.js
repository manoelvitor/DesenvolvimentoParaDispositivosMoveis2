import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import api from '../../Services/api'
import { useNavigation } from '@react-navigation/core'
import styles from '../../style' 


export default Card = ({ data, funcCarregarTarefas }) => {
  const [id, setId] = useState(data?.id)
  const [title, setTitle] = useState(data?.title)
  const [description, setDescription] = useState(data?.description)
  
  const excluirTarefa = async () => {
    const response = await api.delete(`/tasks/${id}`)
    await funcCarregarTarefas()
  }
  
  const navigation = useNavigation()
  
  const irFormulario = async () => {
    navigation.navigate('Formulario', { 
      id: id, 
      title: title,
      description: description, 
      atualizarLista: funcCarregarTarefas
    })
  }

  return(
    <View>
      <View style={styles.card}>
          <Text style={styles.tituloTarefa}>{ title }</Text>
          <Text style={styles.descricao}>{ description }</Text>
          <View style={styles.boxBotoes}>
            <TouchableOpacity style={styles.buttonEditar}
              onPress={ irFormulario } >
              <Text style={styles.txtBtns}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonExcluir}
              onPress={ excluirTarefa } >
              <Text style={styles.txtBtns}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}
  