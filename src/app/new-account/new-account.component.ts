import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.services';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded({name: accountName, status: accountStatus});
    this.loggingService.logStatusChanged(status);
  }
}
