import { Component, inject, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MembersComponent } from "../../components/members/members.component";
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonToggleModule,MatRadioModule,MatCheckboxModule,MatSelectModule,MatInputModule,MatIconModule ,MembersComponent,MatButtonModule,MatStepperModule,CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  recipeArr:any[] = [
    {
      id: 1,
      tag: 'Self',
      icons: 'https://t4.ftcdn.net/jpg/06/59/13/31/360_F_659133125_S0VAnb5NNknokdB47K61zDsczWgZJTMf.jpg'
    },
    {
      id: 2,
      tag: 'Spouse',
      icons: 'https://t4.ftcdn.net/jpg/06/59/13/31/360_F_659133125_S0VAnb5NNknokdB47K61zDsczWgZJTMf.jpg'
    },
    {
      id: 3,
      tag: 'Son',
      icons: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhHBClbZK6TVfUsc5xZw3ZpQ7zqmBDXzvjg&s'
    },
    {
      id: 4,
      tag: 'Daughter',
      icons: 'https://as2.ftcdn.net/v2/jpg/02/30/13/69/1000_F_230136972_U9WPUbPnFN2LXbrlbixxZtv2LHeSaPPu.jpg'
    },
    {
      id: 5,
      tag: 'Father',
      icons: 'https://previews.123rf.com/images/ihorbiliavskyi/ihorbiliavskyi1812/ihorbiliavskyi181200089/114296480-businessman-avatar-icon-profession-logo-male-character-a-man-in-suit-people-specialists-flat.jpg'
    },
    {
      id: 6,
      tag: 'Mother',
      icons: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDrgefwWIAQFO3XvnowU0alHA-HG6c0eOmA&s'
    },
    
  ]

  router = inject(Router)

  isLinear = false;
  firstStep:boolean = true
  secondStep:boolean = false
  thirdStep:boolean = false
  fourthStep:boolean = false
  fifthStep:boolean = false
  sixthStep:boolean = false

  ages: number[] = [];
  selectedAge !:number

  citys:string[] = []
  city!:string
  username:string = ''

  medicalHistory:string[] = []

  constructor() {
    this.generateAges(18, 100);
  }
  
  ngOnInit(): void {
    this.citys.push('Delhi','Bengaluru','Hyderabad','Pune','Mumbai','Thane')
    this.medicalHistory.push('Diabetes','Blood Pressure','heart Disease','Any Surgery','Others','None')
  }

  generateAges(start: number, end: number): void {
    this.ages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
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

  moveToSixth(){
    this.sixthStep = true
    this.fifthStep = false
  }

  moveToPlans(){
    this.router.navigateByUrl('/plans')
  }


}
