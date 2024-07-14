import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/Usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  form: FormGroup; // Declare form como um FormGroup
  formTitle: string;
  usuarios: Usuario[];
  nome: string;
  id: number;
  modalRef: BsModalRef;


  //variáveis de controle

  visibilidadeTabela: boolean = true;
  visibilidadeForm: boolean = false;



  constructor(private usuariosService: UsuariosService, private modalService: BsModalService) { }

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

  ShowFormUpdate(id: number): void {

    this.visibilidadeTabela = false;
    this.visibilidadeForm = true;

    this.usuariosService.GetByID(id).subscribe(result => {
      this.formTitle = `Atualizar ${result.nome}`;
      let dataNascimentoDate = new Date(result.dataNascimento);
      let formattedDate = `${dataNascimentoDate.getFullYear()}-${('0' + (dataNascimentoDate.getMonth() + 1)).slice(-2)}-${('0' + dataNascimentoDate.getDate()).slice(-2)}`;
      this.form = new FormGroup({
        id: new FormControl(result.id),
        nome: new FormControl(result.nome),
        email: new FormControl(result.email),
        senha: new FormControl(result.senha),
        dataNascimento: new FormControl(formattedDate)
      });
    })
  }

  Back(): void {
    this.visibilidadeTabela = true;
    this.visibilidadeForm = false;
  }

  salvarFormulario() {

    const usuario: Usuario = this.form.value;

    if (usuario.id > 0) {
      this.usuariosService.UpdateUsuario(usuario).subscribe(
        (response: any) => {

          if (response && typeof response === 'object') {
            console.log('Resposta do servidor:', response);

            alert(response.mensagem);
          } else {
            console.error('Resposta do servidor não é um JSON válido:', response);
            alert('Erro ao atualizar usuário. Resposta inválida do servidor.');
          }
          this.visibilidadeForm = false;
          this.visibilidadeTabela = true;
          this.usuariosService.GetAll().subscribe(result => {
            this.usuarios = result;
          });
        },
        (error: any) => {
          console.error('Erro ao atualizar usuário:', error);
          alert('Erro ao atualizar usuário. Verifique o console para mais detalhes.');
        }
      );
    }
    else {
      this.usuariosService.CreateUsuario(usuario).subscribe(resultado => {
        this.visibilidadeForm = false;
        this.visibilidadeTabela = true;

        alert("Usuario Cadastrado com Sucesso!");
        this.usuariosService.GetAll().subscribe(result => {
          this.usuarios = result;
        })
      })
    }
  }

  ShowDelete(id: number, nome: string, modelContent: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(modelContent);
    this.id = id;
    this.nome = nome;
  }

  DeleteUser(id: number){
    this.usuariosService.DeleteUsuario(id).subscribe(result =>{
      this.modalRef.hide();
      alert(result.mensagem);
      this.usuariosService.GetAll().subscribe(reg =>{
        this.usuarios = reg;
      });
    });
  }
}