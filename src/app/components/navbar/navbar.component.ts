import { Component, inject, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { SignupComponent } from '../signup/signup.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule,MatToolbarModule,MatIconModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  router = inject(Router)
  authService = inject(AuthService)
  _dialog = inject(MatDialog)

  isUserLogin:boolean = false
  toggleSideNav:boolean = false
  isMenuVisible:boolean = false

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this._dialog.open(SignupComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true
    });
  }

  ngOnInit(): void {
    this.authService.isLogin.subscribe({
      next: (value) => {
        this.isUserLogin = value
      },error: (err) =>{
        console.log(err);
      }
    })

    this.authService.isMenuVisible.subscribe({
      next: (d) =>{
        this.isMenuVisible =  d
      },
      error: (err) =>{
        console.log(err);
        
      }
    })


  }

  onLogout(){
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }

  toggleMenu(){
    this.toggleSideNav = !this.toggleSideNav
    this.authService.dataObject.next(this.toggleSideNav)
  }

}
