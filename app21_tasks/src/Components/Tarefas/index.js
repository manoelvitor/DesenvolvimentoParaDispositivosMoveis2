import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList,
ActivityIndicator, Button, Dimensions, Pressable } from 'react-native'
import api from '../../Services/api'
import Card from '../Card'
import { useNavigation } from '@react-navigation/core'
import styles from '../../style'


export default Tarefas = () => {
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(true)

  const buscarDados = async () => {
    await carregarTarefas()
    setLoading(false)
  }

  useEffect(() => {
    buscarDados()
  }, [])

  const carregarTarefas = async () => {
    const response = await api.get('/tasks')
    setTarefas(response.data)
  }

  const navigation = useNavigation()


  const buscarTarefaPorId = async () => {
    navigation.navigate('TarefaPorId')
  }

  const irFormulario = async () => {
    navigation.navigate('Formulario', {
      atualizarLista: carregarTarefas
    })
  }

  if(loading){
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
  else{
    return(
      <View style={styles.screen}>
        <Text style={styles.titulo}>
          App Cadastro Tarefas
        </Text>
        <View style={styles.boxMainButtons}>
          <Pressable
            onPress={ buscarTarefaPorId } 
            style={({ pressed }) => [
              pressed ? styles.btnBuscarAtivado : styles.btnBuscar
            ]}>
              <Text style={styles.txtBtn}>Buscar tarefa por ID</Text>
          </Pressable>
          <Pressable
            onPress={ irFormulario } 
            style={({ pressed }) => [
              pressed ? styles.btnCriarAtivado : styles.btnCriar
            ]}>
              <Text style={styles.txtBtn}>Nova Tarefa</Text>
          </Pressable>
        </View>
        <FlatList
          style={styles.boxTasks}
          scrollEnabled
          data={ tarefas }
          keyExtractor={ item => item.id.toString() }
          renderItem={ ({item}) => <Card data={item} funcCarregarTarefas={ carregarTarefas } /> }
        />
      </View>
    )
  }
}