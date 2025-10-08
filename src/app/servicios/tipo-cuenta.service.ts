import { inject, Injectable } from '@angular/core';
import { TipoCuentaCreacionDTO, TipoCuentaDTO } from '../models/TipoCuenta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../models/PaginacionDTO';
import { construirQueryParams } from '../compartidos/funciones/construirQueryParams';
import { PagedResponse } from '../models/PagedResponse';

@Injectable({
  providedIn: 'root'
})
export class TipoCuentaService {

  private http = inject(HttpClient);
  private urlBase = environment.apiURL + "/tipoCuenta";

  constructor() { }

  public obtenerTodos(paginacion: PaginacionDTO): Observable<PagedResponse<TipoCuentaDTO>>{ //se injectara con tipoCuentServides = inject(TipoCuentaService);
    let queryParams = construirQueryParams(paginacion);
    return this.http.get<PagedResponse<TipoCuentaDTO>>(this.urlBase, {params: queryParams});
  }

  public crear(tipoCuenta: TipoCuentaCreacionDTO){
    return this.http.post(this.urlBase, tipoCuenta);
  }
}
