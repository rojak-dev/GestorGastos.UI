import { Component, inject } from '@angular/core';
import { FormularioCuentaComponent } from "../formulario-cuenta/formulario-cuenta.component";
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { Router } from '@angular/router';
import { CuentaService } from '../../servicios/cuenta.service';
import { CuentaCreacionDTO } from '../../models/Cuenta';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';

@Component({
  selector: 'app-crear-cuenta',
  imports: [FormularioCuentaComponent, MostrarErroresComponent],
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent {
  private router = inject(Router);
  private cuentaService = inject(CuentaService);
  errores: string[] = [];

  guardarCambios(cuenta: CuentaCreacionDTO)
  {
    this.cuentaService.crear(cuenta).subscribe({
      next: () => {
        this.router.navigate(['/cuentas']);
      },
      error: err =>{
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });
  }
  
}
