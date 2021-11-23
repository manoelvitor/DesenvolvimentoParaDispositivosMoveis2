import React, { Component } from 'react'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

const style = StyleSheet.create({
  app: {
    backgroundColor: '#eaeded',
    height: Dimensions.get('window').height,
  },
  carrossel: {
    width: Dimensions.get('window').width,
    height: 420
  },
  produtos: {
    marginTop: 15,
    height: 390,
    width: 280,
    backgroundColor: '#fff',
    marginLeft: 15,
    padding: 15
  }, 
  lastProduct: {
    borderRadius: 3,
    marginTop: 15,
    height: 390,
    width: 280,
    backgroundColor: '#fff',
    marginLeft: 15, 
    marginRight: 15,
    padding: 15
  },
  titles: {
    fontSize: 22,
    fontWeight:'bold',
    color: '#000'
  },
  imgs: {
    marginTop: 15,
    height: 220, width: 250
  },
  textos: {
    marginTop: 30,
    color: '#007185',
    fontSize: 16
  }
})

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={style.app}>
        <View style={style.carrossel}>
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}>
            <View style={style.produtos}>
              <Text style={style.titles}>
                Leia à vontade com Kindle Unlimited
              </Text>
              <Image style={style.imgs}
                source={require('./images/img01.jpg')}/>
              <Text style={style.textos}>Veja todas as ofertas</Text>
            </View>
            <View style={style.produtos}>
              <Text style={style.titles}>
                Amazon Music Unlimited: 30 dias grátis
              </Text>
              <Image style={style.imgs}
                source={require('./images/img02.jpg')}/>
              <Text style={style.textos}>Experimente agora</Text>
            </View>
            <View style={style.lastProduct}>
              <Text style={style.titles}>
                Frete GRÁTIS no seu primeiro pedido
              </Text>
              <Image style={style.imgs}
                source={require('./images/img03.jpg')}/>
              <Text style={style.textos}>Saiba mais</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default App