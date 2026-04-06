import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-name',
  imports: [FormsModule],
  templateUrl: './user-name.html',
  styleUrl: './user-name.css',
})
export class UserName {
  nm:string = "";
}
