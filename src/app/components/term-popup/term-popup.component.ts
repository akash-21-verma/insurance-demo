import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import { Router } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-term-popup',
  standalone: true,
  imports: [FormsModule,CommonModule, MatCheckboxModule,MatSelectModule, MatRadioModule,MatChipsModule,MatButtonModule,MatDialogModule,MatDividerModule,MatStepperModule,MatFormFieldModule],
  templateUrl: './term-popup.component.html',
  styleUrl: './term-popup.component.scss'
})
export class TermPopupComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<TermPopupComponent>);
  router = inject(Router)

  firstStep:boolean = true
  secondStep:boolean = false
  thirdStep:boolean = false
  fourthStep:boolean = false
  fifthStep:boolean = false
  sixthStep:boolean = false

  ages: string[] = [];
  selectedAge !:number

  citys:string[] = []
  city!:string
  username:string = ''

  medicalHistory:string[] = []

  ngOnInit(): void {
    this.ages = ['25 Lacs + ','15 Lacs to 24.9 Lacs','10 Lacs to 14.9 Lacs','8 Lacs to 9.9 Lacs']
    this.citys.push('Delhi','Bengaluru','Hyderabad','Pune','Mumbai','Thane')
     
  }

  movetoFirst(){
    this.secondStep = false
    this.firstStep = true
  }

  moveToSecond(){
    this.firstStep = false
    this.secondStep = true
    this.thirdStep = false
  }

  moveToThird(){
    this.secondStep = false
    this.thirdStep = true
    this.fourthStep = false
  }

  moveToFourth(){
    this.fifthStep = false
    this.fourthStep = true
    this.thirdStep = false
  }

  moveToFifth(){
    this.fourthStep = false
    this.fifthStep = true
    this.sixthStep = false
  }


  moveToPlans(){
    this.router.navigateByUrl('/term-plans')
    this.dialogRef.close()
  }


}
