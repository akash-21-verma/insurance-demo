import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-plancard',
  standalone: true,
  imports: [MatIcon,MatButtonModule],
  templateUrl: './plancard.component.html',
  styleUrl: './plancard.component.scss'
})
export class PlancardComponent {
  @Input() imgTag:string = ''
  @Input() titleTag:string = ''
  @Input() benefits:string = ''
  @Input() planPrice:string = ''
}
