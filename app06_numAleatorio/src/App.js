import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions,
  Image, 
  TextInput,
  Pressable
} from 'react-native'

const style = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    paddingTop: 15,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  imgWrapper: {
    marginTop: 15,
    alignItems: 'center',
    alignContent: 'center',
    padding: 10
  },
  imgBox: { 
    backgroundColor: 'aliceblue', 
    padding: 15,
    borderRadius: 100,
    height: 110,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2, borderStyle: 'dashed'
  },
  imcImg: {
    height: 60, width: 60,
    backgroundColor: 'transparent',
  },
  txt: {
    paddingTop: 15,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red'
  },
  input: {
    marginTop: 15,
    borderWidth: 2,
    padding: 10,
    borderRadius: 3,
    borderColor: '#cecece',
    fontSize: 16,
    fontWeight: 'bold'
  },
  baseBtn: {
    marginTop: 25,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  btn: {
    backgroundColor: '#0969da'
  },
  btnPressed: {
    backgroundColor: '#434343'
  },
  btnTxt: {
    color: '#fff', 
    fontWeight: 'bold'
  },
  resultTxt: {
    marginTop: 35,
    textAlign: 'center',
    color: 'red',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 16
  },
  result: {
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  }
})

class RandomNumber extends Component {
  constructor(props) {
    super(props)

    this.state = { numeroGerado: null }

    this.input = React.createRef()

    this.gerarNum = this.gerarNum.bind(this)
  }

  gerarNum() {
    const numGerado = Math.floor(Math.random() * 10)
    this.setState({ numeroGerado: numGerado })
  }

  render() {
    return(
      <View>
        <Text style={style.title}>
          Jogo do nº Aleatório
        </Text>

        <View style={style.imgWrapper}>
          <View style={style.imgBox}>
            <Image style={style.imcImg} 
              source={require('./images/img_dice.png')}/>
          </View>
        </View>

        <Text style={style.txt}>
          Pense em um nº de 0 à 10
        </Text>

        <TextInput
          ref={ this.input }
          style={style.input}
          placeholder="Ex: 7" />

        <Pressable
          onPress={ this.gerarNum }
          style={
            ({ pressed }) => [
              style.baseBtn,
              pressed ? style.btnPressed : style.btn
            ]
          }>
            <Text style={style.btnTxt}>Descobrir</Text>
        </Pressable>

        <Text style={style.resultTxt}>
            Número aleatório gerado:
        </Text>
        <Text style={style.result}>
          { this.state.numeroGerado }
        </Text>

     </View>
    )
  }
}

export default App = () => {
  return(
    <View style={style.screen}>
      <RandomNumber/>
    </View>
  )
}