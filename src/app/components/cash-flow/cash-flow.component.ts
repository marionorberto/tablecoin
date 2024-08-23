import { Component } from '@angular/core';

import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-cash-flow',
  standalone: true,
  imports: [],
  templateUrl: './cash-flow.component.html',
  styleUrl: './cash-flow.component.css'
})
export class CashFlowComponent {

 chartCashFlow: any;

  createChart(){
    this.chartCashFlow = new Chart("chart-cash-flow",{
      type: 'doughnut',
      data: {
        labels: ['inflow','outflow'],
        datasets: [
          {
            label: "inflow",
            data: ['35', '75'],
            backgroundColor: ['#fdba74', '#f97316'],
            borderRadius: 5,
            circumference: 360,
            borderWidth: 3,
          }
        ]
      },
      options: {
          aspectRatio: 2.5,
      plugins: {
        legend: {
          display: false
        }
      }
     }
    });
  }

  ngOnInit() :void{
    this.createChart();
  }

}
