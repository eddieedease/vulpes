import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'vulpes';

  yearR;

  constructor(){
    console.log('HI MARK');
    const dt = new Date().getFullYear();
    this.yearR = dt;

  }

}


