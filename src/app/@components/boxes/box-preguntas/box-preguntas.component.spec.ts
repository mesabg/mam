import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPreguntasComponent } from './box-preguntas.component';

describe('BoxPreguntasComponent', () => {
  let component: BoxPreguntasComponent;
  let fixture: ComponentFixture<BoxPreguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPreguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
