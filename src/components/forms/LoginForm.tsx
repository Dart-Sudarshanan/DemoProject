import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { reduxForm, Field } from "redux-form";
import { onLogin } from "../../redux/slices/authSlice";
import { authUser } from "../../redux/store";
import { ButtonComponent } from "../input_component/ButtonComponent";
import TextInputField from "../input_component/TextInputField";

function LoginForm(props: any) {
  const [errMsg, setErrMsg] = useState("");

  const dispatch = useDispatch();

  const { user, error } = useSelector(authUser);

  const { token } = user;

  useEffect(() => {
    if (token) {
      setErrMsg("");
      props.navigation.navigate("Home");
    } else if (error) {
      setErrMsg(error);
    }
  }, [token, error]);

  const onSubmit = (value: { email: string; password: string }) => {
    dispatch(onLogin(value));
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginHeading}>Login</Text>
      <View style={styles.inputWrapper}>
        <Field label='Username' name='email' component={TextInputField} />
        <Field label='Password' name='password' secureTextEntry={true} component={TextInputField} />
      </View>
      <ButtonComponent title='Log in' onPress={props.handleSubmit(onSubmit)} />
      {errMsg ? (
        <View>
          <Text>{errMsg}</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

export default reduxForm({ form: "signIn" })(LoginForm);

const styles = StyleSheet.create({
  loginContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  loginHeading: {
    fontSize: 24,
    fontWeight: "700",
  },
  inputWrapper: {
    marginTop: 20,
  },
});
