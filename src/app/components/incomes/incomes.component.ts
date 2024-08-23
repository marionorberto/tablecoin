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
      type: 'polarArea',
      data: {
        labels: ['salary','youtube','paid traffic', 'freelance'],
        datasets: [
          {
            label: 'source',
            data: ['1400', '1800', '1500', '1300'],
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

    this.chartIncomeByCategory = new Chart('chart-income-by-category', {
      type: 'bar',
      data: {
        labels: ['salary', 'freelance', 'bussines', 'debt'],
        datasets: [
          {
            label: 'category',
            data: ['1500', '1750', '1000', '1300'],
            backgroundColor: ['#525252', '#a3a3a3', '#737373', '#000'],
            borderColor: '#fef9c3',
            borderRadius: 5,
            barPercentage: 0.4
            
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
       x: {
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

    this.chartIncomeTrends = new Chart('chart-income-trends', {
      type: 'line',
      data: {
        labels: ['August', 'Setember', 'Outober', 'November', 'December'],
        datasets: [
          {
            label: 'Trends',
            data: ['10', '17', '20', '26', '30'],
            backgroundColor: '#fed7aa ',
            borderColor: '#f97316',
            fill: true
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
          scales: {
       x: {
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
}
