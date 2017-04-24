import { Component } from '@angular/core'
import { Main } from "./containers/main";


@Component({
    selector:'app',
    template: `
        <div>
            <main-container></main-container>
        </div>
    `,
    providers: [Main]

})

export class App {
    
}