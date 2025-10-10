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

  public obtenerPorId(id: number): Observable<TipoCuentaDTO>{
    return this.http.get<TipoCuentaDTO>(`${this.urlBase}/${id}`);
  }

  public actualizar(id: number, tipocuenta: TipoCuentaCreacionDTO){
    return this.http.put(`${this.urlBase}/${id}`, tipocuenta);
  }

  public crear(tipoCuenta: TipoCuentaCreacionDTO){
    return this.http.post(this.urlBase, tipoCuenta);
  }

  public borrar(id: number){
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
