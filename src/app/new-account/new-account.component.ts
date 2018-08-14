import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(
    private accountService: AccountsService
  ){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded({name: accountName, status: accountStatus});
  }
}
