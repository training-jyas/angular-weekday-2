import { AccountService } from '../account.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountService: AccountService) {
    
  }

  onSetTo(status: string) {
    this.accountService.updateAccountStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
    // const loggingService = new LoggingService();
    // this.loggingService.logStatus(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
