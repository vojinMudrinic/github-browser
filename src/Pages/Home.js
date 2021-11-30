import React, { useState, useEffect } from "react";

function Home() {
  const [user, setUser] = useState({});
  const [repos, setRepo] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const url = "https://api.github.com/users/vojinMudrinic";
      const userProfile = await fetch(url);
      const userJson = await userProfile.json();
      const repositories = await fetch(userJson.repos_url);
      const repoJson = await repositories.json();
      setUser(userJson);
      setRepo(repoJson);
      return url;
    }
    loadUser();
  }, ["https://api.github.com/users/vojinMudrinic"]);

  return (
    <div className="container">
      <h1>My profile information:</h1>
      <h5>Full name: {user.name}</h5>
      <hr />
      <h5>Profile image:</h5>
      <img src={user.avatar_url} width={50} />
      <hr />
      <h5>Bio:</h5>
      {user.bio}
      <hr />
      <h5>Social status</h5>
      <span>
        Following: {user.following} Followers: {user.followers} Gists:{" "}
        {user.public_gists}
      </span>
      <hr />
      <h3>List of my repositories:</h3>
      {repos.map((rep) => (
        <div className="repos">
          <a href={rep.html_url}>{rep.name}</a>
        </div>
      ))}
    </div>
  );
}

export default Home;
