import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';
import { TrolleyComponent } from './components/trolley/trolley.component';
import { ButtonComponent } from './components/button/button.component';
import { HeadingComponent } from './components/heading/heading.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FloatButtonComponent,
    TrolleyComponent,
    ButtonComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    FloatButtonComponent,
    ButtonComponent,
    HeadingComponent
  ]
})
export class SharedModule { }
