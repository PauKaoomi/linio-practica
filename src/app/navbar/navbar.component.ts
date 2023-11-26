import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from '../pages/tienda/tienda.component';
import { CarritocomprasComponent } from '../component/carritocompras/carritocompras.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TiendaComponent, CarritocomprasComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
}
