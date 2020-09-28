import { Test, TestingModule } from '@nestjs/testing';
import { ChanclasService } from './chanclas.service';

describe('ChanclasService', () => {
  let service: ChanclasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChanclasService],
    }).compile();

    service = module.get<ChanclasService>(ChanclasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
