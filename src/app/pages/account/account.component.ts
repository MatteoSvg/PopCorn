import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { User } from '../../models/user.model';
import { UserAuthService } from '../../services/user-auth.service';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
    constructor(public UserAuthService: UserAuthService){}
}
