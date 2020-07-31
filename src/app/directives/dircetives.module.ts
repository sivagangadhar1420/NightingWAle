import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component'

const ngconcept: Routes = [
  { path: 'ngif', component: NgIfComponent },
  { path: 'ngstyle', component:NgForComponent },

]
@NgModule({
  declarations: [
   NgIfComponent,
    NgForComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ngconcept),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class directivesModule { }








