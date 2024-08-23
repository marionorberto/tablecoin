import { Component } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  chart1: any;


  ngOnInit(){
    this.createChart();
  }

  createChart(){
    this.chart1 = new Chart('cash-flow', {
      type: 'line',
      data: {
        labels: ['January','February','March', 'May', 'April', 'June'],
        datasets: [
          {
            label: 'Incomes',
            data: ['400', '700', '2500', '300', '3500', '1000'],
            backgroundColor: '#fed7aa',
            borderColor: '#f97316',
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
          {
            label: 'Expenses',
            data: ['500','1000','1500','3000','3000','3000' ],
            backgroundColor: '#d4d4d4 ',
            borderColor: '#525252',
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            fill: true,
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

}

