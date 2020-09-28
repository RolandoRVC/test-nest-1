import { Test, TestingModule } from '@nestjs/testing';
import { ChanclasController } from './chanclas.controller';

describe('ChanclasController', () => {
  let controller: ChanclasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChanclasController],
    }).compile();

    controller = module.get<ChanclasController>(ChanclasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
