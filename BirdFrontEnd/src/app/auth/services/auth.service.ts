import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { BaseHttpService } from '../../Services/base-http.service';
import {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  AuthResponse,
  UserInfo,
  AuthState,
} from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_info';
  private readonly EXPIRES_AT_KEY = 'token_expires_at';

  private authStateSubject = new BehaviorSubject<AuthState>(
    this.getInitialAuthState()
  );
  public authState$ = this.authStateSubject.asObservable();

  constructor(private baseHttp: BaseHttpService) {
    this.checkTokenExpiration();
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.baseHttp.post<AuthResponse>('/auth/login', request).pipe(
      tap((response) => this.handleAuthResponse(response))
    );
  }

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.baseHttp
      .post<AuthResponse>('/auth/register', request)
      .pipe(tap((response) => this.handleAuthResponse(response)));
  }

  forgotPassword(request: ForgotPasswordRequest): Observable<any> {
    return this.baseHttp.post('/auth/forgot-password', request);
  }

  resetPassword(request: ResetPasswordRequest): Observable<any> {
    return this.baseHttp.post('/auth/reset-password', request);
  }

  logout(): void {
    this.clearAuthData();
    this.authStateSubject.next({
      isAuthenticated: false,
      user: null,
      token: null,
      expiresAt: null,
    });
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const expiresAt = this.getTokenExpiration();

    if (!token || !expiresAt) {
      return false;
    }

    // Check if token is expired
    if (new Date() >= expiresAt) {
      this.logout();
      return false;
    }

    return true;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser(): UserInfo | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (!userJson) {
      return null;
    }
    try {
      return JSON.parse(userJson);
    } catch {
      return null;
    }
  }

  validateToken(): Observable<boolean> {
    return this.baseHttp.get<any>('/auth/validate').pipe(
      map(() => true),
      tap(
        () => {},
        () => this.logout()
      )
    );
  }

  private handleAuthResponse(response: AuthResponse): void {
    const expiresAt = new Date(response.expiration);

    localStorage.setItem(this.TOKEN_KEY, response.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(response.user));
    localStorage.setItem(this.EXPIRES_AT_KEY, expiresAt.toISOString());

    this.authStateSubject.next({
      isAuthenticated: true,
      user: response.user,
      token: response.token,
      expiresAt,
    });
  }

  private clearAuthData(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.EXPIRES_AT_KEY);
  }

  private getTokenExpiration(): Date | null {
    const expiresAtStr = localStorage.getItem(this.EXPIRES_AT_KEY);
    if (!expiresAtStr) {
      return null;
    }
    try {
      return new Date(expiresAtStr);
    } catch {
      return null;
    }
  }

  private getInitialAuthState(): AuthState {
    const token = this.getToken();
    const user = this.getCurrentUser();
    const expiresAt = this.getTokenExpiration();

    const isAuthenticated =
      !!token && !!expiresAt && new Date() < expiresAt;

    if (!isAuthenticated && (token || user)) {
      this.clearAuthData();
    }

    return {
      isAuthenticated,
      user: isAuthenticated ? user : null,
      token: isAuthenticated ? token : null,
      expiresAt: isAuthenticated ? expiresAt : null,
    };
  }

  private checkTokenExpiration(): void {
    // Check token expiration every minute
    setInterval(() => {
      if (!this.isAuthenticated()) {
        const currentState = this.authStateSubject.value;
        if (currentState.isAuthenticated) {
          this.logout();
        }
      }
    }, 60000); // 60 seconds
  }
}
