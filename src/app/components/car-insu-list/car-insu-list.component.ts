import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CarPlanCardComponent } from "../car-plan-card/car-plan-card.component";

@Component({
  selector: 'app-car-insu-list',
  standalone: true,
  imports: [MatButtonModule, CarPlanCardComponent],
  templateUrl: './car-insu-list.component.html',
  styleUrl: './car-insu-list.component.scss'
})
export class CarInsuListComponent {

}
