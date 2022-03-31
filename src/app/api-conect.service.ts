import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { Calculo } from 'src/Models/Calculo.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiConectService {
  constructor(private httpClient: HttpClient) {}

  Calcular(calculo: Calculo): Observable<any> {
    return this.httpClient.post<any>(`${API_PATH}Calcular`, calculo);
  }

  GetPessoa(id: Number): Observable<any> {
    return this.httpClient.get<any>(`${API_PATH}Pessoa/` + id);
  }
}
