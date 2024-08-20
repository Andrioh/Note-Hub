import { Injectable } from '@angular/core';
import { setActiveConsumer } from '@angular/core/primitives/signals';
import { NumberValueAccessor } from '@angular/forms';

interface Note {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class noteservice {

  private notes: Note[] = [];
  TitleNote: string | undefined;
  ContentNote: string | undefined;
  IdNoteDetail: number | undefined;

  ConverteLocal() {
    const SavedNotes = localStorage.getItem("Notes");
    return SavedNotes ? JSON.parse(SavedNotes) : []
  }

  GetNotes() {
    this.notes = this.ConverteLocal()
    return this.notes
  }

  AddNote(Note: Note) {
    this.notes.push(Note)
    localStorage.setItem("Notes", JSON.stringify(this.notes))
  }

  DeletNote(id: number): void {
    this.notes = this.GetNotes()
    this.notes = this.notes.filter(notes => notes.id !== id)
    localStorage.setItem("Notes", JSON.stringify(this.notes))
  }

  HasNote(): boolean {
    this.GetNotes()
    return this.notes.some(notes => notes.id > 0)
  }

  GetNoteById(id: number) {
    return this.notes.find(note => note.id === id);
  }

  AlterTitle(Title: string, Id: number) {
    this.TitleNote = Title
    this.IdNoteDetail = Id

    if (this.notes && this.IdNoteDetail) {
      const SearchId = this.notes.find((note: Note) => note.id === this.IdNoteDetail)
      if (SearchId) {
        SearchId.title = this.TitleNote
        localStorage.setItem("Notes", JSON.stringify(this.notes))
      }
    } else (
      console.log("[ERRO]: Id service não encontrado!")
    )
  }

  GetTitle(Id: number): string {
    if (this.notes) {
      const SearchId = this.notes.find((note: Note) => note.id === Id)
      if (SearchId) {
        return SearchId.title
      }
    }
    return "";
  }

  AlterContent(Content: string, Id: number) {
    this.ContentNote = Content
    this.IdNoteDetail = Id
    if (this.notes) {
      const SearchId = this.notes.find((note: Note) => note.id === Id)
      if (SearchId){
        SearchId.content = Content
        localStorage.setItem("Notes", JSON.stringify(this.notes))
      }
    }
  }

  GetContent(Id: number): string {
    if (this.notes){
      const SearchId = this.notes.find((note: Note) => note.id === Id)
      if (SearchId){
        return SearchId.content
      }
    }
    return "";
  }
}
