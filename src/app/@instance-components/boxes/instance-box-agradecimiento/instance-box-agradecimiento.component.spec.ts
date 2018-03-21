import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBoxAgradecimientoComponent } from './instance-box-agradecimiento.component';

describe('InstanceBoxAgradecimientoComponent', () => {
  let component: InstanceBoxAgradecimientoComponent;
  let fixture: ComponentFixture<InstanceBoxAgradecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBoxAgradecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBoxAgradecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
