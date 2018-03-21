import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAgradecimientoComponent } from './box-agradecimiento.component';

describe('BoxAgradecimientoComponent', () => {
  let component: BoxAgradecimientoComponent;
  let fixture: ComponentFixture<BoxAgradecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxAgradecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxAgradecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
