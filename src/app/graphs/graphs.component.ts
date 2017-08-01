import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  public doughnutChartLabels:string[] = ['Ótimo', 'Bom', 'Regular','Ruim'];
  public doughnutChartData:number[] = [20, 57,20,3 ];
  public doughnutChartType:string = 'doughnut';

  public barChartLabels:string[] = ['Java Básico', 'PHP', 'Android', 'Grails'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

   public barChartData:any[] = [
    {data: [65, 59, 80, 81], label: 'Series A'},
  ];

  public radarChartLabels:string[] = ['Programação', 'AWS', 'Infra', 'Inovação'];
  public radarChartData:any = [
    {data: [30, 10, 30, 22], label: 'Niterói'},
    {data: [28, 40, 10, 19], label: 'Rio de Janeiro'}
  ];
  public radarChartType:string = 'radar';


  constructor() { }

  ngOnInit() {
    
  }
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

}
