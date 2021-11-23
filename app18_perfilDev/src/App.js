import React, { Component } from 'react'
import { View, Text, TextInput, Pressable, Image, Linking } from 'react-native'
import axios from 'axios'
import style from './style'
import UserProfile from './Components/UserProfile'

const apiGithub = axios.create({
  baseURL: `https://api.github.com/users/`
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuarioDigitado: '',
      buscaIniciada: false,
      usuarioBuscado: '',
      loading: true,
      usuarioComponent: {}
    }
    this.pegarUserDigitado = this.pegarUserDigitado.bind(this)
    this.buscarPerfil = this.buscarPerfil.bind(this)
    this.renderImg = this.renderImg.bind(this)
    this.renderPerfil = this.renderPerfil.bind(this)
  }

  async componentDidUpdate() {
    const showMsg = (txt) => {
      console.log('--------------------------------------------------')
      console.log(`${txt}`)
      console.log('--------------------------------------------------')
    }

    if(this.state.buscaIniciada === false)
      return null
    else {
      try {
        const response = await apiGithub.get(`${this.state.usuarioBuscado}`)
        this.setState({
          loading: false,
          usuarioComponent: response.data
        })
      } catch(e) {
        showMsg(e.message)
      }
    }
  }

  renderImg() {
    if (this.state.buscaIniciada != true)
      return null 
    else {
      if (this.state.loading == false) {
        return(
          <View style={style.boxImg}>
            <Image style={style.githubImg}
              source={{ 
                uri: `${this.state.usuarioComponent.avatar_url}` }}
            />
          </View>
        )
      } 
      else { return null }
    }
  }

  renderPerfil() {
    if (this.state.buscaIniciada != true) {
      return(
        <View>
          <Text>
            Digite um perfil do Github para buscarmos informações
            a respeito do mesmo.
          </Text>
        </View>
      )
    } else {
      if(this.state.loading == true) {
        return(
          <View>
            <Text>Carregando dados do usuário...</Text>
          </View>
        )
      } else {
        return(
          <UserProfile 
            data={{
              id: this.state.usuarioComponent.id,
              name: this.state.usuarioComponent.name,
              repos_url: this.state.usuarioComponent.repos_url,
              created_at: this.state.usuarioComponent.created_at,
              followers: this.state.usuarioComponent.followers,
              following: this.state.usuarioComponent.following,
            }}
          />
        )
      }
    }
  }

  buscarPerfil() {
    this.setState({ usuarioBuscado: this.state.usuarioDigitado })
    this.setState({ usuarioDigitado: '' })
    this.setState({ buscaIniciada: true })
  }

  pegarUserDigitado(txt) { this.setState({ usuarioDigitado: txt }) }

  render() {
    return(
      <View style={style.screen}>
        <Text style={style.title}>Perfil dos Devs</Text>
        
        <View>{ this.renderImg() }</View>

        <View style={style.inputBox}>
            <TextInput style={style.input}
              value={ this.state.usuarioDigitado }
              placeholder=' Nome de perfil github'
              onChangeText={ this.pegarUserDigitado }
            />
            <Pressable 
              onPress={ this.buscarPerfil }
              style={
                ({ pressed }) => [
                  pressed ? style.btnAtivado : style.btnDesativado
              ]}
            >
              <Text style={style.btnTxt}>Buscar</Text>
            </Pressable>
        </View>

        <View>{ this.renderPerfil() }</View>

      </View>
    )
  }
}