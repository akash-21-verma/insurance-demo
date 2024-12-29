import { Component, inject, Injector } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatIconModule, MatInputModule,MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  router = inject(Router)
  isOTPVisible:boolean = false

  readonly dialogRef = inject(MatDialogRef<SignupComponent>);

  showOTPInput(){
    this.isOTPVisible = true
  }

  MoveToAdmin(){
    this.router.navigateByUrl('/admin')
    this.dialogRef.close()
  }


}
