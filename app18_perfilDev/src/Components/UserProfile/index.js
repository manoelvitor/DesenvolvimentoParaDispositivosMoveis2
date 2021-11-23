import React, { Component } from 'react'
import { Text, View, Linking } from 'react-native'
import style from '../../style'

export default class UserProfile extends Component {
  render() {
    const { id, name, repos_url, created_at, followers, following } = this.props.data
    return(
      <View style={style.profileShowed}>
        <Text style={style.txtProfile}>Id: { id } </Text>
        <Text style={style.txtProfile}>Nome: { name } </Text>
        <Text style={style.txtLink}
          onPress={() => Linking.openURL(repos_url)}
        >
          Repositórios: { repos_url } 
        </Text>
        <Text style={style.txtProfile}>Criado em: { created_at } </Text>
        <Text style={style.txtProfile}>Seguidores: { followers } </Text>
        <Text style={style.txtProfile}>Seguindo: { following } </Text>
      </View>
    ) 
  }
}