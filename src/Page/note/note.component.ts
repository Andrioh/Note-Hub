import { Component } from '@angular/core';
import { HeaderComponent } from "../../Component/header/header.component";
import { NotedetailComponent } from "../../Component/notedetail/notedetail.component";

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [HeaderComponent, NotedetailComponent],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {

}
