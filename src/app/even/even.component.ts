import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  //property [number]="evenNumber" in app.comp.html and is bound to evenNumbers array
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
