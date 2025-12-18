import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import keycloak from "./iam/keycloak";

function App() {
  const [count, setCount] = useState(0);

  const username =
    keycloak.tokenParsed?.preferred_username ||
    keycloak.tokenParsed?.email ||
    "unknown";

  return (
    <>
      {/* Auth test banner */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          borderBottom: "1px solid #eee",
          marginBottom: "20px",
        }}
      >
        <span>
          Logged in as: <strong>{username}</strong>
        </span>

        <button
          onClick={() =>
            keycloak.logout({
              redirectUri: window.location.origin,
            })
          }
        >
          Logout
        </button>
      </div>

      {/* Existing Vite demo UI */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
