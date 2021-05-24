import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly prefixKey = '@EnglishTrainner:';

  set(key: string, value: any): void {
    localStorage.setItem(
      `${this.prefixKey}${key}`,
      window.btoa(JSON.stringify(value))
    );
  }

  setMulti(...items: Array<{ key: string; value: any }>): void {
    for (const { key, value } of items) {
      localStorage.setItem(
        `${this.prefixKey}${key}`,
        window.btoa(JSON.stringify(value))
      );
    }
  }

  get(key: string): any {
    const data = localStorage.getItem(`${this.prefixKey}${key}`);

    if (data) {
      return JSON.parse(window.atob(data));
    }

    return null;
  }

  remove(key: string): void {
    localStorage.removeItem(`${this.prefixKey}${key}`);
  }

  clear(): void {
    localStorage.clear();
  }

  setSessionItem(key: string, value: any): void {
    sessionStorage.setItem(
      `${this.prefixKey}${key}`,
      window.btoa(JSON.stringify(value))
    );
  }

  getSessionItem(key: string): any {
    const data = sessionStorage.getItem(`${this.prefixKey}${key}`);

    if (data) {
      return JSON.parse(window.atob(data));
    }

    return null;
  }

  removeSessionItem(key: string): any {
    sessionStorage.removeItem(`${this.prefixKey}${key}`);
  }
}
