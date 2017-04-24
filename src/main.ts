import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App } from './app/app'
import {Main} from './app/containers/main'
import { } from './app'
import { AppBar } from "./app/ui/app-bar";
import { NoteCard } from "./app/ui/note-card";
import { NotesContainer } from "./app/containers/notes";
import { NoteCreator } from "./app/ui/note-creator";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        App,
        Main,
        AppBar,
        NoteCard,
        NotesContainer,
        NoteCreator    

    ],
    imports:[BrowserModule, FormsModule],
    bootstrap:[App]
    
})

export class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule);