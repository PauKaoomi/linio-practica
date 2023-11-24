import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from '../../login-box/login-box.component'

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, LoginBoxComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
