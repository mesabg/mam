import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBioComponent } from './box-bio.component';

describe('BoxBioComponent', () => {
  let component: BoxBioComponent;
  let fixture: ComponentFixture<BoxBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
