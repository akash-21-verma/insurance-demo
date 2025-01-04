import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moterinsurance',
  standalone: true,
  imports: [MatButtonModule,MatInputModule,CommonModule,MatIconModule],
  templateUrl: './moterinsurance.component.html',
  styleUrl: './moterinsurance.component.scss'
})
export class MoterinsuranceComponent {
  router = inject(Router)
  firstStep:boolean = true
  secondStep:boolean = false


  movetoFirst(){
    this.secondStep = false
    this.firstStep = true
  }

  moveToSecond(){
    this.firstStep = false
    this.secondStep = true
  }

  movetoNext(){
    this.router.navigateByUrl("/moter-list")
  }


}
