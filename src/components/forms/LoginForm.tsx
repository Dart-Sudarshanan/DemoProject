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
    if (!value.email && !value.password) {
      setErrMsg("Both fields are required");
    } else if (!value.email) {
      setErrMsg("Username is required");
    } else if (!value.password) {
      setErrMsg("Password is required");
    } else {
      dispatch(onLogin(value));
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginHeading}>Login</Text>
      <View testID='form-wrapper' style={styles.inputWrapper}>
        <Field testID='login-input' label='Username' name='email' component={TextInputField} />
        <Field
          testID='login-input'
          label='Password'
          name='password'
          secureTextEntry={true}
          component={TextInputField}
        />
      </View>
      <ButtonComponent testID='button' title='Log in' onPress={props.handleSubmit(onSubmit)} />
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
    color: "#4d4949",
  },
  inputWrapper: {
    marginTop: 20,
  },
});
