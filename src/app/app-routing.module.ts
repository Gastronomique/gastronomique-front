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
