import { Component, OnInit } from '@angular/core'; // Important classes so that can use it

@Component({
  selector: 'bc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit { // OnInit is a Interface. If don't have export than can not be imported by other files
  // Properties
  menuName: string = "Angular Menu";

  constructor() { } // Default constructor

  ngOnInit(): void { // Method (Life Cycle Method) here b/c of interface & gets the ngOnInit function - put data that want to run each time that run compoment
  }

}
