import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBoxPreguntasComponent } from './instance-box-preguntas.component';

describe('InstanceBoxPreguntasComponent', () => {
  let component: InstanceBoxPreguntasComponent;
  let fixture: ComponentFixture<InstanceBoxPreguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBoxPreguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBoxPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
