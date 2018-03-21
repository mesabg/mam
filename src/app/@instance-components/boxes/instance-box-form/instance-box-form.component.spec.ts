import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBoxFormComponent } from './instance-box-form.component';

describe('InstanceBoxFormComponent', () => {
  let component: InstanceBoxFormComponent;
  let fixture: ComponentFixture<InstanceBoxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBoxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
