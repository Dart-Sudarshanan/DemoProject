import React from "react";
import { View } from "react-native";
import UserForm from "../components/forms/UserForm";

function LoginScreen({ navigation }:{navigation:any}):React.ReactElement {

  return(
    <View>
      <UserForm navigation={navigation}/>
    </View>
  );
}

export default LoginScreen;