import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  statusUpdated = new EventEmitter<string>();

  private accounts: Array < any > = [{
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) {

  }

  getAccounts() {
    return this.accounts;
  }

  addAccount(account: any) {
    this.accounts.push(account);
    // const loggingService = new LoggingService();
    this.loggingService.logStatus(account.status);
  }

  updateAccountStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatus(newStatus);
  }
}
