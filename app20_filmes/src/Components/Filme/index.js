import React, { Component } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import style from '../../style'

export default class Filme extends Component {
  constructor(props) {
    super(props)
    this.verSinopse = this.verSinopse.bind(this)
  }

  verSinopse() {
    const { nome, sinopse } = this.props.data
    this.props.navigation.navigate('SinopseFilme', {
      nomeFilme: nome,
      sinopseFilme: sinopse
    })
  }

  render() {
    const { nome, foto } = this.props.data
    return(
      <View style={style.filme}>
        <View style={style.boxTitleFilme}>  
          <Text style={style.titleFilme}>{ nome }</Text>
          <Pressable onPress={ () => this.verSinopse() }>
            <Text style={style.lerMais}>Leia mais</Text>
          </Pressable>
        </View>
        <Image style={style.filmeImg} 
          source={{ uri: `${foto}` }} />
      </View>
    )
  }
}