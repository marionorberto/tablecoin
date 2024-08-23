import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {

  chartExpensesMonth: any;
  chartExpensesComparison: any;

  constructor(){
    this.createCharts();
  }

  createCharts(){
      this.chartExpensesMonth = new Chart('chart-expenses-month', {
      type: 'bar',
      data: {
        labels: ['February','March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'category',
            data: ['1500', '1300', '1200', '1600', '1000', '1400'],
            backgroundColor: ['#f97316','#fdba74', '#fb923c', '#fed7aa', '#c2410c', '#fed7aa'],
            borderRadius: 5,
            barPercentage: 0.3,
            borderColor: '#fef9c3',
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
       x: {
        grid: {
          display: false
    }},y: {
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

       this.chartExpensesComparison = new Chart('chart-expenses-comparison', {
      type: 'polarArea',
      data: {
        labels: ['salary','youtube','paid traffic', 'freelance'],
        datasets: [
          {
            label: 'source',
            data: ['1400', '1800', '1500', '1300'],
          //  backgroundColor: ['#f97316'],
           backgroundColor: ['#3C3D37', '#697565', '#ECDFCC', '#000'],
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
