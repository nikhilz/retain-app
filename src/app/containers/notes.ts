

import { Component } from "@angular/core";

@Component({
    selector:'notes-container',
    styles: [`
    .notes {
     padding-top: 50px;
     
    }
    .creator {
        margin-bottom: 40px; 
    }
    `],
    template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"  
            *ngFor="let note of notes; let i= index"    
            (checked)="onNoteChecked(i)" 
          >
          </note-card>
        </div>
      </div>
    </div>
    `
})

export class NotesContainer 
{
    notes=[
      {
        title: 'this is a note', 
        value: 'party baki ahe nishan chi ',
        color: 'lightgreen'
      },
      {
        title: 'this is second note', 
        value: 'Angular2 is like a cake walk ',
        color: 'lightpink'
      },
      {
        title: 'chores', 
        value: 'never say never ',
        color: 'aqua'
      }
    ]

    onNoteChecked(i:number){
      this.notes.splice(i,1);
    }

    onCreateNote(note){ 
      this.notes.push(note);
    }
} 