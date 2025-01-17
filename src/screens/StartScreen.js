import React from 'react'
import { Image, StyleSheet,KeyboardAvoidingView, View, ImageBackground } from 'react-native'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <View style={styles.bgd}>
    <ImageBackground
      source={require('../assets/background_dot2x.png')}
      resizeMode={'repeat'}
      style={styles.background}/>  
    </View>

    <View style={styles.dados}>
      
    <Image source={require('../assets/UniPoint-unscreen.gif')} style={styles.image} />
    <Paragraph>
      A maneira mais fácil de marcar presença.
      Entrar como:
    </Paragraph>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('LoginScreen')}
    >
      Aluno
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Professor
    </Button>
  
  </View>
  </View>
  )
}

const styles = StyleSheet.create({
  bgd: {
    flex: 0,
    width: '100%',
    maxWidth: 340,
    backgroundColor:'#000000',
    opacity:1,
  },
  image: {
    width: 350,
    height: 110,
    marginBottom: 8,
  },
  dados: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:80,
    padding: 10,
    maxWidth: 340,
    backgroundColor:'transparent',
  },
  background: {
    flex: 1,
    maxWidth: 340,
    width: 600,
    height: 1024,
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'transparent',
    
  },
})