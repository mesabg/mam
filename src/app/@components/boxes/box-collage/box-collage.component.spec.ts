import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCollageComponent } from './box-collage.component';

describe('BoxCollageComponent', () => {
  let component: BoxCollageComponent;
  let fixture: ComponentFixture<BoxCollageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxCollageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
