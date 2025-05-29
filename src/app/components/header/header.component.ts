import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    username = 'Matteo Solavagione'
    logo = 'Logo.svg'
    get imagePath(){
      return 'assets/'+ this.logo
    }

    onUserClick(){
      console.log('you click me')
    }
}
