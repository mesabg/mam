import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTestimonioComponent } from './box-testimonio.component';

describe('BoxTestimonioComponent', () => {
  let component: BoxTestimonioComponent;
  let fixture: ComponentFixture<BoxTestimonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxTestimonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTestimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
