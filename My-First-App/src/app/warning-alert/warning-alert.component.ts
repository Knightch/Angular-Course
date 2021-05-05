import { Component } from "@angular/core";

@Component({
    selector:'app-warning-alert',
    template:`
    <p>This is a warning, you are in a danger!</p>
    `,
    styles:[
        `
        p {
            padding: 20px;
            background-color: lightcoral;
            border: 1px solid red;
        }
        `
    ]
})

export class WarningAlertComponent{}