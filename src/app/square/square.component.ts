import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div>
      <div *ngIf="value" [ngClass]=" value ? value === 'X'? 'X icon' : 'Y icon': ''" ></div>
    </div>
  `,
  styles: [
    'div {font-size: 200px; display: flex; height: 100%; justify-content: center; align-items: center}',
    ".icon {height: 100px; width: 100px}",
    
    '.X { background-color: #a72b54; }',
    ".Y { background-color: #03dac6;  border-radius: 50%; }",
    "div:hover:not(.X):not(.Y) { opacity: 0.8; box-shadow: 0 14px 26px -12px }"
  ]
})
export class SquareComponent{
@Input() value: 'X' | 'O';
}
