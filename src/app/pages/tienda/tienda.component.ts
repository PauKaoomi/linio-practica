import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasComponent } from '../../tarjetas/tarjetas.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, TarjetasComponent, NavbarComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

}
