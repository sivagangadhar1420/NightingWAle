import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppServices } from '../app.service';
import { BluePrint } from './demotask1';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @ViewChild('fnForm', {static:false}) fnForm:any;
      storingData=[{name:"Raju", age:27, gender:"Male", 'isAged':true},
                      {name:"plink", age:23, gender:"Male", 'isAged':true},
                      {name:"Queen", age:25, gender:"FeMale", 'isAged':false},
                      {name:"Rocky", age:29, gender:"Male", 'isAged':true}];
  
  quantity:any= "";
  price:any=""; 
  res11:BluePrint[]=[];

  onSubmit(){
    let ft:any={quantity:this.quantity, price:this.price};
    this.res11.push(ft);
    this.fnForm.reset();
  }
    addItems(){
      let ft:any={quantity:this.quantity, price:this.price};
      this.res11.push(ft);
    }
    
  index:any="";
  edit(fm1:any, fm2:any, ind){
  this.index = ind;
  this.quantity= fm1;
  this.price = fm2;
}
updateItems(){
  for(var i=0; i< this.res11.length; i++){
    if( i == this.index){
      this.res11[i].price = this.price;
      this.res11[i].quantity = this.quantity;
    
    }
  }
}
delete(ind){
    this.res11.splice(ind, 1);
}

setClasses(){
  let pl={'isAged':true, 'age':this.storingData};
  return pl;
}
name:any="RajuKing";
upDateName(){
  this.name = "Raju and Queen";
}
btnEnable = true;
st=true;
serverName="";
 
  

  constructor(private fb:FormBuilder , private appService : AppServices ){}
  ngOnInit(): void {
    setTimeout(()=>{
      this.st = false
    },3000)
  }
  
    
    
   


}
