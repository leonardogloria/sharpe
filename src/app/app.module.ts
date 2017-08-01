import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import {PesquisaService} from './pesquisa.service'
import {PesquisaDetailResolver} from './pesquisa.resolver.service'


import { AppComponent } from './app.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import {routing} from './app.routes';
import { ErrorComponent } from './error/error.component';
import { SucessoComponent } from './sucesso/sucesso.component'
@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    ErrorComponent,
    SucessoComponent
=======
import { RouterModule, Routes } from '@angular/router';

import {routing} from './app.routes'

import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { TurmasComponent } from './turmas/turmas.component';
import { GraphsComponent } from './graphs/graphs.component';
import { TurmaDetailComponent } from './turma-detail/turma-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuLateralComponent,
    TurmasComponent,
    GraphsComponent,
    TurmaDetailComponent
>>>>>>> 88a8a9259181bc01636c17edc0c625f7fdd88648
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    routing
  ],
  providers: [PesquisaService,PesquisaDetailResolver],
=======
    ChartsModule,
    routing
  ],
  providers: [],
>>>>>>> 88a8a9259181bc01636c17edc0c625f7fdd88648
  bootstrap: [AppComponent]
})
export class AppModule { }
