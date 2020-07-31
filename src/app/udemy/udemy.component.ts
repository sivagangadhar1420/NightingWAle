import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-udemy',
  templateUrl: './udemy.component.html',
  styleUrls: ['./udemy.component.css']
})
export class UdemyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public movies: any = [{name : 'aaaa' , src : "https://media.gettyimages.com/photos/young-woman-working-at-home-picture-id1057767656?s=2048x2048"}, {name:'bbbb' ,src:"https://media.gettyimages.com/photos/young-woman-working-at-home-picture-id1057767656?s=2048x2048"}];
  public selectedIndex : any;
  public show : any;
  public viewMode = 'list'

  forIndex(i){
    console.log(" index", i)
    this.selectedIndex = i;
    this.show = true;
  }
}
