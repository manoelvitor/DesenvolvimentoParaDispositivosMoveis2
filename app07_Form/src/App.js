import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
  ScrollView 
} from 'react-native'
import ZonaCadastro from './ZonaCadastro'

const styleApp = StyleSheet.create({
  app: {
    height: Dimensions.get('window').height,
    backgroundColor: '#fff'
  }
})

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <ScrollView style={styleApp.app}>
        <ZonaCadastro />
      </ScrollView>
    )
  }
}

export default App