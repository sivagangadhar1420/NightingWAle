import { Component, OnInit , Input, Output,EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

@Input() parentData : string;
@Output() public childEvent = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('data from child')
  }
}
