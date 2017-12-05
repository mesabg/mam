import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBoxHistoriaComponent } from './instance-box-historia.component';

describe('InstanceBoxHistoriaComponent', () => {
  let component: InstanceBoxHistoriaComponent;
  let fixture: ComponentFixture<InstanceBoxHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBoxHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBoxHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
