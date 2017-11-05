import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLogrosComponent } from './banner-logros.component';

describe('BannerLogrosComponent', () => {
  let component: BannerLogrosComponent;
  let fixture: ComponentFixture<BannerLogrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerLogrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerLogrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
