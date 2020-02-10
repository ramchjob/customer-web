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
  customers: Employee[] = [];

  constructor(private homeService: HomeServiceService) {

  }

 async ngOnInit() {
   this.title = await this.homeService.getTitle().toPromise();
   this.customers = await this.homeService.getEmployees().toPromise();
  }

}
