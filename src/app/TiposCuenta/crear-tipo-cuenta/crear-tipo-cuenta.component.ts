import { Component, inject } from '@angular/core';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { FormularioTipoCuentaComponent } from "../formulario-tipo-cuenta/formulario-tipo-cuenta.component";
import { TipoCuentaCreacionDTO } from '../../models/TipoCuenta';
import { Router } from '@angular/router';
import { TipoCuentaService } from '../../servicios/tipo-cuenta.service';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';


@Component({
  selector: 'app-crear-tipo-cuenta',
  imports: [MostrarErroresComponent, FormularioTipoCuentaComponent],
  templateUrl: './crear-tipo-cuenta.component.html',
  styleUrl: './crear-tipo-cuenta.component.css'
})
export class CrearTipoCuentaComponent {

  private router = inject(Router);
  private tipoCuentaService = inject(TipoCuentaService);
  errores: string[] = [];

  

  guardarCambios( tipoCuenta: TipoCuentaCreacionDTO)
  {
    this.tipoCuentaService.crear(tipoCuenta).subscribe({
      next: () => {
        this.router.navigate(['/lista-tipoCuenta']);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });
  }
}
