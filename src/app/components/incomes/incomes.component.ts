import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-incomes',
  standalone: true,
  imports: [],
  templateUrl: './incomes.component.html',
  styleUrl: './incomes.component.css'
})
export class IncomesComponent {

  chartIncomeBySource: any;
  chartIncomeByCategory: any;
  chartIncomeTrends: any;


  ngOnInit(){
    this.createChart();
  }

  createChart(){
    this.chartIncomeBySource = new Chart('chart-income-by-source', {
      type: 'pie',
      data: {
        labels: ['January','February','March', 'May', 'April', 'June'],
        datasets: [
          {
            label: 'Incomes',
            data: ['400', '700', '2500', '300', '3500', '1000'],
            backgroundColor: '#fef9c3',
            borderColor: '#DAA520',
          },
          {
            label: 'Expenses',
            data: ['500','1000','1500','3000','3000','3000' ],
            backgroundColor: '#cbd5e1',
            borderColor: '#475569',
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

    this.chartIncomeByCategory = new Chart('chart-income-by-category', {
      type: 'bar',
      data: {
        labels: ['January','February','March', 'May', 'April', 'June'],
        datasets: [
          {
            label: 'Incomes',
            data: ['400', '700', '2500', '300', '3500', '1000'],
            backgroundColor: '#fef9c3',
            borderColor: '#DAA520',
          },
          {
            label: 'Expenses',
            data: ['500','1000','1500','3000','3000','3000' ],
            backgroundColor: '#cbd5e1',
            borderColor: '#475569',
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

    this.chartIncomeTrends = new Chart('chart-income-trends', {
      type: 'line',
      data: {
        labels: ['January','February','March', 'May', 'April', 'June'],
        datasets: [
          {
            label: 'Incomes',
            data: ['400', '700', '2500', '300', '3500', '1000'],
            backgroundColor: '#fef9c3',
            borderColor: '#DAA520',
          },
          {
            label: 'Expenses',
            data: ['500','1000','1500','3000','3000','3000' ],
            backgroundColor: '#cbd5e1',
            borderColor: '#475569',
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
