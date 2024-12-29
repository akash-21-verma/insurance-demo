import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dataObject = new BehaviorSubject<boolean>(false)
  isLogin = this.dataObject.asObservable()
  
  MenuObject$ = new BehaviorSubject<boolean>(false)
  isMenuVisible = this.MenuObject$.asObservable()

  constructor() { }
}
