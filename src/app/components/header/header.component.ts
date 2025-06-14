import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { UserAuthService } from '../../services/user-auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    isClicked = false
    user: User | null = null
    logo = 'Logo.svg'

    constructor(public UserAuthService: UserAuthService){

    }

    get imagePath(){
      return 'assets/'+ this.logo
    }

    onUserClick(){
      this.UserAuthService.isLoggedIn ? this.UserAuthService.logout() : this.UserAuthService.login()
      console.log('user', this.UserAuthService.user)
      this.user = this.UserAuthService.user
    }
}
