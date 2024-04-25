import { ImageBackground, StyleSheet, View, Text } from "react-native";
import React from "react";
import { AppButton } from "../../components";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { COLORS } from "../../constants";
import { ROUTES } from "../../navs";

export default function ChooseAuth() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    // <ImageBackground
    //   source={require("../../assets/background.jpg")}
    //   style={styles.wrapper}
    // >
    <View
      style={{
        flex: 1,
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 0.5, justifyContent: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: "700" }}>Pumpy Fix 🦺 </Text>
      </View>
      <View
        style={{
          width: "100%",
          padding: 10,
          alignSelf: "baseline",
          gap: 10,
        }}
      >
        <AppButton
          title="Log In"
          onPress={() => navigation.replace(ROUTES.LOGIN)}
          customStyles={styles.loginButton}
          customTextStyles={{ color: COLORS.darkBlue }}
        />
        <AppButton
          title="Sign Up"
          onPress={() => navigation.replace(ROUTES.SIGNUP)}
        />
      </View>
    </View>

    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.darkBlue,
  },
});
