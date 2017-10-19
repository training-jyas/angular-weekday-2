import { LoggingService } from './logging.service';
import { AccountService } from './account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [LoggingService, AccountService]
})
export class ServicesComponent implements OnInit {
  accounts = [];
  // accountService = new AccountService();

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {

  }

  ngOnInit() {
    this.accounts = this.accountService.getAccounts();
  }

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accountService.addAccount(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accountService.updateAccountStatus(updateInfo);
  // }
}
