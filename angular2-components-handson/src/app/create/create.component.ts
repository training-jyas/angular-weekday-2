import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
    'selector': 'app-create',
    'templateUrl': './create.component.html',
    'styleUrls': ['./create.component.css']
})
export class CreateComponent {
    @Output() serverCreated = new EventEmitter<{'serverName': string, 'serverContent': string}>();
    @Output("bpCreated") blurprintCreated = new EventEmitter<{'serverName': string, 'serverContent': string}>();
    newServerName = '';
    newServerContent = '';

    constructor() {
        
    }

    onCreateServer() {
        this.serverCreated.emit({
            'serverName': this.newServerName,
            'serverContent': this.newServerContent
        });
    }

    onCreateBlueprint() {
        this.blurprintCreated.emit({
            'serverName': this.newServerName,
            'serverContent': this.newServerContent
        });
    }

    reset() {
        this.newServerName = '';
        this.newServerContent = '';
    }
}