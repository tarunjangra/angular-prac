import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 serverElements = [
   {type: 'server',name: 'Test server', content: 'Test content'}
  ];

  event_numbers = [];

  even_number: number=0;
  odd_number: number=0;

  onServerAdded(serverData: {serverName: string,serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });

  }
  onBlueprintAdded(blueprintData: {serverName: string,serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeName(){
    this.serverElements[0].name = 'Changed Value';
  }
  onDestroy(){
    this.serverElements.splice(0,1);
  }

  onStart(eventVal: number){
    if(eventVal%2 === 0){
      this.event_numbers.push({type: 'even', value: eventVal});
    }else{
      this.event_numbers.push({type: 'odd', value: eventVal});
    }
  }
}
