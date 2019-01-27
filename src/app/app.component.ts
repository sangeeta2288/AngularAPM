import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './product-list/product-list.component.html',
  templateUrl: './app.component.html',
  //template: '<div><h1>{{pageTitle}}</h1></div><app-product-list></app-product-list>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Debra Welcomes you to Angular!';
  // t1='Hey.. You did it'
  pageTitle:string = 'Acme Product Management';

}
