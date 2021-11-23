import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 15,
    paddingRight: 15
  },
  titulo:{
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    color: '#000'
  },
  boxMainButtons: {
    display: 'flex',
    flexDirection: 'row'
  },
  btnBuscar: {
    marginTop: 20,
    marginRight: 12,
    backgroundColor: '#434343',
    borderRadius: 5,
    padding: 15
  },
  btnBuscarAtivado: {
    marginTop: 20,
    marginRight: 12,
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 15
  },
  btnCriar: {
    marginTop: 20,
    backgroundColor: '#1155cc',
    borderRadius: 5,
    padding: 15
  },
  btnCriarAtivado: {
    marginTop: 20,
    backgroundColor: '#434343',
    borderRadius: 5,
    padding: 15
  },
  txtBtn: { 
    textAlign: 'center', 
    color: '#fff', 
    fontSize: 18 
  },
  boxTasks: {
    marginTop: 5,
    height: Dimensions.get('window').height - 160
  },
  boxTask: {
    marginTop: 15,
    height: Dimensions.get('window').height - 250
  },
  card:{
    marginTop: 15,
    marginBottom: 1,
    borderWidth: 1,
    padding: 15,
    borderColor: '#d4d4d4',
    backgroundColor: '#fff',
    borderRadius: 5
  },
  tituloTarefa: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000'
  },
  descricao:{
    fontSize: 18,
    paddingTop: 15,
    color: '#434343'
  },
  boxBotoes: {
    marginTop: 20,
    display: 'flex', 
    flexDirection: 'row' 
  },
  buttonEditar: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#1155cc',
    marginRight: 5
  },
  buttonExcluir: {
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#434343'
  },
  txtBtns: {
    color: '#fff',
    fontSize: 15
  },
  input: {
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#FFF',
    margin: 4
  }
})

export default styles