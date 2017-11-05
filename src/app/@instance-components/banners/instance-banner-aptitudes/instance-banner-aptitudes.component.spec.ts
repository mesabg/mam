import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBannerAptitudesComponent } from './instance-banner-aptitudes.component';

describe('InstanceBannerAptitudesComponent', () => {
  let component: InstanceBannerAptitudesComponent;
  let fixture: ComponentFixture<InstanceBannerAptitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBannerAptitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBannerAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
