import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAptitudesComponent } from './banner-aptitudes.component';

describe('BannerAptitudesComponent', () => {
  let component: BannerAptitudesComponent;
  let fixture: ComponentFixture<BannerAptitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerAptitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
