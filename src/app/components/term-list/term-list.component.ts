import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TermPopupComponent } from '../term-popup/term-popup.component';
import { MatIconModule } from '@angular/material/icon';
import { TermListCardComponent } from "../term-list-card/term-list-card.component";

@Component({
  selector: 'app-term-list',
  standalone: true,
  imports: [MatIconModule, TermListCardComponent],
  templateUrl: './term-list.component.html',
  styleUrl: './term-list.component.scss'
})
export class TermListComponent implements OnInit {
  _dialog = inject(MatDialog)

  ngOnInit(): void {
    this.openDialog('1000','1000')
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this._dialog.open(TermPopupComponent, {
        width: '60vw',
        height: '60vh',
        enterAnimationDuration,
        exitAnimationDuration,
        disableClose: true
      });
    }

}
