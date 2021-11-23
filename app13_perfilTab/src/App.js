import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Pessoal from './Components/Pessoal/index'
import Formacao from './Components/Formacao/index'
import Experiencia from './Components/Experiencia/index'

const infoTabBar = (
  a = 'transparent',
  b = 'transparent',
  c = 'transparent',
  d = 0,
  e = 0
) => {
  return {
    style: { 
      backgroundColor: a,
      borderTopColor: b,
    },
    activeTintColor: c,
    tabStyle: {
      paddingBottom: d,
      paddingTop: e
    }
  }
}

const infoNavTelas = (
  funcGerarIcone,
  a = null ,
  b = null ,
  c = null ,
  d = false
) => {
  return {
    tabBarIcon: funcGerarIcone,
    title: `${a}`,
    headerStyle: { backgroundColor: `${b}` },
    headerTintColor: `${c}`,
    headerShown: d
  }
}

const criarIcone = (nome, cor, tamanho) => {
  return (
    <FontAwesome name={`${nome}`} color={`${cor}`} size={tamanho} />
  )
}

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={ 
          infoTabBar(
            'transparent',
            'transparent',
            '#4285f4',
            5,
            5
          )
        }
      >
        <Tab.Screen 
          name="Pessoal" 
          component={ Pessoal }
          options={ 
            infoNavTelas(
              () => criarIcone('user-circle', '#434343', 20), 
              "Pessoal", 
              null, 
              null, 
              false
            )
          } 
        />
        <Tab.Screen 
          name="Formação" 
          component={ Formacao }
          options={ 
            infoNavTelas(
              () => criarIcone('graduation-cap', '#434343', 20), 
              "Formação", 
              null, 
              null, 
              false
            )
          } 
        />
        <Tab.Screen 
          name="Experiência" 
          component={ Experiencia }
          options={
            infoNavTelas(
              () => criarIcone('address-card', '#434343', 20), 
              "Experiência", 
              null, 
              null, 
              false
            )
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}