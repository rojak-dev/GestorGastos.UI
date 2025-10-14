import { Component, Input, numberAttribute } from '@angular/core';
import { CuentaDTO } from '../../models/Cuenta';
import { FormularioCuentaComponent } from "../formulario-cuenta/formulario-cuenta.component";

@Component({
  selector: 'app-editar-cuenta',
  imports: [FormularioCuentaComponent],
  templateUrl: './editar-cuenta.component.html',
  styleUrl: './editar-cuenta.component.css'
})
export class EditarCuentaComponent {
  @Input({transform: numberAttribute})id!: number;

  cuenta: CuentaDTO = {id: 1, nombre: 'cuenta extra', tipoCuentaId: 1, balance: 22.5, descripcion: ''}
}
