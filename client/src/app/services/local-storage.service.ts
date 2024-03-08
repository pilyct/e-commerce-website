import { Injectable } from '@angular/core';
import DOMPurify from 'dompurify';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  constructor() {
    
  }

  // Checks if localStorage is accessible in the current environment.
  isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  // Stores a key-value pair in localStorage.
  setItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable()) {
      // const sanitizedValue = this.dompurify.sanitize(value);
      const sanitizedValue = DOMPurify.sanitize(value);
      window.localStorage.setItem(key, sanitizedValue);
    }
  }

  // Retrieves a value from localStorage for a given key.
  getItem(key: string): string | null {
    if (this.isLocalStorageAvailable()) {
      return window.localStorage.getItem(key);
    }
    return null;
  }

  // Removes a specific key-value pair from localStorage.
  removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.removeItem(key);
    }
  }

  // Clears all data from localStorage.
  clear(): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.clear();
    }
  }
}