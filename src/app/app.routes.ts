import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../Page/index/index.component';
import { NoteComponent } from '../Page/note/note.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'note/:id', component: NoteComponent }, // Rota para nota com parâmetro
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
