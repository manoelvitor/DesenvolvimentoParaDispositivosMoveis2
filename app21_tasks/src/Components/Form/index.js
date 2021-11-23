import React, {Component, useState} from 'react'
import { View, Text, TextInput, StyleSheet, Alert, Pressable } from
'react-native'
import { useNavigation } from '@react-navigation/core'
import api from '../../Services/api'
import styles from '../../style'

export default Form = ({route}) => {
  const [id, setId] = useState(route.params?.id)
  const [newTitle, setNewTitle] = useState(route.params?.title)
  const [newDescription, setNewDescription] = useState(route.params?.description)
  
  const navigation = useNavigation()

  const salvarTarefa = async () => {
    const body = JSON.stringify({
      title: newTitle, 
      description: newDescription
    })

    if (id !== undefined) {
      const response = await api.put(`/tasks/${id}`, body, 
        { headers: { 'Content-Type': 'application/json' }
      })
      await route.params?.atualizarLista()
    }
    else{
      const response = await api.post('/tasks', body, 
        { headers: { 'Content-Type': 'application/json' }
      })
      await route.params?.atualizarLista()
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Tarefas' }]
    })
  }

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        defaultValue={ route.params?.title }
        onChangeText={ (text) => setNewTitle(text) }
      />
      <TextInput
        style={styles.input}
        defaultValue={route.params?.description}
        onChangeText={ (text) => setNewDescription(text) }
      />
      <Pressable 
        onPress={ salvarTarefa }
        style={({ pressed }) => [
          pressed ? styles.btnCriarAtivado : styles.btnCriar
      ]}>
        <Text style={styles.txtBtn}>Salvar Tarefa</Text>
      </Pressable>
    </View>
  )
}
  