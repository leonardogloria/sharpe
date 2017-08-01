import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import {PesquisaService} from './pesquisa.service'
import {Pesquisa} from './model/pesquisa'

@Injectable()
export class PesquisaDetailResolver implements Resolve<Pesquisa> {
  constructor(private ps: PesquisaService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Pesquisa> {
    let hash = route.params['hash'];
    return this.ps.getPesquisa(hash).then(pesquisa => {
      if (pesquisa  && pesquisa.ativo) {
        return pesquisa;
      } else { // id not found
        this.router.navigate(['/not-found']);
        return null;
      }
    });
  }
}