import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticatedService } from './authenticated.service';

describe('AuthenticatedService', () => {
  let provider: AuthenticatedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthenticatedService],
    }).compile();

    provider = module.get<AuthenticatedService>(AuthenticatedService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
