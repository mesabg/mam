import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBoxMenuComponent } from './instance-box-menu.component';

describe('InstanceBoxMenuComponent', () => {
  let component: InstanceBoxMenuComponent;
  let fixture: ComponentFixture<InstanceBoxMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBoxMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBoxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
