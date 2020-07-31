import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

 public name = "vishwas"
 public message = ""
 public checked  : any
 public indeterminate  : any

  ngOnInit(): void {
  }

}
