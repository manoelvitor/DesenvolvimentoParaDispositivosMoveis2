import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Pessoal from './components/Pessoal/index'
import Formacao from './components/Formacao/index'
import Experiencia from './components/Experiencia/index'

const Drawer = createDrawerNavigator()

const infoHeaderTelas = (
  a = null ,
  b = null ,
  c = null ,
  d = false
) => {
  return {
    title: `${a}`,
    headerStyle: { backgroundColor: `${b}` },
    headerTintColor: `${c}`,
    headerShown: d
  }
}

export default App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Pessoal" 
          component={ Pessoal }
          options={ infoHeaderTelas('Perfil', null, null, false) } 
        />
        <Drawer.Screen 
          name="Formação" 
          component={ Formacao }
          options={ infoHeaderTelas('Formação', null, null, false) }
        />
        <Drawer.Screen 
          name="Experiência" 
          component={ Experiencia }
          options={ infoHeaderTelas('Experiência', null, null, false) }
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}