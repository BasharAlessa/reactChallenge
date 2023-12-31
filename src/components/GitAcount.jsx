import React, { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = ({ username, clientId, clientSecret }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username, clientId, clientSecret]);

  if (!userData) {
    return <div>We are waiting for your search</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <img src={userData.avatar_url} alt={`${username}'s avatar`} />
      <p>Username: {userData.login}</p>
      <p>Name: {userData.name}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Repositories: {userData.public_repos}</p>
    </div>
  );
};

export default UserInfo;
