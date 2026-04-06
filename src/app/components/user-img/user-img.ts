import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-img',
  imports: [FormsModule],
  templateUrl: './user-img.html',
  styleUrl: './user-img.css',
})
export class UserImg{
  images: string[] = [];
  currentIndex:number = 0;
  len = 6;
  i:any;
  isSlide:boolean = false;
  timer:number = 1;

  constructor (){
    for (let i =0; i<this.len; i++){
      this.images.push(`img${i}`)
    }
    console.log(this.images)
  }

  prev(){
    this.currentIndex = (this.currentIndex - 1 + this.len) % (this.len);
  }

  next(){
    this.currentIndex = (this.currentIndex + 1) % (this.len);
    console.log("next called")
  }

  slide(){
      if(this.isSlide) return;
      this.isSlide = true;
      this.i = setInterval(this.next.bind(this), this.timer * 1000);
  }

  stop(){
    clearInterval(this.i);
    this.isSlide = false;
  }

}
