import { Component, Input, SimpleChanges, OnChanges, OnInit} from '@angular/core';
import { ProductI } from '../../utils/product';
@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products.html',
})
export class ProductsList implements OnChanges, OnInit{
  @Input() product:any;
  products:ProductI[] = [];

  ngOnInit(){
    const storedProducts = localStorage.getItem("products");
    if (storedProducts){
      this.products = JSON.parse(storedProducts);
    }
  }
  ngOnChanges(changes:SimpleChanges){
    if (changes['product'] && this.product) {
      this.products.push(this.product);
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }
}
