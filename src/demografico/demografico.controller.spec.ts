import { Test, TestingModule } from '@nestjs/testing';
import { DemograficoController } from './demografico.controller';

describe('DemograficoController', () => {
  let controller: DemograficoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemograficoController],
    }).compile();

    controller = module.get<DemograficoController>(DemograficoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
