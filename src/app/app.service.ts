import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class AppServices{

    constructor(
        private http: HttpClient
    ){}

    //public serverUrl = environment.serverUrl;

    //http://dummy.restapiexample.com/

    getData(){
       return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=jurassic&page=1") 
    }
    
}