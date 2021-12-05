import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-trolley',
  templateUrl: './trolley.component.html',
  styleUrls: ['./trolley.component.scss']
})
export class TrolleyComponent implements OnInit {
  @Input('dataTrolley') dataTrolley:boolean;
  @ViewChild('trolley') trolley: ElementRef;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
  }
  ngOnChanges():void{
    if(this.dataTrolley !== undefined){
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

}
