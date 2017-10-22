import { Component, OnInit } from '@angular/core';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  envName;
  bgColor;

  ngOnInit() {
    console.log("Hallo");
    console.log("Name", environment.envName);
    console.log("Color", environment.bgColor);
    this.envName = environment.envName;
    this.bgColor = environment.bgColor;
  }
}
