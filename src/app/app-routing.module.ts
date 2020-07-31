import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGaurd } from './app.authgaurd';
import { TasksComponent } from './tasks/tasks.component';
import { Task2Component } from './task2/task2.component';
import { MoviessearchComponent } from './moviessearch/moviessearch.component';
import { UdemyComponent } from './udemy/udemy.component';
import { DirectivesComponent } from './directives/directives.component';
import { DynamicroutingComponent } from './dynamicrouting/dynamicrouting.component';
import { DynamicroutingdataComponent } from './dynamicroutingdata/dynamicroutingdata.component';


DynamicroutingdataComponent
const routes: Routes = [
  {path :'tasks' , component : TasksComponent},
  {path : 'task2' , component: Task2Component},
  {path : 'movies', component: MoviessearchComponent},
  {path : 'udemy', component: UdemyComponent},
  { path: '#', component: TasksComponent, children: [
    { path: 'task2', component: Task2Component },
    { path: 'movies', component:MoviessearchComponent }
  ] },

  {
    path: 'ngconcept',
    loadChildren: () => import('./directives/dircetives.module').then(m => m.directivesModule)

  },
  {path : 'dynamic', component: DynamicroutingComponent},
  {path : 'dynamic/:id', component: DynamicroutingdataComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
