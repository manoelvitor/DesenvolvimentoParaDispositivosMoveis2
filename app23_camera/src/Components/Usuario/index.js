import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../style'

const Usuario = ({ data }) => {
  return(
    <View style={styles.usuario}>
      <View style={styles.boxImg}>
        <Image style={styles.imgUser} 
          source={{ uri: data?.urlFoto }}
        />
      </View>
      <View style={styles.boxInfoUser}>
        <Text style={styles.txtNm}>{ data?.nome }</Text>
        <Text style={styles.txtArea}>{ data?.area }</Text>
      </View>
    </View>
  )
}

export default Usuario