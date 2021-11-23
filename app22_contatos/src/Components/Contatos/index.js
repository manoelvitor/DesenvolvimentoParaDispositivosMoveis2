import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList,
ActivityIndicator, Button, Dimensions, Pressable } from 'react-native'
import api from '../Services/api'
import Card from '../Card'
import { useNavigation } from '@react-navigation/core'
import styles from '../../style'

export default Contatos = () => {
  const [contatos, setContatos] = useState([])
  const [loading, setLoading] = useState(true)

  const buscarDados = async () => {
    await carregarContatos()
    setLoading(false)
  }

  useEffect(() => {
    buscarDados()
  }, [])

  const carregarContatos = async () => {
    const response = await api.get('/agenda-de-contatos')
    setContatos(response.data)
  }

  const navigation = useNavigation()

  const irFormulario = async () => {
    navigation.navigate('Formulario', {
      atualizarLista: carregarContatos
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
  else {
    return(
      <View style={styles.screen}>
        <Text style={styles.titulo}>App Cadastro de Contatos</Text>
        <Pressable
          onPress={ irFormulario } 
          style={({ pressed }) => [
            pressed ? styles.btnCriarAtivado : styles.btnCriar
          ]}>
            <Text style={styles.txtBtn}>Novo Contato</Text>
        </Pressable>
        <FlatList
          style={styles.boxTasks}
          scrollEnabled
          data={ contatos }
          keyExtractor={ item => item.id.toString() }
          renderItem={ ({item}) => <Card data={item} funcCarregarContatos={ carregarContatos } /> }
        />
      </View>
    )
  }
}