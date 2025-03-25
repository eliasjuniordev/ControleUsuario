import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { UsuarioListar } from '../../Models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from'@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao:string = 'Cadastrar';
  descricaoTitulo:string = 'Cadastrar Usuário';

  constructor(private usuarioService:UsuarioService,private router:Router) { }

  criarUsuario(usuario:UsuarioListar){
     this.usuarioService.CriarUsuario(usuario).subscribe((response)=>{
     this.router.navigate(['/']);
     });
  }
}
