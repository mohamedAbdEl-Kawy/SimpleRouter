import { Component } from '@angular/core';
import { UserImg } from '../../components/user-img/user-img';
import { UserName } from '../../components/user-name/user-name';

@Component({
  selector: 'app-images',
  imports: [UserImg, UserName],
  templateUrl: './images.html',
})
export class Images {

}
