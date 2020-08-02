import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() getLoggedIn: EventEmitter<any> = new EventEmitter();
  redirectUrl: string;

  constructor() { }

  isLoggedIn() {
    
    if (localStorage.getItem('LoginCredintials')) {
      return true;
    }
    return false;
  }
}
