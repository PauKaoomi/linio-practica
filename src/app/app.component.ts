import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlertaComponent } from './alerta/alerta.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlertaComponent, TarjetasComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo de Angular';
  public contador: number = 10;

  Incrementar(value: number): void {
    // this.contador += value;
    this.contador = this.contador >= 10 ? this.contador: 10;
    
    // if (this.contador < 10) {
    //   this.contador = 10;
    //   alert("El contador siempre debe ser igual o mayor a 10")
    // }
    
  }
}
