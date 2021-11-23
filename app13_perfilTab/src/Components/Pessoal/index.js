import React from 'react'
import { 
  Text, 
  View, 
  Image, 
  ScrollView, 
  Pressable, 
  Linking 
} from 'react-native'
import style from './style'

export default Pessoal = () => {
  const profile = {
    name: "Ivan Guimarães",
    login: "2504Guimaraes",
    bio: "Studying in College - To find out how technology works it's rough and funny at the same time.",
    link: "https://github.com/2504Guimaraes"
  }
  return(
    <ScrollView style={style.phoneScreen}>
      <View style={style.profileCard}>
        <Image 
          style={style.profileImg} 
          source={require('./images/foto-perfil.jpeg')}
        />
        <View style={style.textsBox}>
          <Text style={style.nome}>{profile.name}</Text>
          <Text style={style.login}>{profile.login}</Text>
          <Text style={style.bio}>{profile.bio}</Text>
          <Pressable
            onPress={ () => { Linking.openURL(profile.link) }}
          >
            <Text style={style.txtBtn}>
              Veja meu perfil e projetos no Github
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}