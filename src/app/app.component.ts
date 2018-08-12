import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 serverElements = [
   {type: 'server',name: 'Test server', content: 'Test content'},
   {type: 'blueprint',name: 'Test server', content: 'Test content'},
   {type: 'server',name: 'Test server', content: 'Test content'},
  ];
}
