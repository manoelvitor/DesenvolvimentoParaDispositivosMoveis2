import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Form from './Components/Form/index'
import Galeria from './Components/Galeria/index'

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
          name="Formulario"
          component={ Form } // Formulário de cadastro c/ câmera
          options={
            infoHeaderTelas(
              'Formulário de Cadastro',
              'transparent',
              '#000',
              false
            )
          }
        />
        <Stack.Screen 
          name="Galeria"
          component={ Galeria } // Formulário de cadastro c/ câmera
          options={
            infoHeaderTelas(
              'Galeria de Usuários',
              'transparent',
              '#000',
              true
            )
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}