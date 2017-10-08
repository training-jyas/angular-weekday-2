import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Array<{'type': string, 'name': string, 'content': string}> = [];

  constructor() {
    // this.serverElements.push({
    //   'type': 'server',
    //   'name': 'Server 1',
    //   'content': 'content for server 1'
    // });
    // this.serverElements.push({
    //   'type': 'blueprint',
    //   'name': 'blurprint 1',
    //   'content': 'content for blueprint 1'
    // });
  }

  onServerAdded(eventData: {'serverName': string, 'serverContent': string}) {
    this.serverElements.push({
      'type': 'server',
      'name': eventData.serverName,
      'content': eventData.serverContent
    });
  }

  onBlueprintAdded(eventData: {'serverName': string, 'serverContent': string}) {
    this.serverElements.push({
      'type': 'blueprint',
      'name': eventData.serverName,
      'content': eventData.serverContent
    });
  }
}
