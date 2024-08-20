import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../Component/header/header.component";
import { CubComponent } from "../Component/cub/cub.component";
import { NotedetailComponent } from "../Component/notedetail/notedetail.component";
import { NoteComponent } from "../Page/note/note.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CubComponent, NotedetailComponent, NoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NoteHub';
}
