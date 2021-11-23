import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'

import Formulario from './pages/Formulario/index'
import Registro from './pages/Registro/index'

const Stack = createStackNavigator()

const infoHeaderTelas = (a, b, c, d = false) => {
  return {
    title: `${a}`,
    headerStyle: { backgroundColor: `${b}` },
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
          component={ Formulario } 
          options={ infoHeaderTelas(
              'Crie sua conta',
              '#336fca',
              '#fff',
              true
            )} 
          />    
          <Stack.Screen 
          name="Registro" 
          component={ Registro } 
          options={ infoHeaderTelas(
              'Usuário Cadastrado',
              '#336fca',
              '#fff',
              true
            )} 
          />    
      </Stack.Navigator>
    </NavigationContainer>
  )
}