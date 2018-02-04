import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBoxCollageComponent } from './instance-box-collage.component';

describe('InstanceBoxCollageComponent', () => {
  let component: InstanceBoxCollageComponent;
  let fixture: ComponentFixture<InstanceBoxCollageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBoxCollageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBoxCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
