import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="pl-[35rem] ">please login</div>;

  return <div className="pl-[35rem] ">Welcome {user.username}</div>;
}

export default Profile;
