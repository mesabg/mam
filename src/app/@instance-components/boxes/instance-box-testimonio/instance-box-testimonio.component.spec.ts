import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBoxTestimonioComponent } from './instance-box-testimonio.component';

describe('InstanceBoxTestimonioComponent', () => {
  let component: InstanceBoxTestimonioComponent;
  let fixture: ComponentFixture<InstanceBoxTestimonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBoxTestimonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBoxTestimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
