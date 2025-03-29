import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe(response => {
        console.log('Login exitoso', response);
        localStorage.setItem('token', response.token);
      }, error => {
        console.error('Error en el login', error);
      });
  }
}
