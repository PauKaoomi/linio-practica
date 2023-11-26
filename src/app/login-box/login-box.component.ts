import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterOutlet } from '@angular/router';

@Component({
  selector: 'login-box',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet],
  templateUrl: './login-box.component.html',
  styleUrl: './login-box.component.css'
})
export class LoginBoxComponent {

}
