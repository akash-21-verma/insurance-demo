import { Component } from '@angular/core';
import { PlancardComponent } from "../plancard/plancard.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-display-card',
  standalone: true,
  imports: [PlancardComponent,MatButtonModule,MatIconModule],
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.scss'
})
export class DisplayCardComponent {

}
