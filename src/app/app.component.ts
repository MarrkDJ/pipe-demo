import { Component, OnInit } from '@angular/core';

import { EnvironmentDataService } from "./_services/environment-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  environment;

  constructor (
    private envDataService: EnvironmentDataService
  ) {}

  ngOnInit() {
    this.environment = {};

    this.envDataService.getEnvironment()
      .subscribe((data) => {
        this.environment = data;
      });
  }
}
