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

  constructor() {
    this.canAddServer = false;
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

}
