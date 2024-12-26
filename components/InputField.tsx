import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'



type Props={};
const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return (
    <View>
      <TextInput {...props} style={styles.inputField} />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    inputField:{
        backgroundColor: Colors.white,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: 350,
        alignSelf: 'center',
        fontSize: 16,
        color: Colors.black,
      },
})