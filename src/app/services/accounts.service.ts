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

      onAccountAdded(newAccount: {name: string, status: string}) {
        this.accounts.push(newAccount);
      }


      updateStatus(id: number, newStatus: string){
          this.accounts[id].status = newStatus;
      }
    
      onStatusChanged(updateInfo: {id: number, newStatus: string}) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
      }

}