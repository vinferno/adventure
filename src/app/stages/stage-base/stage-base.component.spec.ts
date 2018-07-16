import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageBaseComponent } from './stage-base.component';

describe('StageBaseComponent', () => {
  let component: StageBaseComponent;
  let fixture: ComponentFixture<StageBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
