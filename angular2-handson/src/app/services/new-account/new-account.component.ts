import { AccountService } from '../account.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => {
        console.log('new status', status);
      }
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    // const loggingService = new LoggingService();
    // this.loggingService.logStatus(accountStatus);
    this.accountService.addAccount({
      name: accountName,
      status: accountStatus
    });
  }
}
