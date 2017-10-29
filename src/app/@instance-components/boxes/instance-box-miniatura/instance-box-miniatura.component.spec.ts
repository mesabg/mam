import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBoxMiniaturaComponent } from './instance-box-miniatura.component';

describe('InstanceBoxMiniaturaComponent', () => {
  let component: InstanceBoxMiniaturaComponent;
  let fixture: ComponentFixture<InstanceBoxMiniaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBoxMiniaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBoxMiniaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
