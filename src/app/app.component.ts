import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.style.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private appService: AppService) {

  }

  ngOnInit() {

  }
}
