import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaBigComponent } from './aria-big.component';

describe('AriaBigComponent', () => {
  let component: AriaBigComponent;
  let fixture: ComponentFixture<AriaBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriaBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriaBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
