import { Component } from '@angular/core';
import { HeaderComponent } from "../../Component/header/header.component";
import { CubComponent } from "../../Component/cub/cub.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, CubComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
