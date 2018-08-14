import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 serverElements = [
   {type: 'server',name: 'Test server', content: 'Test content'}
  ];

  event_numbers = [];

  even_number: number=0;
  odd_number: number=0;
  accounts: {name: string, status: string}[] = [];
  inactive_users: {name: string}[] = [];
  active_users: {name: string}[] = [];
  

  constructor(
    private accountServ: AccountsService,
    private userServ: UserService
  ){}

 ngOnInit(){
   this.accounts = this.accountServ.accounts;
   this.inactive_users = this.userServ.inactive;
   this.active_users = this.userServ.active;
 }

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

  onStatusChanged(indx: number,acnt: {name: string, status: string}){
    this.accounts[indx] = acnt;
  }

  setUser(indx: number, status: string){
    if(status === 'inactive'){
      this.userServ.makeInactive(indx);
    }else if(status === 'active'){
      this.userServ.makeActive(indx);
    }
  }
}
