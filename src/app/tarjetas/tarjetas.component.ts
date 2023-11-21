import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {
  @Input() title: string = 'Xiaomi poco m3 pro 5G 64 gb azul hielo 4 ram + realme watch 2 pro';
  @Input() img: String = "https://cdn.discordapp.com/attachments/1122386515734048849/1176337574294458399/Captura_de_pantalla_2023-11-20_203606.png?ex=656e80bd&is=655c0bbd&hm=21fbea7c3d2f7de59fea9f5f88a1505a4e4dbc0f7dabf4cf11dae6cd845c56a5&"
  @Input() vendedor:string= "River Tecnology";
  @Input() precio:string= "$1.139.900";
  @Input() descuento:string= "$1.139.900";
  @Input() porcentajeDescuento:string= "-26%";
  @Input() badgeInfo:string= "badge text-bg-secondary";
  @Input() badgeInfoTwo:string= "badge text-bg-dark ms-1";
}
