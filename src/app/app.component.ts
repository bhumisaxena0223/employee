import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee';
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  navbar = [{
    title: "Home",
    href : "#/home"
  },{
    title: "About",
    href : "#/home"
  },{
    title: "Contact",
    href : "#/home"
  },{
    title: "Services",
    href : "#/home"
  }];
}
