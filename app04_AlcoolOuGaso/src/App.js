import React,{ Component } from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
  Image, 
  TextInput,
  TouchableHighlight
} from 'react-native'


const estilo = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    paddingTop: 15,
    fontSize: 25,
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
    backgroundColor: 'lightblue', 
    padding: 15,
    borderRadius: 100,
    height: 110,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2, borderStyle: 'dashed'
  },
  fuelImg: {
    height: 65, width: 65,
    backgroundColor: 'transparent',
    marginRight: 6
  },
  inputTitles: {
    marginTop: 8,
    fontWeight: 'bold'
  },
  inputs: {
    marginTop: 5,
    borderWidth: 2,
    padding: 10,
    borderRadius: 3
  },
  btnVerify: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#41b9ff',
    borderWidth: 2,
    borderColor: '#096eb4',
    alignItems: 'center',
    borderRadius: 3
  },
  btnTxt: {
    color: '#fff', 
    fontWeight: 'bold'
  },
  result: {
    marginTop: 35,
    textAlign: 'center'
  }
})

class Verificador extends Component {
  
  constructor(props) {
    super(props)

    this.state = { etanol: null, gasolina: null, msg: '' }
    
    this.input1 = React.createRef()
    this.input2 = React.createRef()

    this.pegaEtanol = this.pegaEtanol.bind(this)
    this.pegaGasolina = this.pegaGasolina.bind(this)
    this.verificar = this.verificar.bind(this)
    this.calcular = this.calcular.bind(this)
  }

  pegaEtanol(vlDigitado) { this.setState({ etanol: vlDigitado }) }
  
  pegaGasolina(vlDigitado) { this.setState({ gasolina: vlDigitado }) }

  verificar(vlResultado) {
    if (vlResultado < 0.7)
      this.setState({ msg: 'Use álcool.' })
    else if (vlResultado > 0.7)
      this.setState({ msg: 'Use gasolina.' })
  }
 
  calcular() {
    const etanol = this.state.etanol 
    const gasolina = this.state.gasolina

    if (etanol != null && gasolina != null) {
      if (!isNaN(etanol) && !isNaN(gasolina)) {
        const resultado = (etanol / gasolina).toFixed(2)
        this.verificar(resultado)
        this.input1.current.clear()
        this.input2.current.clear()
        setTimeout(() => {
          this.setState({ etanol: null, gasolina: null })
        }, 1000)
      } 
      else {
        this.setState({ msg: 'Digite apenas números!' })
      }
    } 
    else {
      this.setState({ msg: 'Digite em todos os campos!' })
    }
  }

  render() {
    return(
      <View>
        <Text style={estilo.title}>Álcool ou Gasolina</Text>
        <View style={estilo.imgWrapper}>
          <View style={estilo.imgBox}>
            <Image style={estilo.fuelImg} 
              source={require('./images/img-gasolina.png')}/>
          </View>
        </View>
        
        <Text style={estilo.inputTitles}>Digite o preço do álcool</Text>
        
        <TextInput
          ref={ this.input1 }
          onChangeText={ this.pegaEtanol }
          style={estilo.inputs}
          placeholder=" Digite o preco do álcool" />

        <Text style={estilo.inputTitles}>Digite o preço da gasolina</Text>
        
        <TextInput
          ref={ this.input2 }
          onChangeText={ this.pegaGasolina }
          style={estilo.inputs}
          placeholder=" Digite o preco da gasolina" />
        
        <TouchableHighlight
          onPress={ this.calcular }
          style={estilo.btnVerify}>
            <Text style={estilo.btnTxt}>Verificar</Text>
        </TouchableHighlight>

        <Text style={estilo.result}>
            { this.state.msg }
        </Text>
      </View>
    )
  }
}

export default App = () => {
  return(
    <View style={estilo.screen}>
      <Verificador/>
    </View>
  )
}