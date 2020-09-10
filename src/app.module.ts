import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { AuthenticatedModule } from './authenticated/authenticated.module';

@Module({
  imports: [AccountModule, AuthenticatedModule],
  controllers: [],
  providers: [AppService]
})
export class AppModule {}
