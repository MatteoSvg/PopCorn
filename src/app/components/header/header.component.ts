import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    isClicked = false
    logo = 'Logo.svg'
    get imagePath(){
      return 'assets/'+ this.logo
    }

    onUserClick(){
      this.isClicked = !this.isClicked
    }
}
