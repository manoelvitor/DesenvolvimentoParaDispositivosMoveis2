import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Image, FlatList, 
  ActivityIndicator } from 'react-native'
import styles from '../../style'
import { getUsuarios } from '../../Database'
import Usuario from '../Usuario'

export default Galeria = () => {
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)

  const buscarUsuarios = async () => {
    await getUsuarios(setUsuarios)
    setLoading(false)
  }

  useEffect(() => {
    buscarUsuarios()
  }, [])

  if (loading) {
    return(
      <View 
        style={{
          alignItems: 'center', 
          justifyContent: 'center',
          flex:1
        }} >
        <ActivityIndicator color="#cecece" size={50} />
      </View>
    )
  }
  else {
    return(
      <View style={styles.screen}>
        <FlatList 
          scrollEnabled
          data={ usuarios }
          keyExtractor={ user => user.id.toString() }
          renderItem={ ({ item }) => <Usuario data={ item }/> }
        />
      </View>
    )
  }
}