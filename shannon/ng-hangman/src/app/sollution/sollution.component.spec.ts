import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SollutionComponent } from './sollution.component';

describe('SollutionComponent', () => {
  let component: SollutionComponent;
  let fixture: ComponentFixture<SollutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SollutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
