import { StyleSheet, Dimensions } from "react-native"

const style = StyleSheet.create({
  phoneScreen: {
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    paddingLeft: 15, paddingRight: 15
  },
  profileCard: {
    width: (Dimensions.get('window').width - 30),
    minHeight: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
    alignItems: 'center'
  },
  profileImg: {
    width: 230,
    height: 230,
    borderRadius: 500,
    borderWidth: 1,
    borderColor: '#c7c7c7'
  },

  textsBox: { marginTop: 15 },
  nome: { fontSize: 32, fontWeight: 'bold', color: '#000' },
  login: { fontSize: 22, color: '#aeaeae', color: '#000' },
  bio: { marginTop: 10, fontSize: 16, color: '#000' },
  titles: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#000' },
  txtBtn: { marginTop: 15, color: '#0071d3', fontSize: 18 }
})

export default style