import {RouterModule, Routes} from '@angular/router'
<<<<<<< HEAD
import {PesquisaComponent} from './pesquisa/pesquisa.component'
import {ErrorComponent} from './error/error.component'
import {SucessoComponent} from './sucesso/sucesso.component'
import {PesquisaDetailResolver} from './pesquisa.resolver.service'

const appRoutes: Routes = [
    {path: 'pesquisa/:hash',component:PesquisaComponent,
        resolve: {
              pesquisa: PesquisaDetailResolver
            }
},
    {path: 'not-found',component:ErrorComponent},
    {path: 'sucesso',component:SucessoComponent},
    {path: '**', redirectTo: 'not-found'}
];
export const routing = RouterModule.forRoot(appRoutes,{ useHash: true });

    

=======
import {TurmasComponent} from './turmas/turmas.component'
import {GraphsComponent} from './graphs/graphs.component'
const appRoutes: Routes = [
  { path: 'turmas', component: TurmasComponent },
  { path: 'statics', component:GraphsComponent},
  { path: '',   redirectTo: '/statics', pathMatch: 'full' },
  
];
export const routing = RouterModule.forRoot(appRoutes,{ useHash: true });
>>>>>>> 88a8a9259181bc01636c17edc0c625f7fdd88648
