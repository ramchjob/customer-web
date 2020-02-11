import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeServiceService } from './services/home-service.service';
import { Title } from './model/title';
import { Employee } from './model/employee';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) employeePaginator: MatPaginator;
  @ViewChild(MatSort) employeeSort: MatSort;

  employeeDataSource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>([]);
  employeeDisplayColumns: string[] = ['id', 'firstName', 'lastName', 'email'];

  title: Title;
  employees: Employee[] = [];

  constructor(private homeService: HomeServiceService) {}

  async ngOnInit() {
    try {
    this.employees = await this.homeService.getEmployees().toPromise();
    this.prepareDataSource();
    } catch (error) {
        
    } finally {

    }

  }
  prepareDataSource() {
    this.employeeDataSource.data = this.employees;
    this.employeeDataSource.sort = this.employeeSort;
    this.employeeDataSource.paginator = this.employeePaginator;
  }

}
