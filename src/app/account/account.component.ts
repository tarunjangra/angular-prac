import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  accounts: {name: string, status: string}[] = [];

  constructor(
    private accountService: AccountsService
  ){}
  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status);
  }
}
