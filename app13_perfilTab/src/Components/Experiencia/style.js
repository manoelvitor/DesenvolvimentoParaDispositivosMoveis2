import { StyleSheet, Dimensions } from "react-native"

const style = StyleSheet.create({
  phoneScreen: {
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    paddingLeft: 15, paddingRight: 15
  },
  titles: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#000' },
  txt: { color: '#000' },
  lastcard: {
    width: (Dimensions.get('window').width - 30),
    minHeight: 50,
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 1,
    borderColor: '#cecece' /*transparent' */,
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 25
  }
})

export default style