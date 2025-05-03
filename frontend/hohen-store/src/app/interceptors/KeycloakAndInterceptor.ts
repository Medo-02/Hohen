import { AutoRefreshTokenService, createInterceptorCondition, INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG, IncludeBearerTokenCondition, provideKeycloak, UserActivityService, withAutoRefreshToken } from "keycloak-angular";
import { environment } from "../environments/enviornment";

export const provideKeycloakAndInterceptor = () => {
  const urlConditions = [
    createInterceptorCondition<IncludeBearerTokenCondition>({
        // eslint-disable-next-line no-useless-escape
        urlPattern: new RegExp(`^${environment.BASE_URL}(\/.*)?$`, 'i'),
        bearerPrefix: 'Bearer',
      },
    ),

  ];


  const { url, clientId, realm } = environment.keycloak;

  return [
    provideKeycloak({
      config: {
        url: url,
        clientId: clientId,
        realm: realm,
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: true,
        redirectUri: window.location.origin + '/dashboard'
      },
      features: [
        withAutoRefreshToken({
          sessionTimeout: 300000,
          onInactivityTimeout: 'logout',
        }),
      ],
      providers: [
        AutoRefreshTokenService,
        UserActivityService,
      ],
    }),
    { provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG, useValue: urlConditions },
  ];
};