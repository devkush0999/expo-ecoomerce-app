import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons"; 
import Google from '@/assets/images/google-logo.svg'
import { Image } from "react-native-svg";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (<>
    <Stack.Screen options={{ headerShown: false }} />
    <ImageBackground source={require("../assets/images/ecommerce-splash.jpg")} style={{ flex: 1 }} resizeMode="cover" >
      <View style={styles.container}>
        <LinearGradient colors={["transparent", "rgba(255, 255,255,0.4)", "rgba(255, 255,255, 0.9)"]} style={styles.background}>
          <View style={styles.wrapper}>
            <Text style={styles.titleLogo}>DeveX</Text>
            <Text style={styles.description}>one shop one solotion</Text>
            <View style={styles.socialLoginWrapper}>
                <Link href={"/signin"} asChild>
              <TouchableOpacity style={styles.socialLoginButton}>
                <Ionicons name="mail-outline" size={20} color={Colors.black} />
                <Text style={styles.title}>Continue with Email</Text>
              </TouchableOpacity>
            </Link>
            </View>
            <View style={styles.socialLoginWrapper}>
                <Link href={"/signin"} asChild>
              <TouchableOpacity style={styles.socialLoginButton}>
                {/* <Ionicons name="logo-google" size={20} color={Colors.black} /> */}
                <Google width={20} height={20} />
                <Text style={styles.title}>Continue with Google</Text>
              </TouchableOpacity>
            </Link>
            </View>
            <View style={styles.socialLoginWrapper}>
                <Link href={"/signin"} asChild>
              <TouchableOpacity style={styles.socialLoginButton}>
                <Ionicons name="logo-apple" size={20} color={Colors.black} />
                <Text style={styles.title}>Continue with Apple</Text>
              </TouchableOpacity>
            </Link>
            </View>


            <Link href={"/signup"} asChild>
              <TouchableOpacity>
                <Text>Go to SignUp Screen</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    fontWeight: '700',
    letterSpacing: 2.4,
    marginBottom: 5,

  },
  titleLogo: {
    fontSize: 30,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 12,
    color: Colors.primary,
  },
  description: {
    fontSize: 16,
    color: Colors.gray,
    letterSpacing: 1.5,
    lineHeight: 30,
    marginBottom: 20,

  },
  socialLoginWrapper:{
    // flexDirection: 'row',
    alignSelf:'stretch',
  },
  button:{
    width: 150,
  },
  socialLoginButton: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    width: '48%',
    borderRadius: 20,
    backgroundColor: '#fff',
    // borderColor: '#ddd',
    justifyContent: 'space-between',
    alignSelf:'center',
    marginBottom: 10,
    },

});
