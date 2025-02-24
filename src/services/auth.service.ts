import { authConfig } from '@/config/auth';
import Cookies from 'js-cookie';

export class AuthService {
  private static readonly TOKEN_KEY = 'auth_token';
  private static readonly API_URL = process.env.NEXT_PUBLIC_API_URL;

  private static isClient(): boolean {
    return typeof window !== 'undefined';
  }

  static getToken(): string | null {
    if (!this.isClient()) return null;
    try {
      return localStorage.getItem(this.TOKEN_KEY);
    } catch {
      return null;
    }
  }

  static setToken(token: string): void {
    if (!this.isClient()) return;
    try {
      localStorage.setItem(this.TOKEN_KEY, token);
    } catch (error) {
      console.error('Error setting token:', error);
    }
  }

  static removeToken(): void {
    if (!this.isClient()) return;
    try {
      localStorage.removeItem(this.TOKEN_KEY);
    } catch (error) {
      console.error('Error removing token:', error);
    }
  }

  static isAuthenticated(): boolean {
    if (!this.isClient()) return false;
    return !!this.getToken();
  }

  static async getUserInfo() {
    if (!this.isClient()) return null;
    const token = this.getToken();
    if (!token) return null;

    try {
      const response = await fetch(`${this.API_URL}/api/v1/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching user info:', error);
      this.logout();
      return null;
    }
  }

  static initiateGoogleLogin(): void {
    if (!this.isClient()) return;
    window.location.href = `${this.API_URL}/api/v1/auth/login/google`;
  }

  static async handleAuthCallback(token: string): Promise<void> {
    this.setToken(token);
    
    // Get return path or default to dashboard
    const returnPath = localStorage.getItem('returnPath') || authConfig.routes.dashboard;
    localStorage.removeItem('returnPath'); // Clean up
    
    window.location.href = returnPath;
  }

  static logout(): void {
    if (!this.isClient()) return;
    this.removeToken();
    window.location.replace('/login');
  }
} 