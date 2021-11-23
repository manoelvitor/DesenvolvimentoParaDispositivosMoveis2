import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import style from '../src/style'

import ListaFilmes from './Components/ListaFilmes'
import { SinopseFilme } from './Components/SinopseFilme'

const Stack = createStackNavigator()

const infoHeaderTelas = (a, b, c, d = false) => {
  return {
    title: `${a}`,
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
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
          name="ListaFilmes" 
          component={ ListaFilmes } 
          options={ infoHeaderTelas(
            'App Filmes',
            '#fff',
            '#000',
            false
          )}
        />
        <Stack.Screen 
          name="SinopseFilme" 
          component={ SinopseFilme }
          options={ infoHeaderTelas(
            'Sinopse Filme',
            'transparent',
            '#000',
            true
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}