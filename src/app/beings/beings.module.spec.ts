import { BeingsModule } from './beings.module';

describe('BeingsModule', () => {
  let beingsModule: BeingsModule;

  beforeEach(() => {
    beingsModule = new BeingsModule();
  });

  it('should create an instance', () => {
    expect(beingsModule).toBeTruthy();
  });
});
