import React, { useEffect, useState } from "react";

import { Pressable, ScrollView, StyleSheet, Text, View,FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/slices/userSlice";
import { userList } from "../redux/store";

const UserBlock = ({data}:{data:any},...props:any):React.ReactElement => {
    return(
        <View style={styles.list} key={"user-list-"+data.id}>
          <View style={styles.listRow} key={"row_1_"+data.id}>
            <View style={styles.column}><Text style={styles.listHeading}>First Name:</Text><Text style={styles.listText}>{data.first_name}</Text></View>
            <View style={styles.column}><Text style={styles.listHeading}>Last name:</Text><Text style={styles.listText} ellipsizeMode={'tail'}>{data.last_name}</Text></View>
          </View>
          <View style={styles.listRow} key={"row_2_"+data.id}>
            <View style={styles.column}><Text style={styles.listHeading}>Email:</Text><Text style={styles.listText}>{data.email}</Text></View>
          </View>
        </View>
    );
}

const HomeScreen = ({ navigation }:{navigation:any}):React.ReactElement => {

  // const [_usersList,setUsersList] = useState([]);

  const dispatch = useDispatch();
  const {users,isLoading,hasError} = useSelector(userList);

  useEffect(() => {
    dispatch(fetchUser(users.page));
  }, [dispatch])

  const getUserList = () =>{
    // console.log("shgdajsdhsadh",users.data);
    if(users.page !== users.total_pages)
      dispatch(fetchUser(users.page+1));
  }

  const renderUsers = () =>{
    if(hasError){
      return(
        <View>
          <Text>
            Some error has occured
          </Text>
        </View>
      )
    }else if(users){
      if(users.data.length <= 0){
        return(
          <View>
            <Text>
              No data found.
            </Text>
          </View>
        )
      }else{
        return(
          <FlatList 
            key={"list-User"}
            data={users.data}
            onEndReached={getUserList}
            renderItem={({item,index}:{item:{},index:number})=>(
              <>
                <TouchableOpacity key={item.id}>
                  <UserBlock key={"users-"+index} data={item}/>
                </TouchableOpacity>
              </>
            )}
          />
        )
      }
    }else if(isLoading && users.page === 1){
      return(
        <View>
          <Text>Getting User list ...</Text>
        </View>
      )
    }
  }   

  return (
    <View style={styles.sectionContainer}>
        <View style={styles.contentWrapper}>
            <Text style={styles.text}>Users</Text>
            {renderUsers()}
            {users.page === users.total_pages ? <Text>No more data</Text> : <></>}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 10,
        paddingHorizontal: 15,
    },
    contentWrapper: {
        // alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '400'
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 4,
        backgroundColor: '#4c51e6',
    },
    buttonTxt: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff'
    },
    list:{
      backgroundColor: "#fff",
      marginVertical: 10,
      padding:10,
    },
    listRow:{
      // justifyContent:'space-between',
      flexDirection:'row',
    },
    column:{
      flexDirection:'column',
      padding: 10,
      width: '50%'
    },
    listHeading:{
      fontWeight: '700'
    },
})

export default HomeScreen;