import { Component, input, OnInit } from '@angular/core';
import { noteservice } from '../../Service/note.service';
import { HeaderService } from '../../Service/header.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  noteId: number | undefined; // Variável para armazenar o ID da nota

  constructor(
    private note: noteservice,
    private header: HeaderService,
    private route: ActivatedRoute,
    private router: Router // Injetar o Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.noteId = +params['id']; // Converte para número
      this.TitleNoteMsg = this.note.GetTitle(this.noteId) 
    });
  }

  AddNote() {
    const GetNote = this.note.GetNotes();
    const Ids = GetNote.map(note => note.id);
    const Id1 = Ids.length > 0 ? Math.max(...Ids) + 1 : 1;
    const NoteNew = { id: Id1, title: "New note", content: "Hello!" };

    this.note.AddNote(NoteNew);
  }

  DeleteNote() {
    if (this.noteId) { // Verifica se noteId está definido
      this.note.DeletNote(this.noteId); // Usa o ID da URL
      this.router.navigate(['/']); // Navega para a tela inicial após deletar
      this.header.AlterHeader()
      this.header.AlterButtonSearch();
      console.log(this.note.GetNotes())
    } else {
      console.error('ID da nota não encontrado na URL');
    }
  }

  GetHeader(): boolean {
    return this.header.GetHeader();
  }

  ButtonSearch() {
    return this.header.GetButtonSearch();
  }

  BackButton() {
    this.header.AlterButtonSearch();
    this.header.AlterHeader();
    this.router.navigate(['/']);
  }

  TitleNoteMsg: string = ""

  oninput() {
    if (this.noteId) {
      this.note.AlterTitle(this.TitleNoteMsg, this.noteId)
    } else {
      console.log("[ERRO]: Id da nota não foi capturado!")
    }
  }
}
