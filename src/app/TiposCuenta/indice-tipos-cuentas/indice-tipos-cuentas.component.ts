import { Component, inject } from '@angular/core';
import { TipoCuentaService } from '../../servicios/tipo-cuenta.service';
import { TipoCuentaDTO } from '../../models/TipoCuenta';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { PaginacionDTO } from '../../models/PaginacionDTO';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-tipos-cuentas',
  imports: [RouterLink, MatButtonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './indice-tipos-cuentas.component.html',
  styleUrl: './indice-tipos-cuentas.component.css'
})
export class IndiceTiposCuentasComponent {
  tipocuentaService = inject(TipoCuentaService);
  listadoTipoCuenta!: TipoCuentaDTO[];
  columnasAMostrar = ['id', 'nombre', 'orden', 'acciones'];
  paginacionDTO: PaginacionDTO = {
    pagina: 1,
    recordsPorPagina: 10
  };
  
  total = 0;

  constructor(){
    this.cargarRegistros();
  }

  cargarRegistros()
  {
    this.tipocuentaService.obtenerTodos(this.paginacionDTO).subscribe({
      next: (respuesta) =>{
        this.listadoTipoCuenta = respuesta.items;
        this.total = respuesta.total;
      },
      error: (err) => console.error('Error al obtener tipos cuentas', err)
    });
  }

  cambiarPagina(event: any){
    this.paginacionDTO.pagina = event.pageIndex +1;
    this.paginacionDTO.recordsPorPagina = event.pageSize;

    this.cargarRegistros();
  }
}
