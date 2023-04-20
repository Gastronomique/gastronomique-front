import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './security/home/home.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { ProfileComponent } from './security/profile/profile.component';
import { BoardAdminComponent } from './security/board-admin/board-admin.component';
import { BoardProfessorComponent } from './security/board-professor/board-professor.component';
import { InsumoCreateComponent } from './views/insumo/insumo-create/insumo-create.component';
import { InsumoListComponent } from './views/insumo/insumo-list/insumo-list.component';
import { InsumoDeleteComponent } from './views/insumo/insumo-delete/insumo-delete.component';
import { InsumoEditComponent } from './views/insumo/insumo-edit/insumo-edit.component';
import { LaboratorioCreateComponent } from './views/laboratorio/laboratorio-create/laboratorio-create.component';
import { LaboratorioListComponent } from './views/laboratorio/laboratorio-list/laboratorio-list.component';
import { LaboratorioDeleteComponent } from './views/laboratorio/laboratorio-delete/laboratorio-delete.component';
import { LaboratorioEditComponent } from './views/laboratorio/laboratorio-edit/laboratorio-edit.component';
import { CursoCreateComponent } from './views/curso/curso-create/curso-create.component';
import { CursoListComponent } from './views/curso/curso-list/curso-list.component';
import { CursoDeleteComponent } from './views/curso/curso-delete/curso-delete.component';
import { CursoEditComponent } from './views/curso/curso-edit/curso-edit.component';
import { DisciplinaListComponent } from './views/disciplina/disciplina-list/disciplina-list.component';
import { DisciplinaDeleteComponent } from './views/disciplina/disciplina-delete/disciplina-delete.component';
import { DisciplinaCreateComponent } from './views/disciplina/disciplina-create/disciplina-create.component';
import { DisciplinaEditComponent } from './views/disciplina/disciplina-edit/disciplina-edit.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'admin',
    component: BoardAdminComponent
  },
  {
    path: 'insumo/inserir',
    component: InsumoCreateComponent
  },
  {
    path: 'insumo/listagem',
    component: InsumoListComponent
  },
  {
    path: 'insumo/excluir/:id',
    component: InsumoDeleteComponent
  },
  {
    path: 'insumo/editar/:id',
    component: InsumoEditComponent
  },
  {
    path: 'laboratorio/inserir',
    component: LaboratorioCreateComponent
  },
  {
    path: 'laboratorio/listagem',
    component: LaboratorioListComponent
  },
  {
    path: 'laboratorio/excluir/:id',
    component: LaboratorioDeleteComponent
  },
  {
    path: 'laboratorio/editar/:id',
    component: LaboratorioEditComponent
  },
  {
    path: 'curso/inserir',
    component: CursoCreateComponent
  },
  {
    path: 'curso/listagem',
    component: CursoListComponent
  },
  {
    path: 'curso/excluir/:id',
    component: CursoDeleteComponent
  },
  {
    path: 'curso/editar/:id',
    component: CursoEditComponent
  },
  {
    path: 'disciplina/curso/:id',
    component: DisciplinaListComponent
  },
  {
    path: 'disciplina/inserir/:id',
    component: DisciplinaCreateComponent
  },
  {
    path: 'disciplina/excluir/:id',
    component: DisciplinaDeleteComponent
  },
  {
    path: 'disciplina/editar/:id',
    component: DisciplinaEditComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
