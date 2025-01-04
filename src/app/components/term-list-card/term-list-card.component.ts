import { Component, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-term-list-card',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule,MatIconModule],
  templateUrl: './term-list-card.component.html',
  styleUrl: './term-list-card.component.scss'
})
export class TermListCardComponent {
  @Input() title:string = ''
  @Input() imgSrc:string = ''
  @Input() claim:string = ''
  @Input() amt:string = ''
  @Input() disc:string = ''
}
