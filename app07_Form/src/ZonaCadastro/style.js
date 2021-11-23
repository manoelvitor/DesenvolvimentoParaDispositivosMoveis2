import { StyleSheet, Dimensions } from "react-native";

const styleZonaCadastro = StyleSheet.create({
  zonaCadastro: {
    marginLeft: 10, 
    marginRight: 10
  },
  formulario: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 15,
  },
  inputTitles: {
    marginTop: 10,
  },
  inputs: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 2
  },
  baseBtn: {
    marginTop: 25,
    padding: 10,
    alignItems: 'center',
    borderRadius: 2
  },
  btn: {
    backgroundColor: '#336fca',
  },
  btnPressed: {
    backgroundColor: '#285aa5',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 16 
  }
})

export default styleZonaCadastro