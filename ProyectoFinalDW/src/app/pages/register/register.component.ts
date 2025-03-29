import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true
})
export class RegisterComponent {
  user: User = new User();

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user)
      .subscribe(response => {
        console.log('Registro exitoso', response);
      }, error => {
        console.error('Error en el registro', error);
      });
  }
}
