import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('srvCreated') serverCreated: EventEmitter<any> = new EventEmitter<{serverName: string,serverContent: string}>();
  @Output('blueCreated') blueprintCreated: EventEmitter<any> = new EventEmitter<{serverName: string,serverContent: string}>();
  public newServerName = '';
  public newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName,serverContent){
    this.serverCreated.emit({serverName: serverName.value,serverContent: serverContent.value});
  }

  onAddBlueprint(serverName,serverContent){
    this.blueprintCreated.emit({serverName: serverName.value,serverContent: serverContent.value});
  }

}
