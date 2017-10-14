import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  serverElements: Array<{'type': string, 'name': string, 'content': string}> = [];
  
  constructor() {
    this.serverElements.push({
      'type': 'server',
      'name': 'Server 1',
      'content': 'content for server 1'
    });
    this.serverElements.push({
      'type': 'blueprint',
      'name': 'blurprint 1',
      'content': 'content for blueprint 1'
    });
  }

  ngOnInit() {
    
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

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

}
