import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title: string = 'valverde';

  public todo: any[] = []


  constructor() {
    this.title
console.log(this.title)
  }
}
