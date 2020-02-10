import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './services/home-service.service';
import { Title } from './model/title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: Title;

  constructor(private homeService: HomeServiceService) {

  }

 async ngOnInit() {
   this.title = await this.homeService.getTitle().toPromise();
   console.log(this.title);
  }

}
