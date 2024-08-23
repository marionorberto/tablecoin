import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RigthSideComponent } from './components/rigth-side/rigth-side.component';
import { TopRightSideComponent } from "./components/top-right-side/top-right-side.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LeftSideComponent,
    RigthSideComponent,
    RouterLink,
    TopRightSideComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tablecoin';
}
