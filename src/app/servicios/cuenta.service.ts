import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../models/PaginacionDTO';
import { Observable } from 'rxjs';
import { PagedResponse } from '../models/PagedResponse';
import { CuentaCreacionDTO, CuentaDTO } from '../models/Cuenta';
import { construirQueryParams } from '../compartidos/funciones/construirQueryParams';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private http = inject(HttpClient);
  private urlBase = environment.apiURL + "/Cuenta";

  constructor() { }

  public obtenerTodos(paginacion: PaginacionDTO): Observable<PagedResponse<CuentaDTO>>{
    let queryParams = construirQueryParams(paginacion);
    return this.http.get<PagedResponse<CuentaDTO>>(this.urlBase, {params: queryParams});
  }

  public obtenerAllSinPaginar(): Observable<CuentaDTO[]>{
    return this.http.get<CuentaDTO[]>(this.urlBase+"/getAllCuentas");
  }

  public obtenerPorId(id: number): Observable<CuentaDTO>{
    return this.http.get<CuentaDTO>(`${this.urlBase}/${id}`);
  }

  public actualizar(id: number, cuenta: CuentaCreacionDTO){
    return this.http.put(`${this.urlBase}/${id}`, cuenta);
  }

  public crear(cuenta: CuentaCreacionDTO){
    return this.http.post(this.urlBase, cuenta);
  }

  public borrar(id: number){
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
