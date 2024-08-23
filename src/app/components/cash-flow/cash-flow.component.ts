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
 chartByCategory: any;

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
      this.chartCashFlow = new Chart("chart-by-source",{
      type: 'bar',
      data: {
        labels: ['Freelance', 'Job', 'Youtube', 'Paid traffic', 'Ads', 'Bussiness'],
        datasets: [
          {
            label: "inflow",
            data: ['25', '25', '30', '45', '60', '75' ],
            backgroundColor: ['#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c'],
            borderRadius: 5,
            barPercentage: 0.6
          },
          {
            label: "outflow",
            data: ['20', '35', '50', '70', '80', '90' ],
            backgroundColor: ['#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46' ],
            borderRadius: 5,
            barPercentage: 0.6
          }
        ]
      },
       options: {
        aspectRatio: 2.5,
        scales: {
       x: {
        grid: {
          display: false
    }},  y: {
        grid: {
          display: false
    }}
     },
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
