import { Disciplina } from "../disciplina/disciplina.model";
import { Laboratorio } from "../laboratorio/laboratorio.model";
import { Usuario } from "./usuario.model";

export class Aula {
    id?: String;
    descricao!: String;
    usuario!: Usuario;
    disciplina!: Disciplina;
    laboratorio!: Laboratorio;
    dataUtilizacao!: Date;
    valor!: Number;
  }
  