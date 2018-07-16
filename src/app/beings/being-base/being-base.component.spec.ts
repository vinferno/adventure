import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeingBaseComponent } from './being-base.component';

describe('BeingBaseComponent', () => {
  let component: BeingBaseComponent;
  let fixture: ComponentFixture<BeingBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeingBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeingBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
