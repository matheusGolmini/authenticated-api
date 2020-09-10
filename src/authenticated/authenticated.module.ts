import { Module } from '@nestjs/common';
import { AuthenticatedController } from './authenticated.controller';
import { AuthenticatedService } from '../authenticated/shared/authenticated.service'

@Module({
    controllers: [AuthenticatedController],
    providers: [AuthenticatedService]
})
export class AuthenticatedModule {}
