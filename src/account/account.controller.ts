import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AccountService } from './shared/account.service';
import { Account } from './shared/account'

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService){ }

    @Get()
    async getAll(): Promise<Account[]> {
        return this.accountService.getAll()
    }

    @Get(':email')
    async getById(@Param('email') email: string): Promise<Account> {
        return this.accountService.getByEmail(email)
    }

    @Post()
    async create(@Body() account: Account): Promise<Account>{
        return this.accountService.create(account)
    }

    @Put(':email')
    async update(@Param('email') email: string, @Body() account: Account): Promise<Account> {
        account.email = email
        return this.accountService.update(account)
    }

    @Delete(':email')
    async delete(@Param('email') email: string) {
        this.accountService.delete(email)
    }
}
