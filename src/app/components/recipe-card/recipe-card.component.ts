import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatIconModule,CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  router = inject(Router)
  
  @Input() icClickable:boolean = false
  @Input() title:string = ''
  @Input() iconName:string = ''
  @Input() isSubtitleVisible:boolean = false
  @Input() subtitleValue:string = ''
  @Input() pathValue:string = ''

  NavToDashBoard(){
    this.router.navigateByUrl(`${this.pathValue}`)
  }

}
