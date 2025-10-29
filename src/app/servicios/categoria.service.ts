import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../models/PaginacionDTO';
import { Observable } from 'rxjs';
import { PagedResponse } from '../models/PagedResponse';
import { CategoriaCreacionDTO, CategoriaDTO } from '../models/Categoria';
import { construirQueryParams } from '../compartidos/funciones/construirQueryParams';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private http = inject(HttpClient);
  private urlBase = environment.apiURL +"/Categoria";

  constructor() { }

  public obtenerTodos(paginacion: PaginacionDTO): Observable<PagedResponse<CategoriaDTO>>{
    let queryParams = construirQueryParams(paginacion);

    return this.http.get<PagedResponse<CategoriaDTO>>(this.urlBase, {params: queryParams});
  }

  public obtenerAllSinPaginar(): Observable<CategoriaDTO[]>{
    return this.http.get<CategoriaDTO[]>(this.urlBase+"/getAllCategorias");
  }

  public obtenerPorId(id: number): Observable<CategoriaDTO>{
    return this.http.get<CategoriaDTO>(`${this.urlBase}/${id}`);
  }

  public actualizar(id: number, categoria: CategoriaCreacionDTO){
    return this.http.put(`${this.urlBase}/${id}`, categoria);
  }

  public crear(categoria: CategoriaCreacionDTO){
    return this.http.post(this.urlBase, categoria);
  }

  public borrar(id: number)
  {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
