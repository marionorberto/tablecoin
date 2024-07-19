import { Component } from '@angular/core';
import { TopRightSideComponent } from '../top-right-side/top-right-side.component';
import { BottomRightSideComponent } from "../bottom-right-side/bottom-right-side.component";

@Component({
  selector: 'app-rigth-side',
  standalone: true,
  imports: [
    TopRightSideComponent,
    BottomRightSideComponent
],
  templateUrl: './rigth-side.component.html',
  styleUrl: './rigth-side.component.css'
})
export class RigthSideComponent {

}
