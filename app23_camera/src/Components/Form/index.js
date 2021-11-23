import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, StatusBar, StyleSheet, TouchableOpacity, Modal,
  Image, PermissionsAndroid, Platform, TextInput } from 'react-native'
import { RNCamera } from 'react-native-camera'
import CameraRoll from '@react-native-community/cameraroll'
import * as ImagePicker from 'react-native-image-picker'
import { Picker } from '@react-native-picker/picker'
import { file } from '@babel/types'
import { useNavigation } from '@react-navigation/core'
import styles from '../../style'

import { criarTabelas, addUsuario } from '../../Database'

export default Form = () => {
  const [open, setOpen] = useState(false)
  const [cameraComp, setCamera] = useState(null)
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  const [nome, setNome] = useState('')
  const [area, setArea] = useState('Informática')
  const [fotoUsuario, setFotoUsuario] = useState('')

  const iniciarBancoApp = async () => {
    await criarTabelas()
  }

  useEffect(() => {
    iniciarBancoApp()
  }, [])

  const takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true }
    const data = await camera.takePictureAsync(options)

    setCapturedPhoto(data.uri)
    setOpen(true)
    console.log('FOTO TIRADA DA CAMERA:' + data.uri)

    // Chama a função salvar foto no album:
    savePicture(data.uri)
  }

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    const hasPermission = await PermissionsAndroid.check(permission)
    if (hasPermission)
      return true

    const status = await PermissionsAndroid.request(permission)
    return status === 'granted'
  }

  const savePicture = async (data) => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission()))
      return null

    CameraRoll.save(data, 'photo')
    .then(response => {
      pegarLocalFotoTirada(response)
      console.log('SALVO COM SUCESSO: ' + response)
    })
    .catch(error => {
      console.log('ERRO AO SALVAR: ' + error)
    })
  }

  const navigation = useNavigation()
  const openGaleria = () => {
    navigation.navigate('Galeria')
  }

  // Métodos inventados por mim p/ renderiação:

  const tirarFotoEGaleria = () => {
    if (RNCamera.Constants.CameraStatus === 'READY')
      return null 
    return(
      <View style={styles.boxBtnsLinkedToCamera}>
        <TouchableOpacity 
          style={styles.btnTakePic} 
          onPress={ () => takePicture(cameraComp) } >
          <Text style={styles.txtBtnCamera}>
            Tirar foto
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnOpenAlbum}
          onPress={ openGaleria }
        >
          <Text style={styles.txtBtnCamera}>
            Galeria de usuários
          </Text>
        </TouchableOpacity>
      </View>
    ) 
  }

  const mostrarFotoTirada = () => {
    if (capturedPhoto !== null && capturedPhoto !== undefined) {
      return(
        <Modal
          animationType='slide' transparent={false}
          visible={open}>
          <View style={{
            flex:1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin: 20
          }}>
            <TouchableOpacity
              style={{margin: 10}}
              onPress={ () => setOpen(false) }
            >
              <Text style={{fontSize: 24}}>Fechar</Text>
            </TouchableOpacity>
            <Image
              resizeMode="contain"
              style={{width: 350, height: 450, borderRadius: 15}}
              source={{ uri: capturedPhoto }}
            />
          </View>
        </Modal>
      )
    }
  }

  // Métodos p/ salvar usuário e suas infos:

  const pegarLocalFotoTirada = (fileURL) => {
    if (fileURL !== null && fileURL !== undefined)
      setFotoUsuario(fileURL)
  }

  const salvarUsuario = () => {
    const limparInput = () => setNome('')
    if (
      nome !== null && nome !== undefined && nome !== '' &&
      area !== null && area !== undefined && area !== '' &&
      fotoUsuario !== null && fotoUsuario !== undefined 
      && fotoUsuario !== ''
    ) {
      console.log('Usuário que você criou abaixo:')
      console.log({ nome: nome, area: area, foto_perfil: fotoUsuario })
      addUsuario(nome, area, fotoUsuario)
      alert('Usuário cadastrado com sucesso!')
      limparInput()
    }
    else {
      alert('Nome, área ou foto de perfil vazios.')
    }
  }

  return(
    <View style={styles.screen}>
      <StatusBar hidden={ false }/>
      <Text style={styles.title}>Criação de Crachás</Text>
      <RNCamera
        ratio={ '1:1' }
        style={styles.preview}
        type={ RNCamera.Constants.Type.front }
        ref={ rncamera => setCamera(rncamera) }
        autoFocus={ RNCamera.Constants.AutoFocus.on }
        flashMode={ RNCamera.Constants.FlashMode.auto }
        androidCameraPermissionOptions={{
          title: 'Permissao para usar a camera',
          message: 'Nós precisamos usar a sua camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar'
        }}
      />

      { tirarFotoEGaleria() }

      { mostrarFotoTirada() }

      <TextInput 
        value={ nome }
        onChangeText={ (txt) => setNome(txt) }
        style={styles.input}
        placeholder=' Digite seu nome' />

      <Picker
        style={styles.input2}
        selectedValue={ area }
        onValueChange={ (valorItem, index) => setArea(valorItem) }
      >
        <Picker.Item key={1} value='Informática' label='Informática' />
        <Picker.Item key={2} value='Engenharia' label='Engenharia' />
        <Picker.Item key={3} value='Química' label='Química' />
      </Picker>

      <TouchableOpacity
        style={styles.btnSave}
        onPress={ () => salvarUsuario() }
      >
      <Text style={styles.btnTxt}>Salvar Cadastro</Text>
      </TouchableOpacity>
    </View>
  )
}