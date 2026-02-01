import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isVisible:boolean=false;

  tggleDropDown(){
    this.isVisible=!this.isVisible;
  }
}
