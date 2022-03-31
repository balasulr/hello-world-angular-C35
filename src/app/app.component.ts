import { Component } from '@angular/core';

@Component({ // @ Decorator which is a Component which has 3 key value pairs
  selector: 'app-root', // Selector is a primary key for components
  templateUrl: './app.component.html', // HTML & Css points to the html & css pages
  styleUrls: ['./app.component.css'] // Code points to pages that have html & css in them
})
export class AppComponent { // Class
  title = 'The bootcamp';
  maxOn: boolean = true;
  names: string[] = [ "Ann", "Bob", "Chris", "David", "Ellen", "Fred"];
  customers: any[] = [ // any means that can be any type
    { id: 1, name : "MAX", sales: 10000, stateCode: "OH"},
    { id: 2, name : "PG", sales: 100000, stateCode: "OH"},
    { id: 3, name : "Great American", sales: 1000000, stateCode: "OH"}
  ];

  aString1: string = "";
  aString2: string = "";

  copy(): void {
    this.aString2 = this.aString1;
  }

  clicked(): void {
    if(this.maxOn) {
      this.title = "The MAXimum boot camp";
      this.maxOn = !this.maxOn;
    } else {
      this.maxOn = !this.maxOn;
      this.title = "The boot camp"
    }
  }
}
