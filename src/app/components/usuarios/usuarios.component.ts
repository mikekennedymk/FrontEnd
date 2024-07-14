import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/Usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  form: FormGroup; // Declare form como um FormGroup
  formTitle: string;
  usuarios: Usuario[];

  //variáveis de controle

  visibilidadeTabela: boolean = true;
  visibilidadeForm: boolean = false;



  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {

    this.usuariosService.GetAll().subscribe(resultado => {
      this.usuarios = resultado;
    })

  }


  ShowForm(): void {

    this.visibilidadeTabela = false;
    this.visibilidadeForm = true;

    this.formTitle = 'Novo Usuário';
    this.form = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      senha: new FormControl(null),
      dataNascimento: new FormControl(null)
    });

  }

  Back(): void {
    this.visibilidadeTabela = true;
    this.visibilidadeForm = false;
  }

  salvarFormulario() {

    const usuario : Usuario = this.form.value;

    this.usuariosService.CreateUsuario(usuario).subscribe(resultado => {
      this.visibilidadeForm = false;
      this.visibilidadeTabela = true;

      alert("Usuario Cadastrado com Sucesso!");
      this.usuariosService.GetAll().subscribe(result => {
        this.usuarios = result;
      })
    })
    // if (this.form.valid) {
    //   // Lógica para salvar os dados aqui
    //   console.log(this.form.value);
    // } else {
    //   // Tratar formulário inválido, se necessário
    // }
  }

  // Outros métodos e propriedades do componente

}