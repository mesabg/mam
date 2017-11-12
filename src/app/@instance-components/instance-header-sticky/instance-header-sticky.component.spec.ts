import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceHeaderStickyComponent } from './instance-header-sticky.component';

describe('InstanceHeaderStickyComponent', () => {
  let component: InstanceHeaderStickyComponent;
  let fixture: ComponentFixture<InstanceHeaderStickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceHeaderStickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceHeaderStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
