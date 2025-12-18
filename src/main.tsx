import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import keycloak from "./iam/keycloak";

keycloak
  .init({
    onLoad: "login-required",
    checkLoginIframe: false,
    pkceMethod: "S256",
  })
  .then(() => {
    renderApp();
  })
  .catch((error) => {
    console.error("Keycloak init failed", error);
  });

function renderApp() {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
