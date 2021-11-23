import { useNavigation } from '@react-navigation/core'
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import style from '../../style'

export const SinopseFilme = ({ route }) => {
  const navigate = useNavigation()
  return(
    <View style={style.zonaSinopse}>
      <Text style={style.tituloZonaSi}>
        { route.params?.nomeFilme } - Sinopse
      </Text>
      <View style={style.boxSinopse}>
        <Text style={style.txtSinopse}>
          { route.params?.sinopseFilme }
        </Text>
      </View>
    </View>
  )
}