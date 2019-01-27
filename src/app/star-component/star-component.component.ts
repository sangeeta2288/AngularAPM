import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnChanges {

  @Input() rating:number;
  starWidth : number;

  ngOnChanges():void{
    this.starWidth = this.rating * 95 / 5;
  }
}
  //export class StarComponentComponent implements OnInit {

  //constructor() { }

  //ngOnInit() {
  //}

//}
