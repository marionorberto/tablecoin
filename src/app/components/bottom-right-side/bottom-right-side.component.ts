import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CashFlowComponent } from "../cash-flow/cash-flow.component";

@Component({
  selector: 'app-bottom-right-side',
  standalone: true,
  imports: [
    RouterOutlet,
    CashFlowComponent
],
  templateUrl: './bottom-right-side.component.html',
  styleUrl: './bottom-right-side.component.css'
})
export class BottomRightSideComponent {

}
