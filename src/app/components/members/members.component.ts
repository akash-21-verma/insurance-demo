import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  @Input() tagName:string = ''
  @Input() iconTag:string = ''

  toggleSelection(card: any) {
    card.selected = !card.selected;
  }

}
