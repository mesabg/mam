import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBoxBioComponent } from './instance-box-bio.component';

describe('InstanceBoxBioComponent', () => {
  let component: InstanceBoxBioComponent;
  let fixture: ComponentFixture<InstanceBoxBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBoxBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBoxBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
