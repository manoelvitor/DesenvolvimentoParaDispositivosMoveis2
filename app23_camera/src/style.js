import { Dimensions, StyleSheet } from "react-native"

const numeroIdentico = 200
const largura = numeroIdentico
const altura = numeroIdentico

const styles = StyleSheet.create({
  screen:{
    backgroundColor: '#f5f5f5',
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000'
  },
  preview:{
    top: 15,
    alignSelf: 'center',
    height: altura, 
    width: largura,
    alignItems: 'center'
  },
  boxBtnsLinkedToCamera: {
    paddingTop: 30, // Servindo como substitu. de marginTop ...
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 15
  },
  btnTakePic: {
    backgroundColor: 'pink',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30, 
    paddingRight: 30,
    marginRight: 7,
    borderRadius: 3,
    backgroundColor: '#434343'
  },
  btnOpenAlbum: {
    backgroundColor: 'purple',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30, 
    paddingRight: 30,
    borderRadius: 3,
    backgroundColor: '#434343'
  },
  txtBtnCamera: { 
    color: '#fff', 
    fontSize: 16 
  },
  capture:{
    flex: 0,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  input: {
    borderWidth: 2,
    borderColor: '#d7d7d7',
    fontSize: 16
  },
  input2: {
    marginTop: 14,
    borderWidth: 2,
    borderColor: '#d7d7d7',
    fontSize: 16,
    backgroundColor: '#e1e1e1'
  },
  btnSave: {
    marginTop: 14,
    padding: 18,
    backgroundColor: '#006cc2',
    borderRadius: 3
  },
  btnTxt: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  usuario: {
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#cecece',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5
  },
  imgUser: {
    backgroundColor: '#cecece',
    height: 90, width: 90,
    borderRadius: 5
  },
  boxInfoUser: {
    marginLeft: 10,
    maxWidth: 195
  },
  txtNm: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold'
  },
  txtArea: {
    color: '#000',
    fontSize: 20
  }
})

export default styles