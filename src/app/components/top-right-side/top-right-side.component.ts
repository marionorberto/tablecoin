import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router' 
@Component({
  selector: 'app-top-right-side',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './top-right-side.component.html',
  styleUrl: './top-right-side.component.css'
})
export class TopRightSideComponent {

}
