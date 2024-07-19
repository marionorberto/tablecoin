import { Component } from '@angular/core';
import { LeftSideOptionComponent } from '../left-side-option/left-side-option.component';
import { ProfileImageComponent } from "../profile-image/profile-image.component";

@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [
    LeftSideOptionComponent,
    ProfileImageComponent
],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.css'
})
export class LeftSideComponent {

}
