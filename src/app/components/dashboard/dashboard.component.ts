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
    // this.chart1.legend.legendItems[0].text = '';
    // this.chart1.legend.legendItems[1].text = '';
    this.createChart();
  }

//   const config = {
//   type: 'bar',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Floating Bar Chart'
//       }
//     }
//   }
// };

  createChart(){
    this.chart1 = new Chart('cash-flow', {
      type: 'line',
      data: {
        labels: ['January','February','March', 'May', 'April', 'June'],
        datasets: [
          {
            label: 'Incomes',
            data: ['400', '700', '2500', '300', '3500', '1000'],
            backgroundColor: '#fef9c3',
            borderColor: '#DAA520',
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
          {
            label: 'Expenses',
            data: ['500','1000','1500','3000','3000','3000' ],
            backgroundColor: '#cbd5e1',
            borderColor: '#475569',
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



// const config = {
//   type: 'line',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: 'Chart.js Line Chart'
//       },
//     },
//     interaction: {
//       mode: 'index',
//       intersect: false
//     },
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: 'Month'
//         }
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: 'Value'
//         }
//       }
//     }
//   },
// };
