import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutonComponent } from './soluton.component';

describe('SolutonComponent', () => {
  let component: SolutonComponent;
  let fixture: ComponentFixture<SolutonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
