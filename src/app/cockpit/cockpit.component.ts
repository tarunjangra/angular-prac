import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('srvCreated') serverCreated: EventEmitter<any> = new EventEmitter<{serverName: string,serverContent: string}>();
  @Output('blueCreated') blueprintCreated: EventEmitter<any> = new EventEmitter<{serverName: string,serverContent: string}>();
  // public newServerName = '';
  // public newServerContent = '';
  @ViewChild('serverContentInput') serverContent: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement){
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(serverName: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

}
