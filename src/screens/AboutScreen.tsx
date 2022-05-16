import React, { useEffect, useState } from "react";

import { StyleSheet, Text, View,FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCounter } from "../redux/slices/counterSlice";
import { counterList } from "../redux/store";

const UserBlock = ({data}:{data:number},...props:any):React.ReactElement => {
    return(
        <View style={styles.list} key={"user-list-"}>
          <Text>{data}</Text>
        </View>
    );
}

const AboutScreen = ({ navigation }:{navigation:any}):React.ReactElement => {

  const dispatch = useDispatch();
  const {counter,isLoading,hasError} = useSelector(counterList);

  useEffect(() => {
    dispatch(fetchCounter(counter.page));
  }, [dispatch])

  const getUserList = () =>{
      console.log(counter.page)
      dispatch(fetchCounter(counter.page+1));
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
    }else if(counter){
      if(counter.data.length <= 0){
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
            style={styles.flatList}
            key={"list-User"}
            data={counter.data}
            onEndReached={getUserList}
            renderItem={({item,index}:{item:number,index:number})=>(
              <>
                <TouchableOpacity key={"touch"+index}>
                  <UserBlock key={"users-"+index} data={item}/>
                </TouchableOpacity>
              </>
            )}
          />
        )
      }
    }else if(isLoading && counter.page === 1){
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
    flatList:{
        maxHeight: '95%'
    }
})

export default AboutScreen;