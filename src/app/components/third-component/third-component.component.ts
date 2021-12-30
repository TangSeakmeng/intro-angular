import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.scss']
})
export class ThirdComponentComponent implements OnInit {

  @Output() onBtnDecrementClicked = new EventEmitter<string>();
  @Output() onBtnResetClicked = new EventEmitter();
  @Output() onBtnIncrementClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnDecrementClicked() {
    this.onBtnDecrementClicked.emit('hello');
  }

  btnResetClicked() {
    this.onBtnResetClicked.emit();
  }

  btnIncrementClicked() {
    this.onBtnIncrementClicked.emit();
  }

}
