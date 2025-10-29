import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../models/PaginacionDTO';
import { Observable } from 'rxjs';
import { PagedResponse } from '../models/PagedResponse';
import { TipoOperacionCreacionDTO, TipoOperacionDTO } from '../models/TipoOperacion';
import { construirQueryParams } from '../compartidos/funciones/construirQueryParams';

@Injectable({
  providedIn: 'root'
})
export class TipoOperacionService {

  private http = inject(HttpClient);
  private urlBase = environment.apiURL;

  constructor() { }

  public obtenerTodos(paginacion: PaginacionDTO): Observable<PagedResponse<TipoOperacionDTO>>{
    let queryParams = construirQueryParams(paginacion);

    return this.http.get<PagedResponse<TipoOperacionDTO>>(this.urlBase, {params: queryParams});
  }

  public obtenerAllSinPaginar(): Observable<TipoOperacionDTO[]>{
    return this.http.get<TipoOperacionDTO[]>(this.urlBase+"/getAllTiposOperaciones");
  }

  public obtenerPorId(id: number): Observable<TipoOperacionDTO>{
    return this.http.get<TipoOperacionDTO>(`${this.urlBase}/${id}`);
  }

  public actualizar(id: number, to: TipoOperacionCreacionDTO){
    return this.http.put(`${this.urlBase}/${id}`, to);
  }

  public crear(to: TipoOperacionCreacionDTO){
    return this.http.post(this.urlBase, to);
  }

  public borrar(id: number){
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
