import { Component } from '@angular/core';
import { AddProduct } from '../../components/add-product/add-product';
import { ProductsList } from '../../components/products-list/products';

@Component({
  selector: 'app-products',
  imports: [AddProduct, ProductsList],
  templateUrl: './products.html',
  styles: ``,
})
export class Products {
  newProduct:any;
  getProduct(data:any){
      this.newProduct = data;
      console.log(this.newProduct)
    }
}
