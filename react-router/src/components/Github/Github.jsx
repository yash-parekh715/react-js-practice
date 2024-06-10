import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/yash-parekh715")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <p className="mb-4">Github Followers: {data.followers}</p>
        <div className="flex align-center justify-center ">
          <img src={data.avatar_url} alt="github profile picture" />
        </div>
      </div>
    </>
  );
}

export default Github;
export const GithubInfoData = async () => {
  const response = await fetch("https://api.github.com/users/yash-parekh715");
  return response.json();
};
