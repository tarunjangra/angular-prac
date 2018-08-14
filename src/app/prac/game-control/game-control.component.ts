import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() start: EventEmitter<number> = new EventEmitter();
  @Output() stop: EventEmitter<number> = new EventEmitter();
  timer: any;
  started: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  startGame(){
    let a = 0;
    this.timer = setInterval(() => {
      this.start.emit(++a);
    }, 1000);
    if(!this.started){
      this.started = true;
    }
  }
  stopGame(){
    clearInterval(this.timer);
    this.started = false;
  }

}
