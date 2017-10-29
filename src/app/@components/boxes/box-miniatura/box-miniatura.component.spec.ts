import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMiniaturaComponent } from './box-miniatura.component';

describe('BoxMiniaturaComponent', () => {
  let component: BoxMiniaturaComponent;
  let fixture: ComponentFixture<BoxMiniaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxMiniaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMiniaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
