import { Injectable } from '@nestjs/common';
import { Account } from './account'

@Injectable()
export class AccountService {
    account: Account[] = [ 
        { password: 'senha', email: 'matheus@test.com', nome: 'matheus' },
        { password: 'senha', email: 'matheus@test2.com', nome: 'matheus' },
        { password: 'senha', email: 'matheus@test3.com', nome: 'matheus' },
        { password: 'senha', email: 'matheus@test4.com', nome: 'matheus' },
    ];

    getAll(): Account[] {
        return this.account
    }

    getByEmail(email: string): Account {
        const account = this.account.find((value) => value.email == email)
        return account
    }

    create(account: Account): Account {
        this.account.push(account)
        return account
    }

    update(account: Account): Account {
        const accountArray = this.getByEmail(account.email)
        if(accountArray) {
            accountArray.email = account.email,
            accountArray.nome = account.nome,
            accountArray.password = account.password
        }
        return accountArray
    }

    delete(email: string): void {
        const index = this.account.findIndex((value) => value.email == email)
        this.account.splice(index, 1)
    }
}
