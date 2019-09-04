import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  countState = 0;
  yourname = "bob";
  counter = new BehaviorSubject(0);

  addCount(){
    this.countState++;
    this.counter.next(this.countState);    
  }
}
