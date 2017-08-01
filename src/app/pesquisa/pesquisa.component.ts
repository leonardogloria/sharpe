import { Component, OnInit,  OnDestroy } from '@angular/core';
import {Pesquisa} from '../model/pesquisa';
import {Http,Headers} from '@angular/http';
import {Router,ActivatedRoute} from '@angular/router'
import {PesquisaService} from '../pesquisa.service'

import 'rxjs/add/operator/map';

@Component({
  selector: 'pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit,  OnDestroy {
  pesquisa:Pesquisa = new Pesquisa()
  private _pesquisaService: PesquisaService
  private http:Http
  private _router : Router
  private _activatedRoute : ActivatedRoute
  private subscriber : any;

  
  url:string = 'https://nl99z4yial.execute-api.us-east-1.amazonaws.com/v1'
  constructor(_http:Http,_router : Router,_ar : ActivatedRoute,_pesquisaService : PesquisaService) {
    this.http = _http;
    this._router = _router;
    this._activatedRoute = _ar;
    this._pesquisaService = _pesquisaService;
    
   }

  ngOnInit() {
    let hash 
    this.subscriber = this._activatedRoute.params.subscribe(params => {
      hash = params['hash']
    });
   
    if(hash === null){
       this._router.navigate(['/erro']);

    }else{
        let urlGet =  this.url+'/pesquisa/' + hash
        let contador
         this._pesquisaService.getPesquisa(hash).then(pesquisa =>{ this.pesquisa = pesquisa
            if(pesquisa === null) {
               this._router.navigate(['/erro']);
            }
          });
        
    }
        
  }
 
  enviaPesquisa(event){
   
    event.preventDefault();
   
    let urlPut = this.url + '/pesquisa/' + this.pesquisa.hash
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.put(urlPut,JSON.stringify(this.pesquisa),{headers:headers})
    .subscribe(() => {
      
      this._router.navigate(['/sucesso']);
    },erro => {
      console.log('Erro ' + erro)
    })
    
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
