import { Component, OnInit, ViewChild } from '@angular/core';
import { AppServices } from '../app.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-moviessearch',
  templateUrl: './moviessearch.component.html',
  styleUrls: ['./moviessearch.component.css']
})
export class MoviessearchComponent implements OnInit {

  constructor(private appService: AppServices,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getDetails()
  }

  public moviesdata: any = [];
  public name: any = ""
  public movies: any;
  public search: any;
  @ViewChild('videoPlayer', { static: false }) videoplayer: any;
  public newdata : any;
  public moviename : any;
  public movieyear : any;
  public id : any;
  public index : any;
  productForm: FormGroup;
  public arr :any

  getDetails() {
    this.appService.getData().subscribe(
      (res) => {
        this.moviesdata = res;
        this.movies = this.moviesdata.Search;
      }
    )
  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

  deleteMovies(index) {
    this.movies.splice(index, 1);
  }
  addMovies(){
     this.moviename="",
     this.movieyear = "",
     this.id=""
  }

  editMovies(moviename,movieyear,movieid,index){

    this.moviename= moviename;
    // this.moviename = this.appService.getData();
    this.movieyear = movieyear;
    this.id  = movieid;
    this.index = index;
    
  }
  onSubmit(){
     this.movies.push({Title:this.moviename,Year:this.movieyear,imdbID:this.id})
  }

  updateMovies(){
   for(let i=0;i< this.movies.length;i++){
     if(i===this.index){
       this.movies[i].Title = this.moviename
       this.movies[i].Year = this.movieyear
       this.movies[i].imdbID = this.id
     }
  }
}
}
