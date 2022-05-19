import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { DrawerStackParams } from "../components/navigation_component/PrivateScreens";
import { fetchUser } from "../redux/slices/userSlice";
import { userList } from "../redux/store";

interface SingleUser {
  id: number;
  name: string;
  gender: string;
  email: string;
  status: string;
}

const UserBlock = ({ data }: { data: SingleUser }) => {
  return (
    <View style={styles.list} key={"user-list-" + data.id}>
      <View style={styles.listRow} key={"row_1_" + data.id}>
        <View style={styles.column}>
          <Text style={styles.listHeading}>Name:</Text>
          <Text>{data.name}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.listHeading}>Gender:</Text>
          <Text ellipsizeMode={"tail"}>{data.gender}</Text>
        </View>
      </View>
      <View style={styles.listRow} key={"row_2_" + data.id}>
        <View style={{ padding: 10 }}>
          <Text style={styles.listHeading}>Email:</Text>
          <Text>{data.email}</Text>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { users, isLoading, hasError } = useSelector(userList);

  useEffect(() => {
    dispatch(fetchUser(users.page));
  }, [dispatch]);

  const getUserList = () => {
    dispatch(fetchUser(users.page + 1));
  };

  const renderUsers = () => {
    if (hasError) {
      return (
        <View testID='error-block'>
          <Text>Some error has occured</Text>
        </View>
      );
    } else if (users) {
      if (users.data.length <= 0 && !isLoading) {
        return (
          <View testID='no-data'>
            <Text>No data found.</Text>
          </View>
        );
      } else if (users.data.length > 0) {
        return (
          <FlatList
            testID='user-list'
            key={"list-User"}
            data={users.data}
            onEndReached={getUserList}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <>
                <TouchableOpacity key={item.id}>
                  <UserBlock key={"users-" + index} data={item} />
                </TouchableOpacity>
              </>
            )}
          />
        );
      }

      if (isLoading && users.page === 1) {
        return (
          <View testID='loading'>
            <Text>Getting User list ...</Text>
          </View>
        );
      }
    }
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>Users</Text>
        {renderUsers()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  contentWrapper: {
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "400",
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#4c51e6",
  },
  buttonTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },
  list: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  listRow: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    padding: 10,
    width: "50%",
  },
  listHeading: {
    fontWeight: "700",
  },
});

export default HomeScreen;
