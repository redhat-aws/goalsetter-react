// src/keycloak.ts
import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
  "url": 'https://keycloak-goalsetter.apps.ocpai.enterprisewebservice.com/auth/', // Replace with your Keycloak server URL
  "realm": 'gptgoals',
  "clientId": 'gpt-goal-react'
});

export default keycloak;
