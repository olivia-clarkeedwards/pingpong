'use strict'
import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import * as Font from 'expo-font'

const { width } = Dimensions.get('window')

// colours:
// dark grey = #2F2F23
// blue = #0E65A3
// dark orange = #E05A00
// light orange = #F79500
// white-ish = #FDF7ED

export default StyleSheet.create({
  // global

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#E05A00',
    width: width,
  },
  navContainer: {
    backgroundColor: '#E05A00',
    padding: 20,
    width: '100%',
    alignContent: 'center',
  },
  smallContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E05A00',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FDF7ED',
    width: 350,
    alignSelf: 'center',
    height: 50,
    marginBottom: 10,
    //border
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0E65A3',
    //text
    fontSize: 20,
    textAlign: 'center',
    color: '#2F2F23',
    letterSpacing: 2,
    fontWeight: 'normal',
    fontFamily: 'reg-font',
  },

  // landing specific

  landingTitle: {
    color: '#FDF7ED',
    fontSize: 75,
    textAlign: 'center',
    width: '100%',
    fontFamily: 'italic-text',
    paddingBottom: 20,
  },
  tagline: {
    color: '#FDF7ED',
    fontSize: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  logInButtonText: { color: '#FDF7ED', fontSize: 30 },
  logInButton: {
    backgroundColor: '#0E65A3',
    padding: 10,
    borderRadius: 50,
    paddingHorizontal: 50,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#033B55',
    width: '50%',
  },
  ballImg: { width: 180, height: 180, marginTop: 50 },

  // ping specific

  headingContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  introText: {
    color: '#FDF7ED',
    marginTop: 30,
    fontSize: 40,
    textAlign: 'center',
  },
  headerText: {
    color: '#FDF7ED',
    fontSize: 70,
    textAlign: 'center',
  },
  blueText: {
    color: '#0E65A3',
    fontSize: 70,
    textAlign: 'center',
  },
  containerContents: {
    flex: 1,
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#E05A00',
  },
  swipeContainer: {
    flex: 1,
    width: width,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '70%',
    height: '70%',
    borderRadius: 200,
    shadowColor: 'rgba(255, 157, 92, .5)',
    shadowRadius: 50,
    marginBottom: 60,
  },
  slideText: {
    color: '#FDF7ED',
    fontSize: 40,
    alignSelf: 'center',
    paddingBottom: 20,
  },
  slideImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  submitButton: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  // friends specific

  listContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  sectionHeader: {
    fontSize: 30,
    backgroundColor: '#E05A00',
    textAlign: 'center',
    width: '100%',
    color: '#FDF7ED',
    borderTopWidth: 2,
    borderColor: '#FDF7ED',
  },
  beerImage: { width: 200, height: 200, opacity: 0.6, marginBottom: 20 },
  mainText: {
    backgroundColor: '#E05A00',
    color: '#FDF7ED',
    fontSize: 30,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  topBar: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#E05A00',
  },
  addFriend: {
    width: 40,
    height: 40,
    position: 'relative',
    left: 10,
  },
  user: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#0E65A3',
    backgroundColor: '#FDF7ED',
    paddingBottom: 5,
  },
  userName: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#FDF7ED',
    paddingVertical: 5,
    marginVertical: 1,
  },
  name: {
    textAlign: 'center',
    fontSize: 30,
    color: '#0E65A3',
    letterSpacing: 2,
  },
  image: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },

  // nav specific

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FDF7ED',
    borderRadius: 50,
    height: 60,
    width: 350,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#0E65A3',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  icon: { width: 35, height: 35 },
  lineText: {
    color: '#2F2F23',
    fontSize: 30,
    alignSelf: 'center',
  },

  // add friend specific

  buttonAdd: {
    backgroundColor: '#0E65A3',
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 50,
  },
  buttonAddText: {
    color: '#FDF7ED',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'reg-font',
  },

  // pending friend specific

  pendingIcons: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginHorizontal: 6,
  },
  pendingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
})

// fonts

export const CondensedText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'condensed-font': require('../assets/fonts/condensed.otf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'condensed-font' }}>
      {props.children}
    </Text>
  )
}

export const ItalicText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'italic-font': require('../assets/fonts/italic.otf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'italic-font' }}>
      {props.children}
    </Text>
  )
}

export const RegText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'reg-font': require('../assets/fonts/reg.otf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'reg-font' }}>
      {props.children}
    </Text>
  )
}
