import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxHistoriaComponent } from './box-historia.component';

describe('BoxHistoriaComponent', () => {
  let component: BoxHistoriaComponent;
  let fixture: ComponentFixture<BoxHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
