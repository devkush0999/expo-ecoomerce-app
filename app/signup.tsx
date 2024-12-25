import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

type Props = {}

const SignUpScreen = (props: Props) => {
  return (<>
    <Stack.Screen options={{
      headerTitle: 'Sign up', headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color={Colors.black} />
        </TouchableOpacity>
      ),
    }} />
    <View style={styles.container}>
      <Text>SignUp Screen</Text>
    </View>
  </>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})