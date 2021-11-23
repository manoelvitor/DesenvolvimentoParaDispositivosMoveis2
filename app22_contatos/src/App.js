import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Contatos from './Components/Contatos'
import Form from './Components/Form'

const Stack = createStackNavigator()

const infoHeaderTelas = (a, b, c, d = false) => {
  return {
    title: `${a}`,
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 23, fontWeight: 'bold' },
    headerStyle: { 
      backgroundColor: `${b}`, 
      elevation: 0
    },
    headerTintColor: `${c}`,
    headerShown: d
  }
}

export default App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="Contatos"  // Contatos lidos pela minha API
          component={ Contatos } 
          options={ infoHeaderTelas(
            'Contatos lidos pela API',
            'transparent',
            '#000',
            false
          )}
        />
        <Stack.Screen 
          name="Formulario"  // Formulário de criação e edição de contatos
          component={ Form } 
          options={ infoHeaderTelas(
            'Editar / Criar Contato',
            'transparent',
            '#000',
            true
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}