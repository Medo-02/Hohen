import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { createAuthGuard, AuthGuardData } from 'keycloak-angular';
import Keycloak from 'keycloak-js';
import { of } from 'rxjs';

export const isAccessAllowed = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  const keycloak = inject(Keycloak);
  const router = inject(Router);

  // If not authenticated, trigger login and store the original URL
  if (!authData.authenticated) {
    console.log('User not authenticated, redirecting to login');
    sessionStorage.setItem('redirectUrl', state.url);  // Store the original requested URL
    await keycloak.login({
      redirectUri: window.location.origin + state.url,  // Redirect back to the original URL after login
      prompt: 'login'
    });
    return false;
  }

  console.log('User is authenticated');

  // Check for required role
  const requiredRole = route.data['role'];

  if (!requiredRole || typeof requiredRole !== 'string') {
    return true; // No role required
  }

  const userRoles = authData.grantedRoles.realmRoles || [];
  if (userRoles.includes(requiredRole)) {
    return true;
  }

  return router.parseUrl('/'); 
};

export const canActivateGuard = createAuthGuard<CanActivateFn>(isAccessAllowed);
