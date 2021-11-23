import { StyleSheet, Dimensions } from "react-native"

const style = StyleSheet.create({
  screen: {
    width: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
    backgroundColor: 'transparent',
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    marginTop: 15,
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  txtTitleInput: {
    marginTop: 15,
    color: '#000',
    fontSize: 18
  },
  txtInput: {
    color: '#000',
    fontSize: 18
  },
  titleValue: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#445bca'
  },
  boxValue: {
    marginTop: 15,
    borderColor: '#445bca',
    borderWidth: 2,
    padding: 15
  },
  txtValue: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default style