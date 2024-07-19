import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RigthSideComponent } from './components/rigth-side/rigth-side.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LeftSideComponent,
    RigthSideComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tablecoin';
}
