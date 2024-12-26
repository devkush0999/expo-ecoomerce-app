import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import InputField from '@/components/InputField'

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn Screen</Text>
      {/* <Link href={"/(tabs)"} asChild> */}
        <TouchableOpacity onPress={() => {
          router.dismissAll();
          router.push('/(tabs)');
        }}>
          <InputField placeholder='Email' autoCapitalize='none'/>
          <InputField placeholder='password' />
           </TouchableOpacity>
      {/* </Link> */}
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title : {
    marginBottom: 20 ,
    fontSize: 24,
    fontWeight: '600'
  }
})