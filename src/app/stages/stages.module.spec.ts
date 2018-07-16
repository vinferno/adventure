import { StagesModule } from './stages.module';

describe('StagesModule', () => {
  let stagesModule: StagesModule;

  beforeEach(() => {
    stagesModule = new StagesModule();
  });

  it('should create an instance', () => {
    expect(stagesModule).toBeTruthy();
  });
});
