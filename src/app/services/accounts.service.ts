import { LoggingService } from "./logging.services";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()

export class AccountsService {
    accounts = [
        {
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

      constructor(
        private loggingService: LoggingService
      ){}

      onAccountAdded(newAccount: {name: string, status: string}) {
        this.accounts.push(newAccount);
        this.loggingService.logStatusChanged(newAccount.status);
      }


      updateStatus(id: number, newStatus: string){
          this.accounts[id].status = newStatus;
          this.loggingService.logStatusChanged(newStatus);
      }
    

}