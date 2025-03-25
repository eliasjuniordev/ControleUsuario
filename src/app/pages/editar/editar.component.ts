import { Component,OnInit } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'express';
import { UsuarioListar } from '../../Models/Usuario';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editar',
  imports: [FormularioComponent,CommonModule],
  standalone: true, 
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})

export class EditarComponent implements OnInit {

  btnAcao:string = 'Editar';
  descricaoTitulo:string = 'Editar Usuário';
  usuario!:UsuarioListar;
  
  constructor(private usuarioService:UsuarioService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){

    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.usuarioService.GetUsuarioId(id).subscribe(response=>  {
    this.usuario = response.dados;
    });
    
  }

  editarUsuario(usuario:UsuarioListar){
    this.usuarioService.editarUsuario(usuario).subscribe(response=>{
        this.router.navigate(['/']);
    });
  }
}
