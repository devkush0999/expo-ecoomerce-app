import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import InputField from '@/components/InputField'
// import { TextInput } from 'react-native-gesture-handler'

type Props = {
  email: String,
}

const SignUpScreen = (props: Props) => {

  const [valuei, setValue] = useState(
"    email"
  )
  return (<>
    <Stack.Screen options={{
      headerTitle: 'Sign up', headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color={Colors.black} />
        </TouchableOpacity>
      ),
    }} />

<ImageBackground source={require("../assets/images/sign.jpeg")} style={{ flex: 1 }} resizeMode="cover" >
    <View style={styles.container}>
      <Text style={styles.title}>SignUp Screen</Text>
      <InputField placeholder="Email"   autoCapitalize='none'/>
      <InputField placeholder="Password"  secureTextEntry={true}  />
      <InputField placeholder="Confirm Password"  secureTextEntry={true}  />
      <TouchableOpacity style={styles.button}><Text>submit</Text></TouchableOpacity>
    </View>
    </ImageBackground>
  </>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    letterSpacing: 1.2,
    marginBottom: 50
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 350,
    alignSelf: 'center',
    fontSize: 16,
    color: Colors.white,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
    },
    divider: {
      borderTopColor : Colors.white,
      borderTopWidth : StyleSheet.hairlineWidth,
      width: '30%',
      marginBottom: 30,
    }
})