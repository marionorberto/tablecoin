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

 public chart: any;

  createChart(){
    this.chart = new Chart("grafico1",{
      type: 'bar',
      data: {
        labels: ['2010-01-23','2011-11-01','2012-05-18','2013-09-13'],
        datasets: [
          {
            label: "sales",
            data: ['344', '544', '90', '88'],
            backgroundColor: 'blue'
          },
          {
            label: 'profit',
            data: ['465','576','344','555'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  ngOnInit() :void{
    this.createChart();
  }

}
