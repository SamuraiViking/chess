import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})

export class PlayComponent implements OnInit {
  testValue: String;

  constructor() {
    this.testValue = "STring";
  }

  ngOnInit() {
  }

}
