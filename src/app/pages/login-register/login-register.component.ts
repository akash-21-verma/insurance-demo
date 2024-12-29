import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [RecipeCardComponent],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})
export class LoginRegisterComponent implements OnInit {
  router = inject(Router) 
  isLoginForm:boolean = true
  authService = inject(AuthService)

  ngOnInit(): void {
    this.authService.MenuObject$.next(false)
  }

  changeForm(){
    this.isLoginForm = !(this.isLoginForm)
  }

  onLogin(){
    this.router.navigateByUrl('/home')
  }

}
