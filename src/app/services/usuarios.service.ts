import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'https://localhost:7262/api/Usuarios';

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  GetByID(id: number): Observable<Usuario> {
    const apiUrl = `${this.url}/${id}`;
    return this.http.get<Usuario>(apiUrl);
  }

  CreateUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<Usuario>(this.url, usuario, httpOptions);
  }

  UpdateUsuario(usuario: Usuario): Observable<any> {
    const apiUrl = `${this.url}/${usuario.id}`;
    return this.http.put<Usuario>(apiUrl, usuario, httpOptions);
  }

  DeleteUsuario(id: number): Observable<any> {
    const apiUrl = `${this.url}/${id}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}