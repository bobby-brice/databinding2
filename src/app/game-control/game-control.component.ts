import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  //property that instantiates a new event to app.comp.html which is bound to a method in app.ts
  @Output() intervalFired = new EventEmitter<number>();
  interval:any;
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);  //emits the even to parent
      this.lastNumber++;
    }, 1000)
  }
  onPauseGame() {
    clearInterval(this.interval);
  }
}
