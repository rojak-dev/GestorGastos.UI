import { inject, Injectable } from '@angular/core';
import { TipoCuentaDTO } from '../models/TipoCuenta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TipoCuentaService {

  private http = inject(HttpClient);
  private urlBase = environment.apiURL + "tipoCuenta";

  constructor() { }

  public obtenerTodos(): Observable<TipoCuentaDTO[]>{ //se injectara con tipoCuentServides = inject(TipoCuentaService);
    return this.http.get<TipoCuentaDTO[]>(this.urlBase);
  }
}
