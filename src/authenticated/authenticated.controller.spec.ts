import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticatedController } from './authenticated.controller';

describe('AuthenticatedController', () => {
  let controller: AuthenticatedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticatedController],
    }).compile();

    controller = module.get<AuthenticatedController>(AuthenticatedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
