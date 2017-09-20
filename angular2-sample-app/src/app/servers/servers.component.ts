import { setTimeout } from 'timers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  canAddServer: boolean;
  serverName: string;
  isServerAdded: boolean;
  servers: string[] = [];

  constructor() {
    this.serverName = 'server 1';
    this.canAddServer = false;
    this.isServerAdded = false;
    setTimeout(() => {
      this.canAddServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerNameChange(event) {
    console.log(event);
    this.serverName = event.target.value;
  }

  addServer() {
    this.isServerAdded = true;
    this.servers.push(this.serverName);
  }

}
