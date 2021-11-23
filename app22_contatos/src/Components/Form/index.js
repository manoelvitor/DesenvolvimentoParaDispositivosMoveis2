import React, {Component, useState} from 'react'
import { View, Text, TextInput, StyleSheet, Alert, Pressable } from
'react-native'
import { useNavigation } from '@react-navigation/core'
import api from '../Services/api'
import styles from '../../style'

export default Form = ({route}) => {
  const [id, setId] = useState(route.params?.id)
  const [newNome, setNewNome] = useState(route.params?.nome)
  const [newTelefone, setNewTelefone] = useState(route.params?.telefone)
  const [newEmail, setNewEmail] = useState(route.params?.email)

  const navigation = useNavigation()

  const salvarContato = async () => {
    const bodyPut = JSON.stringify({
      id: id,
      nome: newNome,
      telefone: newTelefone,
      email: newEmail
    })

    const bodyPost = JSON.stringify({
      nome: newNome,
      telefone: newTelefone,
      email: newEmail
    })

    if (id !== undefined) {
      const response = await api.put('agenda-de-contatos', bodyPut, 
        { headers: { 'Content-Type': 'application/json' }
      })
      await route.params?.atualizarLista()
    }
    else{
      const response = await api.post('/agenda-de-contatos', bodyPost, 
        { headers: { 'Content-Type': 'application/json' }
      })
      await route.params?.atualizarLista()
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Contatos' }]
    })
  }

  return(
    <View style={styles.screen}>
      <Text style={styles.descInputs}>
        Nome contato:
      </Text>
      <TextInput
        style={styles.input}
        defaultValue={ route.params?.nome }
        onChangeText={ (text) => setNewNome(text) }
      />
      <Text style={styles.descInputs}>
        Número de telefone contato:
      </Text>
      <TextInput
        style={styles.input}
        defaultValue={ route.params?.telefone }
        onChangeText={ (text) => setNewTelefone(text) }
      />
      <Text style={styles.descInputs}>
        Email contato:
      </Text>
      <TextInput
        style={styles.input}
        defaultValue={ route.params?.email }
        onChangeText={ (text) => setNewEmail(text) }
      />
      <Pressable 
        onPress={ salvarContato }
        style={({ pressed }) => [
          pressed ? styles.btnCriarAtivado : styles.btnCriar
      ]}>
        <Text style={styles.txtBtn}>Salvar Contato</Text>
      </Pressable>
    </View>
  )
}