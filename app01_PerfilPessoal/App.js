import React, { Component, useState } from 'react'
import { 
  ScrollView,
  View, 
  Text, 
  StyleSheet,
  Dimensions, 
  Button,
  Image,
  Linking
} from 'react-native'

const estilo = StyleSheet.create({
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
  nome: { fontSize: 32, fontWeight: 'bold' },
  login: { fontSize: 22, color: '#aeaeae' },
  bio: { marginTop: 10, fontSize: 16 },
  titles: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },

  card: {
    width: (Dimensions.get('window').width - 30),
    minHeight: 50,
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 1,
    borderColor: '#cecece' /*transparent' */,
    borderRadius: 4,
    marginTop: 15
  },
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

const Profile = (props) => {
  return(
    <View style={estilo.profileCard}>
      <Image 
        style={estilo.profileImg} 
        source={{uri: props.url}}
      />
      <View style={estilo.textsBox}>
        <Text style={estilo.nome}>{props.name}</Text>
        <Text style={estilo.login}>{props.login}</Text>
        <Text style={estilo.bio}>{props.bio}</Text>
        <Text 
          style={{ marginTop: 15, color: '#0071d3', fontSize: 18 }} 
          onPress={() => Linking.openURL(props.link)}>
          Veja meu perfil e projetos no Github
        </Text>
      </View>
    </View>
  )
}

const PerfonalData = (props) => {
  return(
    <View style={estilo.card}>
      <Text style={estilo.titles}>Dados Pessoais</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Nome:</Text> {props.name}</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Idade:</Text> {props.age} de idade</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Endereço:</Text> {props.adress}</Text>
    </View>
  )
}

const Qualification = () => {
  return(
    <View style={estilo.card}>
      <Text style={estilo.titles}>Qualificação Profissional</Text>
      <Text style={{ fontWeight: 'bold' }}>Graduação em Sistemas para Internet</Text>
      <Text>Fatec Rubens Lara - 2019 até 2021</Text>
      <Text style={{ fontWeight: 'bold' }}>Curso Técnico em Informática para Internet</Text>
      <Text>ETEC Aristóteles Ferreira - 2018 até 2019</Text>
    </View>
  )
}

const ProfessionalExperience = () => {
  return(
    <View style={estilo.lastcard}>
      <Text style={estilo.titles}>Experiência Profissional</Text>
      <Text>Inexperiente pofissionalmente 😅</Text>
    </View>
  )
}

const Screen = () => {
  return(
    <ScrollView style={estilo.phoneScreen}>
       <Profile 
        url="https://avatars.githubusercontent.com/u/44307177?v=4"
        name="Ivan Guimarães"
        login="2504Guimaraes"
        bio="Studying in College - To find out how technology works it's rough and funny at the same time."
        link='https://github.com/2504Guimaraes'
       />
       <PerfonalData 
        name='Ivan Guimarães dos S. da Silva'
        age='22'
        adress='Guarujá - SP'
       />
       <Qualification/>
       <ProfessionalExperience/>
    </ScrollView>
  )
}

export default Screen