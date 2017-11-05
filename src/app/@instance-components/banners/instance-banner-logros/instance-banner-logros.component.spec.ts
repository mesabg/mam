import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceBannerLogrosComponent } from './instance-banner-logros.component';

describe('InstanceBannerLogrosComponent', () => {
  let component: InstanceBannerLogrosComponent;
  let fixture: ComponentFixture<InstanceBannerLogrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceBannerLogrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceBannerLogrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
