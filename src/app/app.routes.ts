import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Images } from './pages/images/images';
import { Products } from './pages/products/products';
import { Notfound } from './pages/notfound/notfound';

export const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch: "full"},
  {path: "home", component: Home, title:"Home"},
  {path: "about", component: About, title:"About"},
  {path: "login", component: Login, title:"Login"},
  {path: "register", component:Register, title:"Register"},
  {path: "images", component: Images, title:"Images"},
  {path: "products", component: Products, title:"Products"},
  {path: "**", component: Notfound, title:"Not Found"},
];
