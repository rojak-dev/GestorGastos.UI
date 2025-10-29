import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../models/PaginacionDTO';
import { Observable } from 'rxjs';
import { PagedResponse } from '../models/PagedResponse';
import { TransaccionCreacionDTO, TransaccionDTO } from '../models/Transaccion';
import { construirQueryParams } from '../compartidos/funciones/construirQueryParams';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  private http = inject(HttpClient);
  private urlBase = environment +"/Transaccion";

  constructor() { }

  public obtenerTodos(paginacion: PaginacionDTO): Observable<PagedResponse<TransaccionDTO>>{
    let queryParams = construirQueryParams(paginacion);

    return this.http.get<PagedResponse<TransaccionDTO>>(this.urlBase, {params: queryParams});
  }

  public obtenerAllSinPaginar(): Observable<TransaccionDTO[]>{
    return this.http.get<TransaccionDTO[]>(this.urlBase+"/getAllTransacciones");
  }

  public obtenerPorId(id: number): Observable<TransaccionDTO>{
    return this.http.get<TransaccionDTO>(`${this.urlBase}/${id}`);
  }

  public actualizar(id: number, transaccion: TransaccionCreacionDTO){
    return this.http.put(`${this.urlBase}/${id}`, transaccion);
  }

  public crear(transaccion: TransaccionCreacionDTO){
    return this.http.post(this.urlBase, transaccion);
  }

  public borrar(id: number){
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
