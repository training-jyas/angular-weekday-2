import { Component, ElementRef, EventEmitter, Output, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    'selector': 'app-create',
    'templateUrl': './create.component.html',
    'styleUrls': ['./create.component.css']
})
export class CreateComponent {
    @Output() serverCreated = new EventEmitter<{'serverName': string, 'serverContent': string}>();
    @Output("bpCreated") blurprintCreated = new EventEmitter<{'serverName': string, 'serverContent': string}>();

    @ViewChild('contentInput') contentInput: ElementRef;
    // newServerName = '';
    // newServerContent = '';

    constructor() {
        
    }

    onCreateServer(serverInput: HTMLInputElement) {
        this.serverCreated.emit({
            'serverName': serverInput.value,
            'serverContent': this.contentInput.nativeElement.value
        });
    }

    onCreateBlueprint(serverInput: HTMLInputElement) {
        this.blurprintCreated.emit({
            'serverName': serverInput.value,
            'serverContent': this.contentInput.nativeElement.value
        });
    }

    reset() {
        
    }
}