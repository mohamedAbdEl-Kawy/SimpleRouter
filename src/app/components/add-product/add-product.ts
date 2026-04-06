import { Component, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule, ReactiveFormsModule ],
  templateUrl: './add-product.html',
  styles: ``,
})
export class AddProduct {
  productsForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    desc: new FormControl('', []),
    imgURL: new FormControl('', [Validators.required, Validators.pattern(/^(https?:\/\/.*)$/i)])
  });

  @Output() sendProduct = new EventEmitter();
  sendData(){
    if (this.productsForm.valid) {
      this.sendProduct.emit(this.productsForm.value);
      this.productsForm.reset();
    } else {
      alert('Please fill all teh fields correctly');
    }
  }
}
