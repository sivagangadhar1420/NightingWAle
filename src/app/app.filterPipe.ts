import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    // transform(value){
    //    console.log(" aaaaaaa",value)
    // }

    filterdata = [];
    transform(value: any, search) {

        console.log( " value  " , value, search)
        if (search === undefined) {
            return value;
        }
        else {
            this.filterdata = [];
            for (let k of value) {
                console.log(k)
                if (k.Title.toLowerCase().indexOf(search) >= 0) {
                    this.filterdata.push(k);
                }
            }
        } return this.filterdata;
    }
}