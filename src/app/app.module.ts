import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppServices } from './app.service';
import { InterceptorService } from './interceptor.service';
import { FilterPipe } from './app.filterPipe';
import { AuthGaurd } from './app.authgaurd';
import { TasksComponent } from './tasks/tasks.component';
import { Task2Component } from './task2/task2.component';
import { MoviessearchComponent } from './moviessearch/moviessearch.component';

import { UdemyComponent } from './udemy/udemy.component';
import { DirectivesComponent } from './directives/directives.component';
import { DynamicroutingComponent } from './dynamicrouting/dynamicrouting.component';
import { DynamicroutingdataComponent } from './dynamicroutingdata/dynamicroutingdata.component';
import { TrialComponent } from './trial/trial.component';
// import { NgIfComponent } from './directives/ng-if/ng-if.component';
// import { NgForComponent } from './directives/ng-for/ng-for.component';


const router : AppRoutingModule=[

]
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TasksComponent,
    Task2Component,
    MoviessearchComponent,
    UdemyComponent,
    DirectivesComponent,
    DynamicroutingComponent,
    DynamicroutingdataComponent,
    TrialComponent,
    // NgIfComponent,
    // NgForComponent
   // ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatInputModule,
    // MatMenuModule,
    // MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

   // FilterPipe
   
   // RouterModule.forRoot(router)
  ],
  providers: [AppServices,
  {
    provide:HTTP_INTERCEPTORS,
    useClass : InterceptorService,
    multi:true
  },AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
