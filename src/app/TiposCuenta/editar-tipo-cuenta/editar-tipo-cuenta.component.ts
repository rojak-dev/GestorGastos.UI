import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { TipoCuentaCreacionDTO, TipoCuentaDTO } from '../../models/TipoCuenta';
import { TipoCuentaService } from '../../servicios/tipo-cuenta.service';
import { FormularioTipoCuentaComponent } from '../formulario-tipo-cuenta/formulario-tipo-cuenta.component';
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';

@Component({
  selector: 'app-editar-tipo-cuenta',
  imports: [FormularioTipoCuentaComponent, CargandoComponent, MostrarErroresComponent],
  templateUrl: './editar-tipo-cuenta.component.html',
  styleUrl: './editar-tipo-cuenta.component.css'
})
export class EditarTipoCuentaComponent implements OnInit {
  
  //Recibimos y leemos la variable de ruta conm una funcion transformadora para que se vuelva un numero
  @Input({transform: numberAttribute}) id!: number;

  // ? indica que sera definido nulo o indefinido
  tipoCuenta?: TipoCuentaDTO
  tipoCuentaService = inject(TipoCuentaService);
  errores: string[] =[];
  router = inject(Router);

  ngOnInit(): void {
    this.tipoCuentaService.obtenerPorId(this.id).subscribe(tc =>{
      this.tipoCuenta = tc;
    });
  }

  guardarCambios(tipoCuenta: TipoCuentaCreacionDTO){
    this.tipoCuentaService.actualizar(this.id, tipoCuenta).subscribe({
      next: () =>{
        this.router.navigate(['/tipoCuenta']);
      },
      error: err =>{
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    })
  }
}
