import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './services/home-service.service';
import { Title } from './model/title';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: Title;
  employees: Employee[] = [];

  constructor(private homeService: HomeServiceService) {

  }

 async ngOnInit() {
   this.employees = await this.homeService.getEmployees().toPromise();
 }

}
