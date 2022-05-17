import React from "react";
import { useSelector } from "react-redux";
import { authUser } from "../../redux/store";
import PrivateScreen from "./PrivateScreens";
import PublicScreen from "./PublicScreen";

export default function Navigations() {
  const { user } = useSelector(authUser);
  const { token } = user;
  return token ? <PrivateScreen /> : <PublicScreen />;
}
