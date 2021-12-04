import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsComponent } from './components/products/products.component';
import { ReviewComponent } from './components/review/review.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ProductsComponent,
    ReviewComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class HomeModule { }
