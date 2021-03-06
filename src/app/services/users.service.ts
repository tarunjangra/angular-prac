export class UserService{
    inactive: {name: string}[] = [
        {name: 'Rahul Dhingra'},
        {name: 'Kapil Arora'},
        {name: 'Priay Grag'},
        {name: 'Sonia Rani'}
    ];
    active: {name: string}[] = [
        {name: 'Tarun Kumar'},
        {name: 'Raman Kumar'},
        {name: 'Deep Singh'}
    ];
    operationCount: number = 0;

    makeActive(indx: number){
        this.active.push(this.inactive[indx]);
        this.inactive.splice(indx,1);
        ++this.operationCount;
    }

    makeInactive(indx: number){
        this.inactive.push(this.active[indx]);
        this.active.splice(indx,1);
        ++this.operationCount;
    }
}