import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    HttpClientModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string='';
  password: string='';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.validateUser(this.email, this.password).subscribe(users => {
      const user = users.find(u => u.email === this.email && u.password === this.password);
      if (user) {
        this.handleSuccessfulLogin(user);
      } else {
        console.log("Identifiants incorrects");
      }
    });
  }

  private handleSuccessfulLogin(user: any) {
    // Stocker les informations de l'utilisateur dans le stockage local
    localStorage.setItem('currentUser', JSON.stringify(user));

    this.router.navigate(['/loans']);
  }
}
