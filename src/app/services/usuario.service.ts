import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UsuarioListar } from '../Models/Usuario';
import { Response } from '../Models/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  ApiUrl = environment.UrlApi; 
  constructor(private http : HttpClient ) { }


   GetUsuarios():Observable<Response<UsuarioListar[]>>{ 
     return this.http.get<Response<UsuarioListar[]>>(this.ApiUrl);
   }

   DeletarUsuario(id:number|undefined):Observable<Response<UsuarioListar[]>>{
     return this.http.delete<Response<UsuarioListar[]>>(`${this.ApiUrl}?usuarioId=${id}`);
   }

}
