import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-carritocompras',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './carritocompras.component.html',
  styleUrl: './carritocompras.component.css'
})
export class CarritocomprasComponent {

}
