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
import { set } from 'react-native-reanimated'

const estilo = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    paddingTop: 15,
    fontSize: 22,
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
  baseBtn: {
    marginTop: 25,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  btn: {
    backgroundColor: '#0969da',
  },
  btnPressed: {
    backgroundColor: '#0a5bba',
  },
  btnTxt: {
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 16 
  },result: {
    marginTop: 35,
    textAlign: 'center'
  }
})

class CalculadoraImc extends Component {
  constructor(props) {
    super(props)
    
    this.state = { peso: null, altura: null, msg: '' }

    this.input1 = React.createRef()
    this.input2 = React.createRef()

    this.pegaPeso = this.pegaPeso.bind(this)
    this.pegaAltura = this.pegaAltura.bind(this)
    this.calcularImc = this.calcularImc.bind(this)
    this.verImc = this.verImc.bind(this)
  }

  pegaPeso(pesoDigitado) { this.setState({ peso: pesoDigitado }) }

  pegaAltura(alturaDigitada) { this.setState({ altura: alturaDigitada }) }

  calcularImc(imc, altura) {
    if (altura > 0.35 && altura < 2.8) {
      if (imc >= 40) 
        this.setState({ msg: 'Obesidade Grau III' })
      else if (imc >= 35 && imc <= 39.9)
        this.setState({ msg: 'Obesidade Grau II' })
      else if (imc >= 30 && imc <= 34.9)
        this.setState({ msg: 'Obesidade Grau I' })
      else if (imc >= 25 && imc <= 29.9) 
        this.setState({ msg: 'Sobrepeso' })
      else if (imc >= 18.5 && imc <= 24.9) 
        this.setState({ msg: 'Peso Normal' })
      else if (imc <= 18.5) 
        this.setState({ msg: 'Abaixo do peso' })
    }
    else {
      this.setState({ msg: 'Altura inválida!' })
    }
  }

  verImc() {
    const altura = this.state.altura
    const peso = this.state.peso
    if (altura != null && peso !== null) {
      if (!isNaN(altura) && !isNaN(peso)) {
        const vlImc = (peso / (altura * altura)).toFixed(2)
        this.calcularImc(vlImc, altura)
        this.input1.current.clear()
        this.input2.current.clear()
        this.setState({ peso: null, altura: null })    
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
        <Text style={estilo.title}>
          Cálculo do Imc
        </Text>
        <View style={estilo.imgWrapper}>
          <View style={estilo.imgBox}>
            <Image style={estilo.imcImg} 
              source={require('./images/img_imc.png')}/>
          </View>
        </View>

        <Text style={estilo.inputTitles}>Digite sua altura (m - Metros)</Text>
        
        <TextInput
          ref={ this.input2 }
          onChangeText={ this.pegaAltura }
          style={estilo.inputs}
          placeholder=" Ex: 1.78" />

        <Text style={estilo.inputTitles}>Digite seu peso (kg - Quilos)</Text>
        
        <TextInput
          ref={ this.input1 }
          onChangeText={ this.pegaPeso }
          style={estilo.inputs}
          placeholder=" Ex: 75" />

        <Pressable
          style={ ({pressed}) => [
            estilo.baseBtn,
            pressed ? estilo.btnPressed : estilo.btn  
          ]}
          onPress={ this.verImc }>
          <Text style={estilo.btnTxt}>
            Verificar
          </Text>
        </Pressable>

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
      <CalculadoraImc/>
    </View>
  )
}