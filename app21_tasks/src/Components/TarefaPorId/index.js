import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList,
ActivityIndicator, Button, Dimensions, Pressable } from 'react-native'
import api from '../../Services/api'
import Card from '../Card'
import { useNavigation } from '@react-navigation/core'
import styles from '../../style'
import { TextInput } from 'react-native-gesture-handler'

export default TarefaPorId = () => {
  const [id, setId] = useState('')
  const [tarefa, setTarefa] = useState({})
  const [busca, setBusca] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  const carregarTarefaBuscada = async () => {
    if (id !== '' && id !== undefined && id !== null) {
      const response = await api.get(`/tasks/${id}`)
      console.log(response.data)
      setTarefa(response.data)
    } else {
      alert('Digite o ID da tarefa para fazer a busca!')
    }
  }
  
  const buscarDados = async () => {
    await carregarTarefaBuscada()
    setLoading(false)
    setBusca(false)
  }

  const renderizarTarefa = () => {
    if (busca == false && tarefa.id == undefined) {
      return null
    }
    else {
      if (loading == true) {
        return(
          <View 
            style={{
            alignItems: 'center', 
            justifyContent: 'center',
            flex:1
          }} >
            <ActivityIndicator color="#1155cc" size={60} />
          </View>
        )
      }
      else {
        return(
          <View style={styles.card}>
            <Text style={styles.tituloTarefa}>{ tarefa.title }</Text>
            <Text style={styles.descricao}>{ tarefa.description }</Text>
            <View style={styles.boxBotoes}>
              <TouchableOpacity style={styles.buttonEditar}
                onPress={ irFormulario } 
              >
                <Text style={styles.txtBtns}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonExcluir}
                onPress={ excluirTarefa } 
              >
                <Text style={styles.txtBtns}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    }
  }

  const excluirTarefa = async () => {
    await api.delete(`/tasks/${tarefa.id}`)
    navigation.reset({
      index: 0,
      routes: [{ name: 'Tarefas' }]
    })
  }

  const irFormulario = async () => {
    const reloadListaTarefas = async () => {
      await api.get('/tasks')
    }
    navigation.navigate('Formulario', { 
      id: tarefa.id, 
      title: tarefa.title,
      description: tarefa.description, 
      atualizarLista: reloadListaTarefas
    })
  }

  return(
    <View style={styles.screen}>
      <TextInput style={styles.input} 
        value={ id }
        keyboardType='numeric'
        onChangeText={ (txt) => setId(txt) }
        placeholder='Digite o ID da tarefa a qual deseja' 
      />
      <Pressable
        onPress={ () => {
            if (loading === false)
              setLoading(true)
            setBusca(true)
            buscarDados()
          }
        } 
        style={({ pressed }) => [
          pressed ? styles.btnCriarAtivado : styles.btnCriar
        ]}>
          <Text style={styles.txtBtn}>Buscar Tarefa por ID</Text>
      </Pressable>
      <View style={styles.boxTask}>
        { renderizarTarefa() }
      </View>
    </View>
  )
}