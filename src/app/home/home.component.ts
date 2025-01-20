import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Input() userId: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  onSignIn(): void {
    console.log('Signing in with user ID:', this.userId);
    this.authService.signIn(Number(this.userId));
    this.router.navigate(['/cryton/my-cryptos']);
  }
}
