import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule,MatSidenavModule,CommonModule,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
authService = inject(AuthService)
  toggleNav:boolean = false

  ngOnInit(): void {
    this.authService.isLogin.subscribe({
      next: (d) =>{
        this.toggleNav = d
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
}
