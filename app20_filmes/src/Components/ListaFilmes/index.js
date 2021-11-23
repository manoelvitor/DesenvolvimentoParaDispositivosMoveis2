import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import axios from 'axios'
import Filme from '../Filme/index'
import style from '../../style'

const apiFilmes = axios.create({
  baseURL: 'https://sujeitoprogramador.com/r-api/?api=filmes'
})

export default class ListaFilmes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmesComp: []
    }
  }

  async componentDidMount() {
    const response = await apiFilmes.get('')
    this.setState({
      filmesComp: response.data
    })
  }

  render() {
    return(
      <View style={style.screen}>
        <Text style={style.title}>App de Filmes</Text>
        <FlatList 
          style={style.caixaFilmes}
          scrollEnabled
          data={ this.state.filmesComp }
          renderItem={ ({ item }) => <Filme navigation={ this.props.navigation } data={item} /> }
          key={ filmeLido => filmeLido.id }
        />
      </View>
    )
  }
}