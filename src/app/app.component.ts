import { Component,OnInit } from '@angular/core';

export class myClass{
    someInt: number;
    get statusDescription(): string
    {
        return "Status";
    }
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  allMyClasses:myClass[]=[new myClass(),new myClass(),Object.assign(new myClass(),{someInt:3})];
  ngOnInit()
{
  this.allMyClasses.push(Object.assign(new myClass(),{someInt:5}))
}
  
}
