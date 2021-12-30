import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  number: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  btnDecrementClicked() {
    this.number = this.number - 1;
  }

  btnDecrementClicked0(event: any) {
    this.number = this.number - 1;
  }

  btnResetClicked() {
    this.number = 0;
  }

  btnIncrementClicked() {
    this.number = this.number + 1;
  }

}
