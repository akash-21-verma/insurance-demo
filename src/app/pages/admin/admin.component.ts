import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [DatePipe ,MatSortModule, MatButtonModule, MatPaginatorModule, MatTableModule, SidebarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  authService = inject(AuthService)

  displayedColumns: string[] = ['trace_id', 'customer_name', 'mobile_no', 
    'email','city','sum_insured','insured_member','update_at','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.authService.MenuObject$.next(true)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  customer_name: string;
  trace_id: number;
  mobile_no: number;
  email: string;
  city: string;
  sum_insured:string;
  insured_member:number;
  update_at: Date;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {trace_id: 1, customer_name: 'Customer 1', mobile_no: 1876540079, email: 'customer1@gmail.com',city: 'Delhi'
    ,sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 2, customer_name: 'Customer 2', mobile_no:8418765026, email: 'customer2@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 3, customer_name: 'Customer 3', mobile_no :8018765941, email: 'customer3@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 4, customer_name: 'Customer 4', mobile_no:8918765122, email: 'customer4@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 5, customer_name: 'Customer 5', mobile_no:8118765811, email: 'customer5@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 6, customer_name: 'Customer 6', mobile_no: 8218765107, email: 'customer6@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 7, customer_name: 'Customer 7', mobile_no: 8418765067, email: 'customer7@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 8, customer_name: 'Customer 8', mobile_no: 8518765994, email: 'Ocustomer8@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 9, customer_name: 'Customer 9', mobile_no: 8818765984, email: 'customer9@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 10, customer_name: 'Customer 10', mobile_no: 8018765797, email: 'customer10@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 11, customer_name: 'Customer 11', mobile_no: 8218765897, email: 'customer11@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 12, customer_name: 'Customer 12', mobile_no:8218765305, email: 'Mgcustomer12@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 13, customer_name: 'Aluminum', mobile_no: 8618765815, email: 'customer13@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 14, customer_name: 'Silicon', mobile_no: 8818765855, email: 'customer14@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 15, customer_name: 'Phosphorus', mobile_no: 381876538, email: 'customer15@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 16, customer_name: 'Sulfur', mobile_no:8318765065, email: 'customer16@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 17, customer_name: 'Chlorine', mobile_no:8318765453, email: 'customer17@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 18, customer_name: 'Argon', mobile_no:8318765948, email: 'customer18@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 19, customer_name: 'Potassium', mobile_no: 8918765983, email: 'customer19@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
  {trace_id: 20, customer_name: 'Calcium', mobile_no:8418765078, email: 'customer20@gmail.com',city: 'Delhi',sum_insured:'12000',insured_member: 2,update_at: new Date(),action: 'view'},
];
