import React, { useState } from "react";
import GitAcount from "./components/GitAcount"
import GitRepo from "./components/GitRepo";
import "./App.css"
function App() {
  const [username, setUsername] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleClientIdChange = (e) => {
    setClientId(e.target.value);
  };

  const handleClientSecretChange = (e) => {
    setClientSecret(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>Github User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter GitHub Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          Enter Your Client ID:
          <input
            type="text"
            value={clientId}
            onChange={handleClientIdChange}
          />
        </label>
        <label>
          Enter Your Client Secret:
          <input
            type="text"
            value={clientSecret}
            onChange={handleClientSecretChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
      <GitAcount username={username} clientId={clientId} clientSecret={clientSecret} />
      {username && <GitRepo username={username} clientId={clientId} clientSecret={clientSecret} />}
    </div>
  );
}

export default App;