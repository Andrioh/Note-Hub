import { Component } from '@angular/core';
import { noteservice } from '../../Service/note.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderService } from '../../Service/header.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cub',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cub.component.html',
  styleUrls: ['./cub.component.css']
})
export class CubComponent {
  constructor(private note: noteservice, private router: Router, private header: HeaderService) {}

  HasNote: boolean | undefined;

  get notes() {
    return this.note.GetNotes();
  }

  hasnote(): boolean {
    this.HasNote = this.note.HasNote();
    return this.HasNote;
  }

  NoteDetail(id: number) {
    this.router.navigate(['/note', id]);
    this.header.AlterHeader()
    this.header.AlterButtonSearch();
  }

  truncateContent(content: string, maxLength: number): string {
    return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
  }
}
