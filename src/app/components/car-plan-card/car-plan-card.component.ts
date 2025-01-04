import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-car-plan-card',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './car-plan-card.component.html',
  styleUrl: './car-plan-card.component.scss'
})
export class CarPlanCardComponent {
  @Input() imgPath:string = ''
  @Input() price:string = ''
}
