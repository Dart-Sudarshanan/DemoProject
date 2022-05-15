import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ButtonComponent } from "../components/input_component/ButtonComponent";
import { TextInputField } from "../components/input_component/TextInputField";
import { onLogin } from "../redux/slices/authSlice";
import { ApplicationState, store } from "../redux/store";

export default function LoginScreen({ navigation }:{navigation:any}):React.ReactElement {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[errMsg, setErrMsg] = useState('');

    const dispatch = useDispatch();

    const {user,error} = useSelector((state: ApplicationState) => state.userAuth);

    useEffect(() => {
        if(user.token){
            setErrMsg('');
            navigation.navigate('Home');
        }else if(error){
            setErrMsg(error);
        }
    }, [user.token,error])
    
    const onSubmit = () =>{
       dispatch(onLogin({email,password}));
    }

    return (
        <ScrollView>
            <View style={styles.loginContainer}>
                <Text style={styles.loginHeading}>Login</Text>
                <View style={styles.inputWrapper}>
                    <TextInputField onTextChange={setEmail} label={"Username"} placeholder={"Email Id"} isSecure={false}/>
                    <TextInputField onTextChange={setPassword} label={"Password"} placeholder={"Password"} isSecure={true}/>
                </View>
                <ButtonComponent title="Log in" onPress={onSubmit} />
                {errMsg ? <View>
                    <Text>{errMsg}</Text>
                </View>:<></>}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    loginHeading: {
        fontSize: 24,
        fontWeight: '700'
    },
    inputWrapper: {
        marginTop: 20,
    },
})