import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('trolley') trolley: ElementRef;
  data:boolean;
  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {}
  public scroll(site: string): void {
    switch (site) {
      case 'home':
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        break;
      case 'about':
        window.scroll({
          top: 750,
          left: 750,
          behavior: 'smooth',
        });
        break;
      case 'menu':
        window.scroll({
          top: 1450,
          left: 1450,
          behavior: 'smooth',
        });
        break;
      case 'products':
        window.scroll({
          top: 2250,
          left: 2250,
          behavior: 'smooth',
        });
        break;
      case 'review':
        window.scroll({
          top: 2700,
          left: 2700,
          behavior: 'smooth',
        });
        break;
      case 'contact':
        window.scroll({
          top: 3250,
          left: 3250,
          behavior: 'smooth',
        });
        break;
      case 'blogs':
        window.scroll({
          top: 3850,
          left: 3850,
          behavior: 'smooth',
        });
        break;

      default:
        break;
    }
  }
  public openTrolley():void{
    this.data = !this.data;
  }
  
}
