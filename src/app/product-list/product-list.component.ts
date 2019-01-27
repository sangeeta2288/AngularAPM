import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  prodPageTitle:string= 'Product-List';
  showImageProp: boolean = false;
  imageWidth:number = 50;
  imageMargin:number = 2;

  // add getter and setter properties to listitems
  _itemFilter: string;
  get itemFilter(): string {
    return this._itemFilter;
  }
  set itemFilter(value:string){
    this._itemFilter = value;
    this.filteredItems = this.itemFilter?this.performFiltering(this.itemFilter):this.Products
  }
  filteredItems:IProduct[];
  Products: IProduct[]=
  [
    {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.5,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  },
  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
  }];
  showImage():void{
    this.showImageProp = !this.showImageProp;
  }
  performFiltering(filterBy:string):IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.Products.filter((newProducts:IProduct)=>
              newProducts.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor() {
    this.filteredItems = this.Products;
    this.itemFilter = '';
  }

  ngOnInit() {

  }

}
