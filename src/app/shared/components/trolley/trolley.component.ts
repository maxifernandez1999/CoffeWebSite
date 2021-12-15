import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { TrolleyService } from '../../services/trolley.service';
@Component({
  selector: 'app-trolley',
  templateUrl: './trolley.component.html',
  styleUrls: ['./trolley.component.scss'],
})
export class TrolleyComponent implements OnInit {
  @Input('dataTrolley') dataTrolley: boolean;
  @ViewChild('trolley') trolley: ElementRef;
  products:IProduct[] = [];
  constructor(
    private renderer2: Renderer2,
    private trolleyService: TrolleyService
  ) {}

  ngOnInit(): void {this.getProductToTrolley()}
  ngOnChanges(): void {
    if (this.dataTrolley !== undefined) {
      this.activate();
    }
  }
  public activate(): void {
    const el: any = this.trolley.nativeElement;
    if (this.trolley.nativeElement.className === 'cart-items-container') {
      this.renderer2.addClass(el, 'active');
    } else {
      this.renderer2.removeClass(el, 'active');
    }
  }
  public getProductToTrolley():void{
    this.trolleyService.getTrolleyProducts().subscribe(response => {
      this.products = response;
      console.log(this.products)
    })
  }
}
