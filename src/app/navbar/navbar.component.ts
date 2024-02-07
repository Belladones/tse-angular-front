import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {User} from "../user";
import {AuthService} from "../auth.service";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentUser: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    window.location.reload();

  }

  signin() {
    this.router.navigate(['/login']); // Rediriger vers la page de connexion

  }


}
