import { KeycloakService, KeycloakConfig } from 'keycloak-angular';
//import {kcConfig} from './kc';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
    config: {
      "realm":"hasura",
      "url":"https://keycloak.drtest0713.reisys.io/auth/",
      "clientId":"test-app"
    },

    initOptions: {
    },
  });
}
