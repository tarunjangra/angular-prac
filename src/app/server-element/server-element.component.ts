import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges,
  SimpleChanges
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('srvElement') element: {name: string,type: string, content: string};
  constructor() {

    console.log('Constructor of server elements');

   }

  ngOnInit() {
    console.log('ngOnInit call on server element.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

}
