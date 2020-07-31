import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamicrouting',
  templateUrl: './dynamicrouting.component.html',
  styleUrls: ['./dynamicrouting.component.css']
})


export class DynamicroutingComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  departments = [
    {"id":1, "name" : "angular"},
    {"id":2, "name" : "Node"},
    {"id":3, "name" : "MongoDb"},
    {"id":4, "name" : ".net"},
    {"id":5, "name" : "Java"},

  ]

  onSelect(d){
    this.router.navigate(['/dynamic',d.id])
  }
}
