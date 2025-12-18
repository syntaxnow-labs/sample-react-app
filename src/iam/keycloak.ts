import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://auth.syntaxnow.com",
  realm: "syntaxnow",
  clientId: "sample-react-app",
});

export default keycloak;
