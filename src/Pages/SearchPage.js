import React, { useState } from "react";

function SearchPage() {
  //Variables******
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [repos, setRepo] = useState([]);
  //*************
  //Functions******

  function changeHandler(e) {
    setUsername(e.target.value);
  }
  async function submitHandler(e) {
    e.preventDefault();
    const userProfile = await fetch(`https://api.github.com/users/${username}`);
    const userJson = await userProfile.json();
    const repositories = await fetch(userJson.repos_url);
    const repoJson = await repositories.json();

    if (userJson) {
      setUser(userJson);
      setRepo(repoJson);
    }
  }
  //*************

  return (
    <div className="container">
      <div className="title">
        <h1>Search for users:</h1>
      </div>
      <div className="search">
        <input
          type="text"
          value={username}
          onChange={changeHandler}
          placeholder="username"
        />
        <button type="submit" onClick={submitHandler} className="btn">
          Search
        </button>
      </div>
      <div className="profile">
        <h4>{user.login}</h4>
        <img
          src={
            user.avatar_url
              ? user.avatar_url
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
          }
          wrapped
          ui={false}
          width={200}
        />
        <h5>Full name: {user.name}</h5>
        <h5>Bio: {user.bio}</h5>
        <h5>From: {user.location}</h5>
        <h5> Following ({user.following})</h5>
        <h5> Followers ({user.followers})</h5>
        <h5>Repositories ({user.public_repos}):</h5>
        {repos.map((rep) => (
          <div className="repos">
            <a href={rep.html_url}>{rep.name}</a>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
}

export default SearchPage;
