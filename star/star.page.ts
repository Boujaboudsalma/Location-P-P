import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.page.html',
  styleUrls: ['./star.page.scss'],
})
export class StarPage implements OnInit {
  @Input() starId;
  @Input() rating;


  @Output() starEnter : EventEmitter<number> = new EventEmitter();
  @Output() starLeave : EventEmitter<number> = new EventEmitter();
  @Output() starClicked : EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onStarEnter() {
    this.starEnter.emit(this.starId);
  }
  onsStarLeave(){
    this.starLeave.emit();
  }
  onStarClicked(){
    this.starClicked.emit(this.starId);
  }
}
